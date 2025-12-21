import React from 'react';
import mainLogo from "../../assets/images/Logo.png";

const MainLogo = ({className}) => {
    return (
        <>
            <img className={className} src={mainLogo} alt="Fresh Harvests Logo"/>
        </>
    );
};

export default MainLogo;