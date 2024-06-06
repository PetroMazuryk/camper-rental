import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import scss from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <ul className={scss.list}>
        <li>
          <a href="https://github.com/PetroMazuryk" target="_blank">
            <BsGithub size={52} color="var(--home-text-color)" />
          </a>
        </li>
        <li>
          <p className={scss.text}>
            © 2024 Petro Mazuryk. All rights reserved. Developed for a test
            assignment at GoIT School.
          </p>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/petro-mazuryk-8a6371265/"
            target="_blank"
          >
            <GrLinkedin size={52} color="var(--home-text-color)" />
          </a>
        </li>
      </ul>
    </>
  );
};
