import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { imgState } from '../atom';
import '../styles/PropertyImage.css'; 

const PropertyImages = ({ setFlag }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const setImg = useSetRecoilState(imgState);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFlag(1);
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                setImg((prevImg) => [...prevImg, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="property-images-container">
            <div className="property-images-title">
                Add Photos / Videos to attract more tenants!
            </div>

            <div className="property-images-description">
                Add Photos of living room, bedroom, bathroom, floor, kitchen, doors, balcony, location map, neighbourhood, etc.
            </div>

            <div className={`property-images-upload-container ${selectedImage ? 'auto-height' : 'fixed-height'}`}>
                <label className="property-images-upload-label">
                    + Add photo now
                    <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
                {selectedImage && (
                    <img src={selectedImage} alt="Selected" className="property-images-preview" />
                )}
            </div>
        </div>
    );
};

export default PropertyImages;
