import React from "react";
import manWithBusket from "../../assets/images/Image-2.png";
import Logo from "../../assets/images/Logo.png";
import productCardImage from "../../assets/images/product-card.png";

const About = () => {
	return (
		<div className="flex justify-center items-center max-w-350 mx-auto pb-30 gap-10">
			{/* left image */}
			<div className="relative flex-1">
				<img src={manWithBusket} alt="man with busket image" />

				<img
					src={Logo}
					alt="logo"
					className="absolute top-90 left-80 bg-white w-40 p-2 rounded"
				/>

				<img
					src={productCardImage}
					alt="product card image"
					className="absolute top-110 left-90"
				/>
			</div>

			{/* right contents */}
			<div className="flex-1">
				<h4 className="bg-[#749B3F1A] w-fit text-xl text-[#749B3F] font-medium px-3 py-1 rounded-md">
					About us
				</h4>

				<h2 className="text-[#212337] font-medium text-5xl py-3">About Fresh Harvests</h2>

                <p className="font-questrial text-[#4A4A52] text-sm mb-6">
                    Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
                </p><button className="text-[#FF6A1A] border border-[#FF6A1A] px-8 py-4 rounded-lg font-semibold">
					Read More
				</button>
			</div>
		</div>
	);
};

export default About;
