import { useState } from 'react';
import scss from './ToggleTab.module.scss';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';

export const ToggleTab = ({ item }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleFeaturesClick = () => {
    setActiveTab('features');
  };

  const handleReviewsClick = () => {
    setActiveTab('reviews');
  };

  return (
    <>
      <div className={scss.toggleWrapper}>
        <button
          className={`${scss.toggleLink} ${
            activeTab === 'features' ? scss.activeBtn : ''
          }`}
          onClick={handleFeaturesClick}
        >
          Features
        </button>
        <button
          className={`${scss.toggleLink} ${
            activeTab === 'reviews' ? scss.activeBtn : ''
          }`}
          onClick={handleReviewsClick}
        >
          Reviews
        </button>
      </div>

      <>
        {activeTab === 'features' && <Features item={item} />}
        {activeTab === 'reviews' && <Reviews item={item} />}
      </>
    </>
  );
};
