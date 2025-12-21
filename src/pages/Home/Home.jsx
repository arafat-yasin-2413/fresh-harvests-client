import React from "react";
import Banner from "./Banner";

const Home = () => {
	return (
		<section className="relative bg-[#f7f7f5] overflow-hidden">
			{/* Right green panel */}
			<div className="absolute top-0 right-0 h-full w-[35%] bg-[#7da13a]" />

			{/* Content */}
			<div className="relative z-10">
				<Banner />
			</div>
		</section>
	);
};

export default Home;
