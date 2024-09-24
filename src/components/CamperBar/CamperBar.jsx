import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocationFilter } from '../../redux/filter/slice';
import { Button } from '../Button/Button';
import { Equipment } from './Equipment/Equipment';
import { Type } from './Type/Type';
import icon from '../../assets/sprite.svg';
import scss from './CamperBar.module.scss';

export const CamperBar = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setLocationFilter(location));
  };

  return (
    <form onSubmit={handleSubmit}>
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
              placeholder="City"
              type="text"
              value={location}
              onChange={handleLocationChange}
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
      <Button variant="show" type="submit">
        Search
      </Button>
    </form>
  );
};
