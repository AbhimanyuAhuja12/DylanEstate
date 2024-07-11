import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import '../styles/Overlay.css'; 

const Overlay = ({ setOverlay }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    return (
        <Dialog open={open} onClose={() => {
            navigate("/dylanEstate/thankyou");
            setOpen(false);
            setOverlay(0);
        }} className="relative z-10">
            <div className="overlay-bg" />

            <div className="overlay-container">
                <div className="overlay-content">
                    <Dialog.Panel className="overlay-panel">
                        <div className="overlay-header">
                            <p className="overlay-title">
                                POST PROPERTY ON DYLAN ESTATE?
                            </p>
                        </div>

                        <div className="overlay-body">
                            <button
                                type="button"
                                onClick={() => {
                                    setOpen(false);
                                    setOverlay(0);
                                    navigate("/dylanEstate/thankyou");
                                }}
                                className="overlay-button"
                            >
                                Continue
                            </button>
                            <p className="overlay-footer">
                                By continuing you agree to our <span className="overlay-link"> Terms and Conditions & Privacy Policy</span>
                            </p>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default Overlay;
