import React from "react";

import heroImage from "../../assets/images/girl.webp";
import saladImage from "../../assets/images/salad.png";
import appStore from "../../assets/images/appstore.png";
import playStore from "../../assets/images/googleplay.png";

const Banner = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
				{/* LEFT */}
				<div>
					<span className="inline-block bg-[#749B3F1A] text-[#749B3F] text-xl font-medium px-4 py-1 rounded-full mb-4">
						Welcome to Fresh Harvest
					</span>

					<h1 className="text-[70px] font-medium text-[#212337] leading-tight">
						Fresh Fruits and <br /> Vegetables
					</h1>

					<p className="font-questrial text-sm text-[#212337] mt-4 max-w-md">
						At Fresh Harvests, we are passionate about providing you with the freshest
						and most flavorful fruits and vegetables.
					</p>

					<button className="mt-6 bg-[#FF6A1A] text-white font-semibold px-6 py-3 rounded-lg">
						Shop Now
					</button>

					{/* Offer Card */}
					<div className="mt-10 bg-[#EBEBEB] rounded-xl p-4 flex justify-between items-center gap-4 max-w-sm">
						
						<div>
							<p className="text-sm text-[#176D38] font-medium">Special Offer</p>
							<h4 className="text-[#212337] text-[28px] font-medium">Fresh Salad</h4>
							<p>
								<span className="text-[16px] font-medium text-[#176D38]">Up to</span> <span className="text-2xl text-[#212337] font-medium">70%</span> <span className="text-[16px] text-[#212337] font-medium">off</span>
							</p>
							<span className="text-[12px] font-semibold bg-[#176D38] px-3 py-1.5 rounded-full">
								<span className="text-white">CODE :</span> <span className="text-[#FAC714]">FRESH25</span>
							</span>
						</div>

                        <img
							src={saladImage}
							className="w-37.25 h-36.5 rounded-lg object-cover"
							alt="salad image"
						/>
					</div>

                    <div className="mt-4">
                        <h5 className="font-questrial text-[#4A4A52] text-[14px] mb-3">Download App:</h5>

                        <div className="flex items-center gap-5"> 
                            <img src={appStore} alt="image of app store"/>
                            <img src={playStore} alt="image of play store"/>
                        </div>
                    </div>
				</div>

				{/* RIGHT IMAGE */}
				<div className="relative flex justify-center">
					<img
						src={heroImage}
						alt=""
						className=" border relative z-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
