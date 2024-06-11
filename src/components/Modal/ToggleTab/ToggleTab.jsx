import { useState } from 'react';
import scss from './ToggleTab.module.scss';

export const ToggleTab = () => {
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
        {activeTab === 'features' && <div>Features</div>}
        {activeTab === 'reviews' && <div>Reviews</div>}
      </>
    </>
  );
};
