import { SiReactos } from 'react-icons/si';
import scss from './Loader.module.scss';

export const Loader = () => {
  return (
    <div>
      Loader
      <SiReactos className={scss.loader} size={50} color="aqua" />
    </div>
  );
};
