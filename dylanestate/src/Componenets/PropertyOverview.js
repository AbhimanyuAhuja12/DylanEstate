import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { facilityState } from '../atom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBed, faBath, faRulerCombined, faBuilding, faLayerGroup, 
    faCompass, faDoorOpen, faCouch, faUserFriends, faClock, 
    faTint, faPaw, faDrumstickBite, faBolt, faCalendarAlt, 
    faHome, faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';
import "../styles/PropertyOverview.css"

const propertyDetails = [
    { name: "", label: "Bedrooms", icon: faBed },
    { name: "", label: "Bathrooms", icon: faBath },
    { name: "", label: "Sq. Ft.", icon: faRulerCombined },
    { name: "", label: "Property on Floor", icon: faBuilding },
    { name: "", label: "Total Floors", icon: faLayerGroup },
    { name: "", label: "Facing", icon: faCompass },
    { name: "", label: "Balcony", icon: faDoorOpen },
    { name: "", label: "Tenant Preference", icon: faUserFriends },
    { name: "", label: "Availability", icon: faClock },
    { name: "", label: "Property Age", icon: faCalendarAlt },
    { name: "", label: "Property Type", icon: faHome },
    { name: "", label: "Pets Allowed", icon: faPaw },
    { name: "", label: "Non-Veg", icon: faDrumstickBite },
    { name: "", label: "Electricity Status", icon: faBolt },
    { name: "", label: "Water Supply", icon: faTint },
    { name: "", label: "Furnishing", icon: faCouch },
    { name: "Yes", label: "Gated Security", icon: faShieldAlt }
];

const PropertyOverview = () => {
    const facilities = useRecoilValue(facilityState);
    for (let i = 0; i < propertyDetails.length - 1 && i < facilities.length; i++) {
        propertyDetails[i].name = facilities[i];
    }

    useEffect(() => {
        console.log(facilities);
    }, [facilities]);

    return (
        <div className="property-overview-container">
            <div className='property-overview-header'>
                <h2 className="property-overview-title">Property Overview</h2>
                <p className='property-overview-society'>Society : Gokul Village</p>
            </div>
            <div className="property-overview-grid">
                {propertyDetails.map((detail, index) => (
                    <div key={index} className="property-detail">
                        <FontAwesomeIcon icon={detail.icon} className="property-detail-icon" />
                        <div className='property-detail-text'>
                            <span className="property-detail-name">{detail.name}</span>
                            <span className="property-detail-label">{detail.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PropertyOverview;
