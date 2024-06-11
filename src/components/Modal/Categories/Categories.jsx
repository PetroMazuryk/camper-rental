import icons from '../../../assets/sprite.svg';
import scss from './Categories.module.scss';

export const Categories = ({ item }) => {
  const {
    item: {
      adults,
      transmission,
      engine,
      details: { beds, airConditioner, hob },
    },
  } = item;

  return (
    <div className={scss.container}>
      <ul className={scss.categoryList}>
        <li className={scss.categoryItem}>
          <svg className={scss.icon}>
            <use href={`${icons}#icon-adults`}></use>
          </svg>
          {`${adults} adults`}
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-automatic`}></use>
          </svg>
          <p className={scss.text}>{transmission}</p>
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.icon}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          <p className={scss.text}>AC</p>
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.icon}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p className={scss.text}>{engine}</p>
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          <p className={scss.text}>kitchen</p>
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-bed`}></use>
          </svg>
          {`${beds} beds`}
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-airconditioner`}></use>
          </svg>
          {`${airConditioner} air conditioner`}
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-cd`}></use>
          </svg>
          <p className={scss.text}>CD</p>
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-radio`}></use>
          </svg>
          <p className={scss.text}>Radio</p>
        </li>
        <li className={scss.categoryItem}>
          <svg className={scss.transIcon}>
            <use href={`${icons}#icon-hob`}></use>
          </svg>
          {`${hob} hob`}
        </li>
      </ul>
    </div>
  );
};
