import { useSelector } from 'react-redux';
import { CamperItem } from '../CamperItem/CamperItem';
import { selectFavoriteCampers } from '../../redux/favorite/selectors';
import scss from './CamperFavorite.module.scss';

export const CamperFavorite = () => {
  const favoriteCampers = useSelector(selectFavoriteCampers);

  return (
    <div className={scss.camperWrapper}>
      <ul className={scss.listWrapper}>
        {favoriteCampers.map(item => (
          <li className={scss.item} key={item._id}>
            <CamperItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
