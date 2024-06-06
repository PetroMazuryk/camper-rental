import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

import { campersFetch } from './services/apiCamper';

function App() {
  useEffect(() => {
    async function fetchArticles() {
      campersFetch();
    }

    fetchArticles();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" redirect to element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
