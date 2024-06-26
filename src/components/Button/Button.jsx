import clsx from 'clsx';
import scss from './Button.module.scss';

export const Button = ({ variant, children, ...props }) => {
  return (
    <button
      type="submit"
      className={clsx(scss.myBtn, scss[variant])}
      {...props}
    >
      {children}
    </button>
  );
};
