import React from 'react';
import { useRecoilValue } from 'recoil';
import { amenitiesState } from '../atom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCamera, faCar, faParking, faWater, faPlug, faBolt, faUsers, faTree, faChild, faBicycle, faDumbbell, faHome, faShoppingCart, faSwimmer, faPhone, faFireExtinguisher, faBuilding } from '@fortawesome/free-solid-svg-icons';
import '../styles/Amenities.css';

const Amenities = () => {
    const amenities = [
        { name: "24/7 Security", icon: faShieldAlt },
        { name: "CCTV Camera", icon: faCamera },
        { name: "Lift", icon: faCar },
        { name: "Reserved Parking", icon: faParking },
        { name: "Regular water supply", icon: faWater },
        { name: "Power Back up-Partial", icon: faPlug },
        { name: "Power Back up-Full", icon: faBolt },
        { name: "Maintenance staff", icon: faUsers },
        { name: "Garden/ Park", icon: faTree },
        { name: "Kids Play area", icon: faChild },
        { name: "Sport", icon: faBicycle },
        { name: "Property Gym", icon: faDumbbell },
        { name: "Community Hall", icon: faHome },
        { name: "Shopping center", icon: faShoppingCart },
        { name: "Club House", icon: faBuilding },
        { name: "Swimming pool", icon: faSwimmer },
        { name: "Intercom", icon: faPhone },
        { name: "Fire Safety", icon: faFireExtinguisher }
    ];

    const facilities = useRecoilValue(amenitiesState);
    const filteredAmenities = amenities.filter(amenity => facilities.includes(amenity.name));

    return (
        <div className="amenities-container">
            <h2 className="amenities-title">Amenities</h2>
            <div className="amenities-grid">
                {filteredAmenities.map((amenity, index) => (
                    <label key={index} className="amenity-item">
                        <FontAwesomeIcon icon={amenity.icon} className="amenity-icon" />
                        <span className="amenity-name">{amenity.name}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Amenities;
