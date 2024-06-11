import { Categories } from '../Categories/Categories';
import { Details } from '../Details/Details';
import scss from './Features.module.scss';

export const Features = item => {
  return (
    <div className={scss.container}>
      <div className={scss.categories}>
        <Categories item={item} />
        <Details item={item} />
      </div>
    </div>
  );
};
