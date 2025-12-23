import React from "react";
import { Link } from "react-router";
const ProductCard = ({product}) => {

    const {productName, price, images} = product || {};
    console.log(product);
    const firstImage = images?.[0];

	return (
		<div className="px-2 py-4 shadow-lg rounded-[20px] flex flex-col justify-center items-center">
			<Link to={`/products/${product.id}`} className="bg-[#F4F6F6] w-fit rounded-2xl">			
                <img className="w-48 h-48 p-2" src={firstImage} alt={`image of ${productName}`}/>
            </Link>

			<div className="text-center">
				<h4 className="text-[18px] text-[#212337] font-semibold mt-1">{productName}</h4>
				<h5 className="font-questrial text-[18px]">${price}/kg</h5>
				<button className="border border-[#D9D9D9] hover:bg-[#FF6A1A] hover:text-white cursor-pointer py-2 px-12 mt-1 mb-1 rounded-lg text-[18px] font-light">Add to cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
