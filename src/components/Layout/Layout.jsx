import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { ToasterBar } from '../ToasterBar';
import { Loader } from '../../components/Loader/Loader';

import scss from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={scss.wrapper}>
      <Header />
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <ToasterBar />
        </div>
      </main>
    </div>
  );
};
