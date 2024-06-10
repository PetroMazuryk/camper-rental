import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../components/hooks/useModal';

import { selectAllCampers } from '../../redux/campers/selectors';
import { fetchCampersAsync } from '../../redux/campers/operations';
import { Button } from '../Button/Button';
import toast from 'react-hot-toast';
import icon from '../../assets/sprite.svg';
import scss from './CamperCard.module.scss';

export const CamperCard = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const { items } = useSelector(selectAllCampers);
  const [page, setPage] = useState(1);
  const [hiddenBtn, setHiddenBtn] = useState(false);

  useEffect(() => {
    dispatch(fetchCampersAsync(page))
      .unwrap()
      .then(() => {
        toast.success('Cards added successfully');
      })
      .catch(() => {
        toast.error('A download error occurred');
      });
  }, [dispatch, page]);

  useEffect(() => {
    if (page > Math.ceil(items.length / 4)) {
      setHiddenBtn(false);
    } else {
      setHiddenBtn(true);
    }
  }, [page, items]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {Array.isArray(items) && items.length > 0 && (
        <ul className={scss.listWrapper}>
          {items.map(
            ({
              _id,
              name,
              gallery,
              price,
              rating,
              reviews,
              location,
              description,
              adults,
              transmission,
              engine,
              details,
            }) => (
              <li className={scss.item} key={_id}>
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
                        &#8364;{price !== undefined ? price.toFixed(2) : 'N/A'}
                      </p>
                      <button className={scss.buttonFavourite}>
                        <svg className={scss.active} width="21" height="19">
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
                        <svg
                          className={scss.iconLocation}
                          width="16"
                          height="16"
                        >
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
                    </ul>

                    <Button variant="show" onClick={openModal}>
                      Show more
                    </Button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                      <div>Camper Card</div>
                    </Modal>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}
      <div className={scss.btnWrapper}>
        {items && hiddenBtn && (
          <button type="button" className={scss.loadBtn} onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
