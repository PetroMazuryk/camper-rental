import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { ToasterBar } from '../ToasterBar';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
          <ToasterBar />
        </div>
      </main>
    </>
  );
};
