import { useEffect, useState } from 'react';
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
      {!isOpen && (
        <div className={scss.modalWrapper} onClick={handleModalClick}>
          <div className={scss.modalContent}>
            <button className={scss.closeButton} onClick={handleClose}>
              &times;
            </button>
            <button className={scss.prevButton} onClick={handlePrev}>
              {'<'}
            </button>
            <button className={scss.nextButton} onClick={handleNext}>
              {'>'}
            </button>
            <img className={scss.modalImg} src={image} alt="Modal Image" />
          </div>
        </div>
      )}
    </>
  );
};
