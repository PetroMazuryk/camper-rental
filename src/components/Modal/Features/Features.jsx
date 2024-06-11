import { Categories } from '../Categories/Categories';
import scss from './Features.module.scss';
export const Features = item => {
  console.log('Features', item);
  return (
    <div className={scss.container}>
      <div className={scss.categories}>
        <Categories item={item} />
      </div>
    </div>
  );
};
