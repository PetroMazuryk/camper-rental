import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { ToasterBar } from '../ToasterBar';
import { Loader } from '../../components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <ToasterBar />
        </div>
      </main>
    </>
  );
};
