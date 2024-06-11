import { useState } from 'react';
import scss from './ToggleTab.module.scss';
import { Features } from '../Features/Features';

export const ToggleTab = ({ item }) => {
  const [activeTab, setActiveTab] = useState(null);

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
        {activeTab === 'reviews' && <div>Reviews</div>}
      </>
    </>
  );
};
