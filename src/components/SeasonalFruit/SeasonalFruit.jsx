import React from "react";
import fruitImage from "../../assets/images/fruits.png";

const SeasonalFruit = () => {
	return (
		<div className="relative w-full bg-[url(src/assets/images/Bg.png)] bg-cover bg-center overflow-hidden mb-20">
			{/* main content div */}
			<div className="max-w-350 mx-auto flex justify-between items-center pt-20 pb-20">
				{/* left side contents */}
				<div>
					<div className="absolute top-20 left-63">
						<h4 className="bg-[#749B3F1A] w-fit text-xl text-[#749B3F] font-medium px-3 py-1 rounded-md">
							Special Offer
						</h4>

						<h2 className=" text-[#212337] font-medium text-[80px]">
							Seasonal Fruit Bundle
						</h2>

                        <h3 className="text-5xl text-[#212337] font-medium">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></h3>

                        {/* Timer */}
                        <div className="flex gap-6 text-center ml-1 mt-4">
                            <p className="flex flex-col bg-white w-24 rounded-lg pt-2 pb-1"><span className="text-[40px] text-[#212337] font-light">03</span> <span className="font-questrial text-[18px] text-[#4A4A52]">Days</span></p>
                            <p className="flex flex-col bg-white w-24 rounded-lg pt-2 pb-1"><span className="text-[40px] text-[#212337] font-light">18</span> <span className="font-questrial text-[18px] text-[#4A4A52]">Hour</span></p>
                            <p className="flex flex-col bg-white w-24 rounded-lg pt-2 pb-1"><span className="text-[40px] text-[#212337] font-light">54</span> <span className="font-questrial text-[18px] text-[#4A4A52]">Min</span></p>
                            <p className="flex flex-col bg-white w-24 rounded-lg pt-2 pb-1"><span className="text-[40px] text-[#212337] font-light">21</span> <span className="font-questrial text-[18px] text-[#4A4A52]">Second</span></p>
                        </div>

                        {/* Coupon code */}
                        <p className="bg-[#176D38] text-[28px] font-semibold w-fit mt-3 py-2 px-4 rounded-full">
                            <span className="text-white">CODE : </span><span className="text-[#FAC714]">FRESH28</span>
                        </p>

                    </div>
				</div>

				{/* right side image */}
				<div>
					<img src={fruitImage} alt="Fruit Bundle Image" />
				</div>
			</div>
		</div>
	);
};

export default SeasonalFruit;
