import icons from '../../../assets/sprite.svg';
import scss from './Type.module.scss';

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

  return (
    <div>
      <p className={scss.title}>Vehicle type</p>
      <ul className={scss.equipList}>
        {types.map(({ icon, title, backendName }) => {
          return (
            <li key={icon}>
              <input
                type="checkbox"
                id={icon}
                value={backendName}
                className={scss.visuallyHidden}
              />
              <label htmlFor={icon} className={scss.itemLabel}>
                <svg
                  className={`${scss.itemIcon} ${
                    title === 'AC' && scss.itemIconFill
                  }`}
                >
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
