import React from "react";
import { useSetRecoilState } from "recoil";
import { electricState, nonVegState, petState, waterState } from "../atom";
import "../styles/Feature1.css"; 

const Feature1 = () => {
  const setPet = useSetRecoilState(petState);
  const setVeg = useSetRecoilState(nonVegState);
  const setElectric = useSetRecoilState(electricState);
  const setWater = useSetRecoilState(waterState);

  const handleNonVegChange = (e) => {
    setVeg(e.target.value);
  };

  const handlePetChange = (e) => {
    setPet(e.target.value);
  };

  const handleElectricChange = (e) => {
    setElectric(e.target.value);
  };

  const handleWaterChange = (e) => {
    setWater(e.target.value);
  };

  return (
    <div className="feature1-container">
      <div className="feature1-section">
        <div className="feature1-header">General Features</div>
        <div className="feature1-content">
          <div className="feature1-subsection">
            <label className="feature1-label">
              Non-Veg <span className="text-red-500">*</span>
            </label>
            <div className="feature1-options">
              <label className="feature1-option">
                <input
                  onClick={handleNonVegChange}
                  type="radio"
                  name="veg"
                  value="Allowed"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Allowed</span>
              </label>
              <label className="feature1-option">
                <input
                  onClick={handleNonVegChange}
                  type="radio"
                  name="veg"
                  value="Not Allowed"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Not Allowed</span>
              </label>
            </div>
          </div>

          <div className="feature1-subsection">
            <label className="feature1-label">
              Pets Allowed <span className="text-red-500">*</span>
            </label>
            <div className="feature1-options">
              <label className="feature1-option">
                <input
                  onClick={handlePetChange}
                  type="radio"
                  name="pets"
                  value="true"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Yes</span>
              </label>
              <label className="feature1-option">
                <input
                  onClick={handlePetChange}
                  type="radio"
                  name="pets"
                  value="false"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">No</span>
              </label>
            </div>
          </div>

          <div className="feature1-subsection">
            <label className="feature1-label">
              Electricity <span className="text-red-500">*</span>
            </label>
            <div className="feature1-options">
              <label className="feature1-option">
                <input
                  onClick={handleElectricChange}
                  type="radio"
                  name="electric"
                  value="Rare/No Powercut"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Rare/No Powercut</span>
              </label>
              <label className="feature1-option">
                <input
                  onClick={handleElectricChange}
                  type="radio"
                  name="electric"
                  value="Frequent Powercut"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Frequent Powercut</span>
              </label>
            </div>
          </div>

          <div className="feature1-subsection">
            <label className="feature1-label">
              Water Supply <span className="text-red-500">*</span>
            </label>
            <div className="feature1-options">
              <label className="feature1-option">
                <input
                  onClick={handleWaterChange}
                  type="radio"
                  name="water"
                  value="Municipal Corporation (BMC)"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Municipal Corporation (BMC)</span>
              </label>
              <label className="feature1-option">
                <input
                  onClick={handleWaterChange}
                  type="radio"
                  name="water"
                  value="Borewell"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Borewell</span>
              </label>
              <label className="feature1-option">
                <input
                  onClick={handleWaterChange}
                  type="radio"
                  name="water"
                  value="Both"
                  className="form-radio"
                  required
                />
                <span className="feature1-option-text">Both</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
