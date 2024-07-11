/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import { depositState, maintenanceState, maintenanceTimeState, rentState } from "../atom";
import { useEffect, useState } from "react";
import '../styles/PriceDetails.css'; 

const PriceDetails = ({ setFlag }) => {
    const [rent, setRent] = useRecoilState(rentState);
    const [deposit, setDeposit] = useRecoilState(depositState);
    const [maintenance, setMaintenance] = useRecoilState(maintenanceState);
    const [time, setTime] = useRecoilState(maintenanceTimeState);

    const [maintenanceOption, setMaintenanceOption] = useState('');

    useEffect(() => {
        if (rent && deposit) {
            if ((maintenanceOption === 'Extra Maintenance' && maintenance && time.length) || maintenanceOption !== 'Extra Maintenance') {
                setFlag(1);
            }
        }
    }, [rent, deposit, maintenance, time]);

    return (
        <div className='price-details-container'>
            <form className="price-details-form">

                <div className="grid-container">
                    <div className="grid-item">
                        <label className="label">
                            Rent <span className="required">*</span>
                        </label>
                        <div className="input-container">
                            <label className="input-label">
                                <input 
                                    type="number" 
                                    placeholder="₹ / Month" 
                                    name="userType" 
                                    className="input-field" 
                                    required
                                    onChange={(e) => setRent(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="grid-item">
                        <label className="label">
                            Security <span className="required">*</span>
                        </label>
                        <div className="input-container">
                            <label className="input-label">
                                <input 
                                    type="number" 
                                    placeholder="₹ / Month" 
                                    name="userType" 
                                    className="input-field" 
                                    required
                                    onChange={(e) => setDeposit(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item">
                        <label className="label">
                            Maintenance <span className="required">*</span>
                        </label>
                        <select
                            name="maintenanceOption"
                            className="select-field"
                            required
                            value={maintenanceOption}
                            onChange={(e) => setMaintenanceOption(e.target.value)}
                        >
                            <option value="">Maintenance</option>
                            <option value="Included in Rent">Included in Rent</option>
                            <option value="Extra Maintenance">Extra Maintenance</option>
                        </select>
                    </div>

                    {maintenanceOption === 'Extra Maintenance' && (
                        <div className="grid-item">
                            <label className="label">
                                Maintenance Amount <span className="required">*</span>
                            </label>
                            <div className="input-container flex-direction">
                                <input
                                    type="number"
                                    placeholder="₹ Maintenance"
                                    className="input-field"
                                    required
                                    onChange={(e) => setMaintenance(e.target.value)}
                                />
                                <select
                                    name="maintenanceFrequency"
                                    className="select-field full-width"
                                    required
                                    onChange={(e) => setTime(e.target.value)}
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div className="additional-details">
                    <h2 className='additional-details-title'>Additional pricing details to convey to agent ?</h2>
                    <input 
                        className="additional-details-input" 
                        type="text" 
                        placeholder="Do you have any concerns regarding pricing of your property ? Add your concerns here or call us" 
                    />
                </div>
            </form>
        </div>
    );
};

export default PriceDetails;
