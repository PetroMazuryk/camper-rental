import { CamperFavorite } from '../../components/CamperFavorite/CamperFavorite';
import { Container } from '../../components/Container/Container';
import scss from './Favorites.module.scss';

const Favorites = () => {
  return (
    <Container>
      <div className={scss.favoriteWrapper}>
        <CamperFavorite />
      </div>
    </Container>
  );
};

export default Favorites;
