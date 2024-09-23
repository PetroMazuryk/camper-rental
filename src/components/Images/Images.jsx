import { useState } from 'react';
import { ModalSlider } from '../ModalSlider/ModalSlider';

import scss from './Images.module.scss';

export const Images = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = index => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <ul className={scss.containerImg}>
        {images.map((image, index) => (
          <li key={index} className={scss.thumb}>
            <img
              className={scss.camperImg}
              src={image}
              alt={`Image ${index}`}
              onClick={() => openModal(index)}
            />
          </li>
        ))}
      </ul>
      <ModalSlider
        isOpen={modalOpen}
        onClose={closeModal}
        image={images[selectedImageIndex]}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
};
