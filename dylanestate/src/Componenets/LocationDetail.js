import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { amenitiesState, areaState, buildingState, cityState, streetState } from '../atom';
import '../styles/LocationDetail.css'; 

const LocationDetail = ({ setLocation }) => {
  const [building, setBuilding] = useRecoilState(buildingState);
  const [area, setArea] = useRecoilState(areaState);
  const [street, setStreet] = useRecoilState(streetState);
  const [city, setCity] = useRecoilState(cityState);
  const setFeatures = useSetRecoilState(amenitiesState);

  useEffect(() => {
    if (city && building && area && street) {
      setLocation(1);
    }
  }, [city, building, area, street]);

  useEffect(() => {
    setFeatures([]);
  }, []);

  return (
    <div className='location-detail-container'>
      <form className="location-detail-form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 form-section">
          <div className="form-field">
            <label className="form-label">
              Building/ Society Name <span className="required-field">*</span>
            </label>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter Apartment Name"
                name="buildingName"
                className="form-control"
                required
                onChange={(e) => setBuilding(e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              Locality / Area <span className="required-field">*</span>
            </label>
            <div className="form-input">
              <input
                type="text"
                placeholder="Eg : Sheetal Nagar"
                name="localityArea"
                className="form-control"
                required
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 form-section">
          <div className="form-field">
            <label className="form-label">
              Landmark/ Street Name <span className="required-field">*</span>
            </label>
            <div className="form-input">
              <input
                type="text"
                placeholder="Prominent Landmark"
                name="landmarkStreet"
                className="form-control"
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">
              City <span className="required-field">*</span>
            </label>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter City"
                name="city"
                className="form-control"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2 className='map-section-title'>Mark locality on Map</h2>
        </div>
      </form>
    </div>
  );
};

export default LocationDetail;
