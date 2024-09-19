import scss from './Container.module.scss';

export const Container = ({ children }) => {
  return <div className={scss.container}>{children}</div>;
};
