import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsCampersLoading } from '../../redux/campers/selectors';

import { Header } from '../Header/Header';
import { ToasterBar } from '../ToasterBar';
import { Container } from '../Container/Container';
import { Loader } from '../../components/Loader/Loader';

export const Layout = () => {
  const isCampersLoading = useSelector(selectIsCampersLoading);
  return (
    <Container>
      <Header />
      {isCampersLoading && <Loader message="Data is loading, please wait..." />}
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
