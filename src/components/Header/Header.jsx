import { NavLink, Link } from 'react-router-dom';

import sprite from '../../assets/sprite.svg';
import clsx from 'clsx';
import scss from './Header.module.scss';

export const Header = () => {
  const navLink = ({ isActive }) => {
    return clsx(scss.link, isActive && scss.active);
  };
  return (
    <header className={scss.header}>
      <Link className={scss.wrapperLogo} to="/">
        <svg className={scss.logo}>
          <use href={`${sprite}#icon-camper`}></use>
        </svg>
        <p className={scss.textLogo}>Camper Rental</p>
      </Link>
      <nav className={scss.navWrap}>
        <NavLink to="/" className={navLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navLink}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={navLink}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
