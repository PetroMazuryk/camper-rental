import { NavLink } from 'react-router-dom';

import ImgA from '../../assets/slider/img-1.webp';
import ImgB from '../../assets/slider/img-2.jpg';
import ImgC from '../../assets/slider/img-3.jpg';
import ImgD from '../../assets/slider/img-4.jpg';
import ImgE from '../../assets/slider/img-5.jpg';

import { Slider } from '../../components/Slider/Slider';
import { Footer } from '../../components/Footer/Footer';

import scss from './Home.module.scss';

const Home = () => {
  const images = [ImgA, ImgB, ImgC, ImgD, ImgE];
  return (
    <div>
      <h1 className={scss.homeTitle}>Welcome to the campers shop</h1>
      <h2 className={scss.homeSubtitle}>
        Book the camper from the{' '}
        <NavLink to="/catalog" className={scss.homeLink}>
          Catalog
        </NavLink>
      </h2>
      <Slider images={images} />

      <Footer />
    </div>
  );
};

export default Home;
