import icons from '../../../assets/sprite.svg';
import scss from './Type.module.scss';
import { useState } from 'react';

export const Type = () => {
  const types = [
    {
      icon: 'van',
      title: 'Van',
      backendName: 'panelTruck',
    },
    {
      icon: 'fully-integrated',
      title: 'Fully Integrated',
      backendName: 'fullyIntegrated',
    },
    {
      icon: 'alcove',
      title: 'Alcove',
      backendName: 'alcove',
    },
  ];

  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = e => {
    setSelectedType(e.target.value);
  };

  return (
    <div>
      <p className={scss.title}>Vehicle type</p>
      <ul className={scss.equipList}>
        {types.map(({ icon, title, backendName }) => {
          return (
            <li key={icon}>
              <input
                type="radio"
                id={icon}
                name="vehicleType"
                value={backendName}
                checked={selectedType === backendName}
                onChange={handleTypeChange}
                className={scss.visuallyHidden}
              />
              <label
                htmlFor={icon}
                className={`${scss.itemLabel} ${
                  selectedType === backendName ? scss.activeLabel : ''
                }`}
              >
                <svg className={scss.itemIcon}>
                  <use href={`${icons}#icon-${icon}`}></use>
                </svg>
                {title}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
