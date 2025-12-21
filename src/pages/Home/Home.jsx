import React from "react";
import Banner from "./Banner";
import FreshProducts from "./FreshProducts/FreshProducts";

const Home = () => {
	return (
		<>
			<section className="relative w-full bg-[url(src/assets/images/Bg.png)] bg-cover bg-center overflow-hidden">
				{/* Right green panel */}
				<div className="absolute top-0 right-0 h-full w-[35%] bg-[#7da13a]" />

				{/* Content */}
				<div className="relative z-10">
					<Banner />
				</div>
			</section>
		
            <FreshProducts></FreshProducts>
        
        </>
	);
};

export default Home;
