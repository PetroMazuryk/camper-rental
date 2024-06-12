import { Categories } from '../Categories/Categories';
import { Details } from '../Details/Details';
import { BookingForm } from '../../BookingForm/BookingForm';
import scss from './Features.module.scss';

export const Features = item => {
  return (
    <div className={scss.container}>
      <div className={scss.categories}>
        <div>
          <Categories item={item} />
          <Details item={item} />
        </div>

        <BookingForm />
      </div>
    </div>
  );
};
