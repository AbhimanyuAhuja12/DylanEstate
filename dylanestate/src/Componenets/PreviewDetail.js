/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaHeart, FaShare } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { areaState, bedroomState, buildingState, carpetSizeState, cityState, descState, imgState, rentSaleState, spaceState, streetState, typeState } from '../atom'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import '../styles/PreviewDetail.css';

const PreviewDetail = () => {
    const img = useRecoilValue(imgState)
    const type = useRecoilValue(typeState)
    const bhk = useRecoilValue(bedroomState)
    const desc = useRecoilValue(descState)
    const sale = useRecoilValue(rentSaleState)
    const space = useRecoilValue(spaceState)
    const building = useRecoilValue(buildingState)
    const area = useRecoilValue(areaState)
    const street = useRecoilValue(streetState)
    const city = useRecoilValue(cityState)
    const carpet = useRecoilValue(carpetSizeState)

    return (
        <div className='preview-detail-container'>
            <div className='preview-detail-header'>
                <h2 className='preview-detail-title'>{bhk} {space} for {sale} in {building} ({carpet} Sq.ft) </h2>
            </div>
            <div className='preview-detail-location'>
                <div>
                    <p className='location-text'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='location-icon' /> {building}, {area}, {street}, {city}
                    </p>
                </div>
                <div className='preview-detail-actions'>
                    <button className='action-button heart-button'>
                        <FaHeart size={24} className='icon' />
                    </button>
                    <button className='action-button share-button'>
                        <FaShare size={24} className='icon' />
                    </button>
                </div>
            </div>

            <div className="carousel">
                <div id="slide1" className="carousel-item">
                    <img
                        src={img}
                        className="carousel-image" />
                    <div className="carousel-controls">
                        <a href="#slide4" className="carousel-control">❮</a>
                        <a href="#slide2" className="carousel-control">❯</a>
                    </div>
                </div>
            </div>

            <div className='property-id'>Property ID: 12345</div>
        </div>
    )
}

export default PreviewDetail
