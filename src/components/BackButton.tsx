import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';
import { IoArrowBack } from "react-icons/io5";

const BackButton: React.FC = () => {
    return (
        <Link to="/home" className="back-button">
            <IoArrowBack />
        </Link>
    );
};

export default BackButton; 