import { useState, useEffect } from 'react';
import scss from './Slider.module.scss';

export const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={scss.sliderWrapper}>
      <img
        className={scss.sliderImg}
        src={images[index]}
        alt={`Slide ${index}`}
      />
      <strong className={scss.sliderText}>
        Rent camping sites for the perfect outdoor getaway!
      </strong>
    </div>
  );
};
