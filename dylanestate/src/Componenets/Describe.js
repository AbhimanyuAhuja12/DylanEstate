import React from 'react';
import { useRecoilValue } from 'recoil';
import { descState } from '../atom';
import "../styles/Describe.css"

const Describe = () => {
    const desc = useRecoilValue(descState);

    return (
        <div className="description-container">
            <h2 className="description-title">Description</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Describe;
