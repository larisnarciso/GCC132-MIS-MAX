import React from "react";
import './LeftArrow.css';

interface Props {
    onClick: () => void;
}

const LeftArrow: React.FC<Props> = ({ onClick }) => {
    const handleOnClick = () => {
        onClick();
    };

    return (
        <button className="left-arrow" onClick={() => handleOnClick()}>
            <svg width="30" height="24" viewBox="0 0 30 24">
                <path fill="#fff" d="M28.59 11H7.41l5.29-5.29A1 1 0 0 0 11.29 4L2.59 12l8.7 8a1 1 0 0 0 1.41-1.41L7.41 13h21.18a1 1 0 0 0 0-2z" />
            </svg>
        </button>
    );
}

export default LeftArrow;