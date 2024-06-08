import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from '../Modal/Modal';
import { useModal } from '../../components/hooks/useModal';

import { selectCampersData } from '../../redux/campers/selectors';
import { fetchCampersAsync } from '../../redux/campers/operations';
import icon from '../../assets/sprite.svg';

import scss from './CamperCard.module.scss';

export const CamperCard = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const campers = useSelector(selectCampersData);
  console.log(campers);
  useEffect(() => {
    dispatch(fetchCampersAsync());
  }, [dispatch]);

  return (
    <>
      {campers.length > 0 && (
        <ul className={scss.list}>
          {campers.map(
            ({
              _id,
              name,
              // location,
              price,
              gallery,
              description,
              // rating,
              // reviews,
            }) => {
              return (
                <li className={scss.item} key={_id}>
                  <div className={scss.imageWrapper}>
                    <img className={scss.image} src={gallery[0]} alt={name} />
                  </div>

                  <div className={scss.infoWrapper}>
                    <div className={scss.headingInner}>
                      <h3 className={scss.heading}>{name}</h3>
                      <div className={scss.priceInner}>
                        <p className={scss.heading}>
                          &#8364;{price.toFixed(2)}
                        </p>
                        <button className={scss.buttonFavourite}>
                          <svg className={scss.active} width="21" height="19">
                            <use href={`${icon}#icon-favourite`}></use>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className={scss.boxInner}>
                      <div className={scss.subjectInner}>
                        <div className={scss.holder}>
                          <svg
                            className={scss.iconRating}
                            width="16"
                            height="16"
                          >
                            <use href={`${icon}#icon-rating`}></use>
                          </svg>
                          <p className={`${scss.subject} ${scss.reviews}`}>
                            <div>Reviews info</div>
                          </p>
                        </div>

                        <div className={scss.holder}>
                          <svg
                            className={scss.iconLocation}
                            width="16"
                            height="16"
                          >
                            <use href={`${icon}#icon-location`}></use>
                          </svg>
                          <p className={scss.subject}>
                            <div>Location</div>
                          </p>
                        </div>
                      </div>

                      <p className={scss.desc}>{description}</p>
                      <ul className={scss.list}>
                        <div>FeaturesCategories</div>
                      </ul>
                      <button
                        className={scss.button}
                        type="button"
                        onClick={openModal}
                      >
                        Show more
                      </button>

                      <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <div>Camper Card</div>
                      </Modal>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};
