import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../Button/Button';
import icon from '../../assets/sprite.svg';
import { postCampersAsync } from '../../redux/campers/operations';
import scss from './BookingForm.module.scss';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters and spaces')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required('Date is required'),
  comment: yup.string(),
});

export const BookingForm = () => {
  const dispatch = useDispatch();

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: { name: '', email: '', date: '', comment: '' },
  });

  const dateReceived = watch('date');

  // const onSubmit = async form => {
  //   form.date = dateReceived;

  //   const resultAction = await dispatch(postCampersAsync(form));

  //   if (postCampersAsync.fulfilled.match(resultAction)) {
  //     reset();
  //     window.location.reload();
  //   }
  // };
  const onSubmit = () => {
    dispatch(postCampersAsync());

    reset();
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <h3 className={scss.title}>Book your campervan now</h3>
        <p className={scss.text}>
          Stay connected! We are always ready to help you.
        </p>

        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Name"
          className={`${scss.inputCommon} ${scss.input}`}
        />
        {errors.name && (
          <span className={scss.errorMessage}>{errors.name.message}</span>
        )}

        <div className={scss.inputsInner}>
          <input
            {...register('email', { required: true })}
            type="text"
            placeholder="Email"
            className={`${scss.inputCommon} ${scss.input}`}
          />
          {errors.email && (
            <span className={scss.errorMessage}>{errors.email.message}</span>
          )}
        </div>

        <div className={scss.inputsInner}>
          <div className={scss.inputContainer}>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={dateReceived}
                  onChange={date => field.onChange(date)}
                  dateFormat="dd MMMM yyyy"
                  calendarStartDay={1}
                  placeholderText="Booking date"
                  className={`${scss.inputCommon} ${scss.inputCalendar}`}
                  calendarClassName={scss.calendarStyles}
                  minDate={new Date()}
                  popperProps={{
                    modifiers: { preventOverflow: { enabled: false } },
                  }}
                  formatWeekDay={day => day.substr(0, 3).toUpperCase()}
                />
              )}
            />
            <svg className={scss.iconCalendar} width="20" height="20">
              <use href={`${icon}#icon-calendar`}></use>
            </svg>
          </div>
          {errors.date && (
            <span className={scss.errorMessage}>{errors.date.message}</span>
          )}
        </div>

        <div className={scss.inputsInner}>
          <textarea
            {...register('comment')}
            type="text"
            placeholder="Comment"
            className={`${scss.inputCommon} ${scss.textarea}`}
          />
        </div>

        <Button variant="send">Send</Button>
      </form>
    </>
  );
};
