import icons from '../../../assets/sprite.svg';
import styles from './Categories.module.scss';

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
    <div className={styles.container}>
      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-adults`}></use>
          </svg>
          {`${adults} adults`}
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-automatic`}></use>
          </svg>
          <p className={styles.text}>{transmission}</p>
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          <p className={styles.text}>AC</p>
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p className={styles.text}>{engine}</p>
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          <p className={styles.text}>kitchen</p>
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-bed`}></use>
          </svg>
          {`${beds} beds`}
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-airconditioner`}></use>
          </svg>
          {`${airConditioner} air conditioner`}
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-cd`}></use>
          </svg>
          <p className={styles.text}>CD</p>
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-radio`}></use>
          </svg>
          <p className={styles.text}>Radio</p>
        </li>
        <li className={styles.categoryItem}>
          <svg className={styles.transIcon}>
            <use href={`${icons}#icon-hob`}></use>
          </svg>
          {`${hob} hob`}
        </li>
      </ul>
    </div>
  );
};
