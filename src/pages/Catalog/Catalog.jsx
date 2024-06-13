import { CamperList } from '../../components/CamperList/CamperList';

import scss from './Catalog.module.scss';
const Catalog = () => {
  return (
    <div className={scss.catalogWrapper}>
      <CamperList />
    </div>
  );
};

export default Catalog;
