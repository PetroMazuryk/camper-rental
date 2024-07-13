import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { selectFavoriteCampers } from '../../redux/favorite/selectors';
import {
  addCamperFavorite,
  deleteCamperFavorite,
} from '../../redux/favorite/slice';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModal';
import icon from '../../assets/sprite.svg';
import scss from './CamperItem.module.scss';
import { Mavericks } from '../Modal/Mavericks/Mavericks';

export const CamperItem = ({ item }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    _id,
    name,
    rating,
    price,
    location,
    description,
    details,
    gallery,
    adults,
    transmission,
    engine,
    reviews,
  } = item;

  const favoriteCampers = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();

  const isCamper = favoriteCampers.some(({ _id }) => _id === item._id);

  const toggleFavoriteCamper = () => {
    if (!isCamper) {
      dispatch(addCamperFavorite(item));
    } else {
      dispatch(deleteCamperFavorite(_id));
    }
  };

  return (
    <>
      <div className={scss.imageWrapper}>
        {Array.isArray(gallery) && gallery.length > 0 ? (
          <img className={scss.image} src={gallery[0]} alt={name} />
        ) : (
          <img className={scss.image} src="#" alt="Default Image" />
        )}
      </div>

      <div className={scss.infoWrapper}>
        <div className={scss.headingInner}>
          <h3 className={scss.heading}>{name}</h3>
          <div className={scss.priceInner}>
            <p className={scss.heading}>
              &#8364;
              {price !== undefined ? price.toFixed(2) : 'N/A'}
            </p>
            <button className={scss.buttonFavourite}>
              <svg
                onClick={toggleFavoriteCamper}
                className={`${scss.like} ${isCamper ? scss.likeActive : ''}`}
                width="21"
                height="19"
              >
                <use href={`${icon}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={scss.boxInner}>
          <div className={scss.subjectInner}>
            <div className={scss.holder}>
              <svg className={scss.iconRating} width="16" height="16">
                <use href={`${icon}#icon-rating`}></use>
              </svg>
              <div className={`${scss.subject} ${scss.reviews}`}>
                <p>{`${rating}(${
                  Array.isArray(reviews) ? reviews.length : '0'
                } Reviews)`}</p>
              </div>
            </div>

            <div className={scss.holder}>
              <svg className={scss.iconLocation} width="16" height="16">
                <use href={`${icon}#icon-location`}></use>
              </svg>
              <div className={scss.subject}>
                <p>{location}</p>
              </div>
            </div>
          </div>

          <p className={scss.desc}>{description}</p>

          <ul className={scss.categoryList}>
            <li className={scss.categoryItem}>
              <svg className={scss.icon}>
                <use href={`${icon}#icon-adults`}></use>
              </svg>
              {`${adults} adults`}
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.transIcon}>
                <use href={`${icon}#icon-automatic`}></use>
              </svg>
              <p className={scss.text}>{transmission}</p>
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.icon}>
                <use href={`${icon}#icon-petrol`}></use>
              </svg>
              <p className={scss.text}>{engine}</p>
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.transIcon}>
                <use href={`${icon}#icon-kitchen`}></use>
              </svg>
              <p className={scss.text}>kitchen</p>
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.transIcon}>
                <use href={`${icon}#icon-beds`}></use>
              </svg>
              {details && `${details.beds} beds`}
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.icon}>
                <use href={`${icon}#icon-ac`}></use>
              </svg>
              <p className={scss.text}>AC</p>
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.transIcon}>
                <use href={`${icon}#icon-cd`}></use>
              </svg>
              <p className={scss.text}>CD</p>
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.transIcon}>
                <use href={`${icon}#icon-tv`}></use>
              </svg>
              <p className={scss.text}>TV</p>
            </li>
            <li className={scss.categoryItem}>
              <svg className={scss.transIcon}>
                <use href={`${icon}#icon-hob`}></use>
              </svg>
              <p className={scss.text}>Hob</p>
            </li>
          </ul>

          <Button variant="show" onClick={openModal}>
            Show more
          </Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Mavericks item={item} />
        </Modal>
      </div>
    </>
  );
};
