import { CamperFavorite } from '../../components/CamperFavorite/CamperFavorite';
// import { Container } from '../../components/Container/Container';
import scss from './Favorites.module.scss';

const Favorites = () => {
  return (
    <div className={scss.favoriteWrapper}>
      <CamperFavorite />
    </div>
  );
};

export default Favorites;
