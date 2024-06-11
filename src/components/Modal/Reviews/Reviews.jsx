import icons from '../../../assets/sprite.svg';
import scss from './Reviews.module.scss';

export const Reviews = ({ item }) => {
  const { reviews } = item;

  const elements = reviews.map(
    ({ reviewer_name, reviewer_rating, comment }, index) => {
      const rating = [];
      for (let i = 0; i < reviewer_rating; i++) {
        rating.push(
          <svg key={i} className={scss.starIcon}>
            <use href={`${icons}#icon-rating`}></use>
          </svg>
        );
      }

      return (
        <li key={index} className={scss.item}>
          <div className={scss.head}>
            <div className={scss.round}>
              <p className={scss.letter}>{reviewer_name.slice(0, 1)}</p>
            </div>
            <div>
              <h3 className={scss.author}>{reviewer_name}</h3>
              {rating}
            </div>
          </div>
          <p className={scss.comment}>{comment}</p>
        </li>
      );
    }
  );

  return (
    <>
      <div className={scss.reviewsWrapper}>
        {reviews?.length > 0 ? (
          <ul className={scss.list}>{elements}</ul>
        ) : (
          <h3 className={scss.text}>We have no reviews for this camper</h3>
        )}
      </div>
    </>
  );
};
