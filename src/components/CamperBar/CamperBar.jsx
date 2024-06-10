import { Button } from '../Button/Button';
import { Equipment } from './Equipment/Equipment';
import { Type } from './Type/Type';
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
          <Type />
        </div>
      </div>
      <Button variant="show">Search</Button>
    </form>
  );
};
