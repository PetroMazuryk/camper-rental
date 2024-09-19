import { CamperList } from '../../components/CamperList/CamperList';

import { Container } from '../../components/Container/Container.jsx';

import scss from './Catalog.module.scss';
const Catalog = () => {
  return (
    <Container>
      <div className={scss.catalogWrapper}>
        <CamperList />
      </div>
    </Container>
  );
};

export default Catalog;
