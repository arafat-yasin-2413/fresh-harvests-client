import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Authmodal from "../components/Authmodal/Authmodal";

const RootLayout = () => {
	const [authModal, setAuthModal] = useState(null);

	return (
		<>
			<Navbar></Navbar>
			<div class="min-h-screen">
				<Outlet></Outlet>
			</div>

			<Footer></Footer>

			{/* Controlling auth modals */}
			{authModal && (
				<Authmodal
					type={authModal}
					onClose={() => setAuthModal(null)}
					switchModal={setAuthModal}></Authmodal>
			)}
		</>
	);
};

export default RootLayout;
