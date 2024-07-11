import React from 'react';
import green_mark from "../Assets/green-mark.png";
import "../styles/Dashboard.css"
import LoginContainer from './LoginContainer';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="content-container">
                <div className="header">
                    <h1 className="title">Sell or Rent your Property For Free</h1>
                    <p>Whether you are ready to sell or looking for answers, we'll guide you with the data and expertise specific to your needs</p>
                </div>

                <div className="steps-container">
                    <div className="steps-content">
                        <h2 className="steps-title">Upload your property in 4 simple steps</h2>
                        <div className="step">
                            <img src={green_mark} alt="" className="tick-icon" />
                            <p>Add your properties <b>Basic details</b></p>
                        </div>
                        <div className="step">
                            <img src={green_mark} alt="" className="tick-icon" />
                            <p>Add property <b>Location</b></p>
                        </div>
                        <div className="step">
                            <img src={green_mark} alt="" className="tick-icon" />
                            <p>Add property <b>Features and Amenities</b></p>
                        </div>
                        <div className="step">
                            <img src={green_mark} alt="" className="tick-icon" />
                            <p>Add <b>Price details</b></p>
                        </div>
                        <div className="step">
                            <img src={green_mark} alt="" className="tick-icon" />
                            <p>Add your best <b>Property shots</b></p>
                        </div>
                    </div>

                    <div className="input-container-wrapper">
                        <LoginContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
