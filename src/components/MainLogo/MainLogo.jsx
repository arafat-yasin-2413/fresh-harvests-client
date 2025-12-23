import React from "react";
import mainLogo from "../../assets/images/Logo.png";
import { Link } from "react-router";

const MainLogo = ({ className }) => {
	return (
		<>
			<Link to="/"> 
				<img className={className} src={mainLogo} alt="Fresh Harvests Logo" />
			</Link>
		</>
	);
};

export default MainLogo;
