import { NavLink } from 'react-router-dom';
import ImgCamper from '../../assets/campers.webp';
import { Footer } from '../../components/Footer/Footer';
import scss from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <h1 className={scss.homeTitle}>Welcome to the campers shop</h1>
      <h2 className={scss.homeSubtitle}>
        Book the camper from the{' '}
        <NavLink to="/catalog" className={scss.homeLink}>
          Catalog
        </NavLink>
      </h2>
      <div className={scss.wrapperImg}>
        <img className={scss.img} src={ImgCamper} alt="image camper" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
