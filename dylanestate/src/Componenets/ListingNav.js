import React from 'react';
import '../styles/ListingNav.css';

const ListingNav = ({ activeOption, f1, f2, f3, f4, f5 }) => {
    return (
        <div>
            <div className="listing-nav">
                <div className={`nav-item ${activeOption === 1 ? 'active' : ''} ${f1 === 1 ? 'highlight' : ''}`}>
                    Property Details
                </div>
                <div className={`nav-item ${activeOption === 2 ? 'active' : ''} ${f2 === 1 ? 'highlight' : ''}`}>
                    Location Details
                </div>
                <div className={`nav-item ${activeOption === 3 ? 'active' : ''} ${f3 === 1 ? 'highlight' : ''}`}>
                    Features & Amenities
                </div>
                <div className={`nav-item ${activeOption === 4 ? 'active' : ''} ${f4 === 1 ? 'highlight' : ''}`}>
                    Price Details
                </div>
                <div className={`nav-item ${activeOption === 5 ? 'active' : ''} ${f5 === 1 ? 'highlight' : ''}`}>
                    Property Images
                </div>
            </div>
        </div>
    );
};

export default ListingNav;
