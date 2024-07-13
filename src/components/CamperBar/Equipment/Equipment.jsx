import icons from '../../../assets/sprite.svg';
import scss from './Equipment.module.scss';

export const Equipment = () => {
  const equipments = [
    {
      icon: 'ac',
      title: 'AC',
      backendName: 'airConditioner',
    },

    {
      icon: 'automatic',
      title: 'Automatic',
      backendName: 'automatic',
    },
    {
      icon: 'kitchen',
      title: 'Kitchen',
      backendName: 'kitchen',
    },
    {
      icon: 'tv',
      title: 'TV',
      backendName: 'TV',
    },
    {
      icon: 'shower',
      title: 'Shower/WC',
      backendName: 'bathroom',
    },
    {
      icon: 'freezer',
      title: 'Freezer',
      backendName: 'freezer',
    },
  ];
  return (
    <div>
      <p className={scss.title}>Vehicle equipment</p>
      <ul className={scss.equipList}>
        {equipments.map(({ icon, title, backendName }) => {
          return (
            <li key={icon} className={scss.itemCheckbox}>
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
