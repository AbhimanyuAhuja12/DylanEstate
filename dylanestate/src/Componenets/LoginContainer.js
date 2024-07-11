import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoginContainer.css"

const countries = [
    "United States", "Canada", "Mexico", "United Kingdom", "Australia",
    "India", "China", "Japan", "Germany", "France", "Italy", "Spain",
];

const LoginContainer = () => {
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [otp, setOtp] = useState("");
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userType: '',
        name: '',
        country: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNextClick = () => {
        if (formData.userType && formData.name && formData.country && formData.phone && formData.email) {
            if (showOTPInput) {
                if (otp.length >= 4) {
                    navigate("/dylanEstate/list")
                }
                else {
                    alert("Enter Otp")
                }
            }
            else {
                setShowOTPInput(true);
            }
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <div className="login-container">
            <h2 className="header">LETS GET YOU STARTED!</h2>
            <div className="form-container">
                {!showOTPInput ? (
                    <form className="form">
                        <div className="form-group">
                            <label className="label">
                                I am <span className="required">*</span>
                            </label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="owner"
                                        className="radio-input"
                                        required
                                        onChange={handleInputChange}
                                    />
                                    <span className="radio-text">Owner</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="builder"
                                        className="radio-input"
                                        required
                                        onChange={handleInputChange}
                                    />
                                    <span className="radio-text">Builder</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label">
                                Your Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Name"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="label">
                                Country <span className="required">*</span>
                            </label>
                            <select
                                name="country"
                                className="input"
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">
                                Phone <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="phone"
                                className="input"
                                placeholder='000-000-0000'
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="or">OR</div>
                        <div className="form-group">
                            <label className="label">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@example.com"
                                className="input"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </form>
                ) : (
                    <div className="otp-container">
                        <div className='otp-header'>
                            <p className="otp-label">Enter OTP sent on {formData.phone} <span className="required">*</span></p>
                            <p className='change'>Change</p>
                        </div>
                        <input
                            onChange={(e) => setOtp(e.target.value)}
                            type="number"
                            className="otp-input"
                            placeholder="0 0 0 0 0"
                            required
                        />
                        <div className='resend-container'>
                            <button className="resend-button">Resend OTP</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="footer">
                <span>Need Help? <a href="tel:9999999999" className="help-link">Call 9999999999</a></span>
                <button className="next-button" onClick={handleNextClick}>NEXT</button>
            </div>
        </div>
    );
}

export default LoginContainer;
