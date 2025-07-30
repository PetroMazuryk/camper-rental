import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { ToasterBar } from '../ToasterBar';
import { Container } from '../Container/Container';
import { Loader } from '../../components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <ToasterBar />
        </div>
      </main>
    </Container>
  );
};
