import { useEffect, useState } from 'react';
import icon from '../../assets/sprite.svg';

import scss from './ModalSlider.module.scss';

export const ModalSlider = ({
  isOpen,
  onClose,
  image,
  handlePrev,
  handleNext,
}) => {
  const [isEscapePressed, setIsEscapePressed] = useState(false);

  useEffect(() => {
    const handleEscape = event => {
      if (event.keyCode === 27) {
        setIsEscapePressed(true);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isEscapePressed) {
      onClose();
    }
  }, [isEscapePressed, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleModalClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={scss.modalWrapper} onClick={handleModalClick}>
          <div className={scss.modalContent}>
            <button className={scss.closeBtn} onClick={handleClose}>
              &times;
            </button>
            <button className={scss.prevBtn} onClick={handlePrev}>
              <svg className={scss.icon} width="36" height="36">
                <use href={`${icon}#icon-circle-left`}></use>
              </svg>
            </button>
            <button className={scss.nextBtn} onClick={handleNext}>
              <svg className={scss.icon} width="36" height="36">
                <use href={`${icon}#icon-circle-right`}></use>
              </svg>
            </button>

            <img className={scss.modalImg} src={image} alt="Modal Image" />
          </div>
        </div>
      )}
    </>
  );
};
