import React from "react";
import { useSetRecoilState } from "recoil";
import { furnishingState, safeState } from "../atom";
import "../styles/Feature2.css"; 

const Feature2 = () => {
  const furnish = useSetRecoilState(furnishingState);
  const safe = useSetRecoilState(safeState);

  const handleFurnishChange = (e) => {
    furnish(e.target.value);
  };

  const handleSafeChange = (e) => {
    safe(e.target.value);
  };

  return (
    <div>
      <div className="feature2-section">
        <div className="feature2-subsection">
          <div className="feature2-header">Furnishing *</div>
          <div className="feature2-options">
            <label className="feature2-option">
              <input
                onClick={handleFurnishChange}
                type="radio"
                value="Fully Furnished"
                name="furnishing"
                className="form-radio"
                required
              />
              <span className="feature2-option-text">Fully Furnished</span>
            </label>
            <label className="feature2-option">
              <input
                onClick={handleFurnishChange}
                type="radio"
                value="Semi Furnished"
                name="furnishing"
                className="form-radio"
                required
              />
              <span className="feature2-option-text">Semi Furnished</span>
            </label>
            <label className="feature2-option">
              <input
                onClick={handleFurnishChange}
                type="radio"
                value="Unfurnished"
                name="furnishing"
                className="form-radio"
                required
              />
              <span className="feature2-option-text">Unfurnished</span>
            </label>
          </div>
        </div>

        <hr className="feature2-divider" />

        <div className="feature2-subsection">
          <div className="feature2-header">Additional Features</div>
          <div className="feature2-options">
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Air conditioning</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Ceiling Fans</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Refrigerator</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Washing machine</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Microwave</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Oven</span>
            </label>
          </div>
        </div>

        <hr className="feature2-divider" />

        <div className="feature2-subsection">
          <div className="feature2-header">Tiles</div>
          <div className="feature2-options">
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Normal White Tiles</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Marble</span>
            </label>
            <label className="feature2-option">
              <input type="checkbox" className="form-checkbox" />
              <span className="feature2-option-text">Vitrified Tiles</span>
            </label>
          </div>
        </div>

        <hr className="feature2-divider" />

        <div className="feature2-subsection">
          <div className="feature2-header">Safety *</div>
          <div className="feature2-options">
            <label className="feature2-option">
              <input
                onClick={handleSafeChange}
                type="checkbox"
                className="form-checkbox"
              />
              <span className="feature2-option-text">
                24/7 Security personnel (Gated Security)
              </span>
            </label>
            <label className="feature2-option">
              <input
                onClick={handleSafeChange}
                type="checkbox"
                className="form-checkbox"
              />
              <span className="feature2-option-text">Security Systems- CCTV</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
