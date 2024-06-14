import icons from '../../../assets/sprite.svg';
import { BookingForm } from '../../BookingForm/BookingForm';
import scss from './Reviews.module.scss';

export const Reviews = ({ item }) => {
  const { reviews } = item;

  const renderStars = reviewer_rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starClass = i < reviewer_rating ? scss.yellow : scss.white;
      stars.push(
        <svg key={i} className={`${scss.starIcon} ${starClass}`}>
          <use href={`${icons}#icon-rating`}></use>
        </svg>
      );
    }
    return stars;
  };

  const elements = reviews.map(
    ({ reviewer_name, reviewer_rating, comment }, index) => {
      const stars = renderStars(reviewer_rating);

      return (
        <li key={index} className={scss.item}>
          <div className={scss.head}>
            <div className={scss.round}>
              <p className={scss.letter}>{reviewer_name.slice(0, 1)}</p>
            </div>
            <div>
              <h3 className={scss.author}>{reviewer_name}</h3>
              <div className={scss.stars}>{stars}</div>
            </div>
          </div>
          <p className={scss.comment}>{comment}</p>
        </li>
      );
    }
  );

  return (
    <div className={scss.reviewContainer}>
      <div className={scss.reviewsWrapper}>
        {reviews?.length > 0 ? (
          <ul className={scss.list}>{elements}</ul>
        ) : (
          <h3 className={scss.text}>We have no reviews for this camper</h3>
        )}
      </div>
      <BookingForm />
    </div>
  );
};
