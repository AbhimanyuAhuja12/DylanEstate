import React from 'react';
import { useRecoilValue } from 'recoil';
import { rentState, depositState } from '../atom';
import '../styles/PreviewInquiry.css';

const PreviewInquiry = () => {
    const rent = useRecoilValue(rentState);
    const deposit = useRecoilValue(depositState);

    return (
        <div className="inquiry-container">
            <div className="inquiry-pricing">
                <div className="pricing-section">
                    <div className="price">₹ {rent} / Month</div>
                    <div className="price-label">(Rent-Negotiable)</div>
                </div>
                <div className="pricing-section">
                    <div className="price">₹ {deposit}</div>
                    <div className="price-label">(Deposit)</div>
                </div>
            </div>

            <div className="inquiry-form">
                <h2 className="form-title">Send an Inquiry for this property?</h2>
                <p className="contact-person">Contact Person : Melvin Lasrado</p>
                <div className="contact-info">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m4 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-8-4h.01M7 6h.01M17 6h.01M21 10h-1M3 14h18M3 18h18"></path>
                    </svg>
                    <p className="contact-number">+91-9999999999</p>
                </div>

                <input className="input-field" type="text" placeholder="Name" aria-label="Name" />
                <input className="input-field" type="email" placeholder="Email" aria-label="Email" />
                
                <div className="phone-input">
                    <span className="phone-prefix">+91</span>
                    <input className="phone-number" type="number" placeholder="999-999-9999" aria-label="Mobile Number" />
                </div>

                <textarea className="textarea-field" placeholder="I would like more information about Sector 5, shanti nagar, anubhav society" aria-label="Message"></textarea>
                <button className="submit-button">SEND INQUIRY</button>
            </div>
        </div>
    );
}

export default PreviewInquiry;
