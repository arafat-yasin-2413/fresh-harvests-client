import React from "react";

import heroImage from "../../assets/images/girl.webp";
import saladImage from "../../assets/images/salad.png";
import appStore from "../../assets/images/appstore.png";
import playStore from "../../assets/images/googleplay.png";
import leave1 from "../../assets/images/Leave1.png";
import smallLeave from "../../assets/images/leave-small.png";

const Banner = () => {
	return (
		<div className="relative max-w-[1440px] mx-auto overflow-hidden ">
			{/* Right Side Green Shape */}
			<div className="hidden lg:block absolute top-0 right-0 w-[35%] h-full z-0"></div>

			<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 pt-10 lg:pt-20">
				{/* LEFT CONTENT */}
				<div className="order-2 lg:order-1 pt-10 lg:pt-0 pb-10">
					{/* Top Leaf */}
					<img
						className="hidden lg:block absolute top-10 left-0 w-16"
						src={leave1}
						alt="Leave"
					/>

					<span className="inline-block bg-[#749B3F1A] text-[#749B3F] text-sm lg:text-lg font-medium px-4 py-1 rounded-md mb-4">
						Welcome to Fresh Harvest
					</span>

					<h1 className="text-5xl lg:text-[80px] font-bold text-[#212337] leading-[1.1] mb-6">
						Fresh Fruits and <br /> Vegetables
					</h1>

					<p className="text-[#4A4A52] text-sm lg:text-base max-w-md mb-8">
						At Fresh Harvests, we are passionate about providing you with the freshest
						and most flavorful fruits and vegetables.
					</p>

					<div className="relative inline-block lg:block">
						{/* Shop Now Button */}
						<button className="bg-[#FF6A1A] text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:bg-[#e85a15] transition-all">
							Shop Now
						</button>

						{/* Offer Card */}
						<div className="mt-8 lg:mt-0 lg:absolute lg:top-12 lg:left-32 z-20 bg-white rounded-2xl p-3 flex items-center gap-4 shadow-xl border border-gray-100 w-[280px]">
							<div className="flex-1">
								<p className="text-[12px] text-[#176D38] font-bold">
									Special Offer
								</p>
								<h4 className="text-[#212337] text-xl font-bold leading-tight">
									Fresh Salad
								</h4>
								<p className="text-[12px] text-[#212337] my-1">
									Up to <span className="text-lg font-bold">70%</span> off
								</p>
								<div className="inline-block bg-[#176D38] px-2 py-1 rounded-md">
									<span className="text-[9px] text-white font-bold">CODE :</span>
									<span className="text-[9px] text-[#FAC714] font-bold ml-1">
										FRESH25
									</span>
								</div>
							</div>
							<img
								src={saladImage}
								className="w-20 h-20 rounded-xl object-cover"
								alt="salad"
							/>

							{/* Curved Arrow Icon */}
							<div className="absolute -top-10 -left-10 hidden lg:block">
								<svg width="60" height="40" viewBox="0 0 60 40" fill="none">
									<path
										d="M10 5C10 5 15 30 50 30"
										stroke="#749B3F"
										strokeWidth="2"
										strokeDasharray="4 4"
									/>
									<path d="M45 25L52 30L45 35" stroke="#749B3F" strokeWidth="2" />
								</svg>
							</div>
						</div>
					</div>

					<div className="mt-20 lg:mt-32">
						<h5 className="text-[#4A4A52] text-sm font-medium mb-3">Download App:</h5>
						<div className="flex items-center gap-4 justify-center lg:justify-start">
							<img
								src={appStore}
								alt="App Store"
								className="h-10 cursor-pointer shadow-md rounded-md"
							/>
							<img
								src={playStore}
								alt="Play Store"
								className="h-10 cursor-pointer shadow-md rounded-md"
							/>
						</div>
					</div>
				</div>

				{/* RIGHT IMAGE SECTION */}
				<div className="relative flex justify-center lg:justify-end items-end order-1 lg:order-2 h-full">
					{/* Small Leaf */}
					<img
						className="absolute top-[15%] left-[10%] lg:left-[15%] w-12 z-20"
						src={smallLeave}
						alt="small leave"
					/>

					<div className="border-4 border-green-400">
						<img src={heroImage} alt="Fresh Harvest Girl" className="border w-auto h-auto ml-60" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
