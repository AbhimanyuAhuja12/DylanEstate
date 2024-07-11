import React from 'react';
import '../styles/PreviewPage.css'; 
import PreviewDetail from './PreviewDetail';
import PreviewInquiry from './PreviewInquiry';
import PropertyOverview from './PropertyOverview';
import Amenities from './Amenities';
import Describe from './Describe';
import ReviewsRating from './ReviewsRating';

import About from './About';
import Footer from './Footer';

const PreviewPage = () => {
  return (
    <div className='preview-page'>
      <div className='content-wrapper'>
        <div className='left-content'>
           <PreviewDetail />
          <PropertyOverview />
           <Amenities />
          <Describe /> 
        </div>

        <div className='right-content'>
          <PreviewInquiry />
        </div>
      </div>

      <div className='bottom-content'>
         <ReviewsRating />
        <About /> 
      </div>

      <Footer />
    </div>
  );
}

export default PreviewPage;
