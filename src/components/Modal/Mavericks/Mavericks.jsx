import icons from '../../../assets/sprite.svg';
import scss from './Mavericks.module.scss';
import { ToggleTab } from '../ToggleTab/ToggleTab';

export const Mavericks = ({ item }) => {
  const { name, rating, price, location, description, gallery, reviews } = item;
  return (
    <>
      <div className={scss.wrapperFixed}>
        <p className={scss.title}>{name}</p>
        <div className={scss.rate}>
          <div className={scss.rating}>
            <svg className={scss.starIcon}>
              <use href={`${icons}#icon-rating`}></use>
            </svg>
            <p
              className={scss.rateText}
            >{`${rating}(${reviews.length} Reviews)`}</p>
          </div>
          <div className={scss.rating}>
            <svg className={scss.locationIcon}>
              <use href={`${icons}#icon-location`}></use>
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p className={scss.price}>{`€${price}`}</p>
      </div>

      <div className={scss.scrollBlock}>
        <ul className={scss.gallery}>
          {gallery.map((image, index) => (
            <li key={index} className={scss.thumb}>
              <img src={image} alt={name} className={scss.image} />
            </li>
          ))}
        </ul>
        <p className={scss.desc}>{description}</p>
        <ToggleTab item={item} />
      </div>
    </>
  );
};
