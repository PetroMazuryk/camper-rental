import { CamperCard } from '../../components/CamperCard/CamperCard';

import scss from './Catalog.module.scss';
const Catalog = () => {
  return (
    <div className={scss.catalogWrapper}>
      <CamperCard />
    </div>
  );
};

export default Catalog;
