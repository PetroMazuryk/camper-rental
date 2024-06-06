import './App.css';
import { useEffect } from 'react';

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
      <h1>Camper Rental</h1>
    </>
  );
}

export default App;
