import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCamera,
  faParking,
  faWater,
  faPlug,
  faBolt,
  faUsers,
  faTree,
  faChild,
  faBicycle,
  faDumbbell,
  faHome,
  faShoppingCart,
  faSwimmer,
  faPhone,
  faFireExtinguisher,
  faBuilding,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Feature3.css"; 
import { useSetRecoilState } from "recoil";
import { amenitiesState } from "../atom";

const amenities = [
  { name: "24/7 Security", icon: faShieldAlt },
  { name: "CCTV Camera", icon: faCamera },
  { name: "Lift", icon: faArrowUp },
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
  { name: "Fire Safety", icon: faFireExtinguisher },
];

const Feature3 = () => {
  const setFeatures = useSetRecoilState(amenitiesState);

  const handleClick = (e, amenityName) => {
    setFeatures((prev) => {
      if (e.target.checked) {
        return [...prev, amenityName];
      } else {
        return prev.filter((amenity) => amenity !== amenityName);
      }
    });
  };

  return (
    <div className="feature3-container">
      <h2 className="feature3-heading">Society Amenities</h2>
      <div className="feature3-grid">
        {amenities.map((amenity, index) => (
          <label key={index} className="feature3-label">
            <FontAwesomeIcon
              icon={amenity.icon}
              className="feature3-icon"
            />
            <span className="feature3-name">{amenity.name}</span>
            <input
              type="checkbox"
              value={amenity.name}
              onClick={(e) => handleClick(e, amenity.name)}
              className="feature3-checkbox"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Feature3;
