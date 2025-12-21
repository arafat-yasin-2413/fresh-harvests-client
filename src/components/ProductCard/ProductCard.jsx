import React from "react";
import mushroom from "../../assets/images/products/mushroom.png";
const ProductCard = () => {
	return (
		<div className="px-2 py-4 shadow-lg rounded-[20px] flex flex-col justify-center items-center">
			<div className="bg-[#F4F6F6] w-fit rounded-2xl">
				<img src={mushroom} alt="image of mushroom" />
			</div>

			<div className="text-center">
				<h4 className="text-[18px] text-[#212337] font-semibold mt-1">Mushroom</h4>
				<h5 className="font-questrial text-[18px]">$2.3/kg</h5>
				<button className="border border-[#D9D9D9] py-2 px-12 mt-1 mb-1 rounded-lg text-[18px] font-light">Add to cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
