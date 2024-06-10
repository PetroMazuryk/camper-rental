import { Button } from '../Button/Button';
import { Equipment } from './Equipment/Equipment';
import icon from '../../assets/sprite.svg';
import scss from './CamperBar.module.scss';
export const CamperBar = () => {
  return (
    <form>
      <div className={scss.container}>
        <div className={scss.location}>
          <label htmlFor="location">Location</label>
          <div className={scss.placeholder}>
            <svg className={scss.locationIcon}>
              <use href={`${icon}#icon-location`}></use>
            </svg>
            <input
              name="location"
              id="location"
              className={scss.locationInput}
              placeholder="Kyiv, Ukraine"
            />
          </div>
        </div>
        <div>
          <p className={scss.filters}>Filters</p>
          <Equipment />
        </div>
        <div>
          <div>Vehicle </div>
          <svg className={scss.lo}>
            <use href={`${icon}#icon-edalts`}></use>
          </svg>
        </div>
      </div>
      <Button variant="show">Search</Button>
    </form>
  );
};
