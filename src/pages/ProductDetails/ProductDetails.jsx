import React from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
	const { id } = useParams();
	const axiosInstance = useAxios();

	const { data: product, isLoading } = useQuery({
		queryKey: ["product", id],
		queryFn: async () => {
			const res = await axiosInstance.get(`/products/${id}`);
			return res.data?.data;
		},
	});

	const { productName, description, price, images, category } = product || {};
	const firstImage = images?.[0];

	if (isLoading) {
		return <p className="text-center py-20">Loading Product Details...</p>;
	}

	return (
		<div className="mt-20 max-w-7xl mx-auto py-10">
			{/* top */}
			<div className="flex items-start gap-10">
				{/* image */}
				<div className="w-1/3 border border-gray-200 px-4 py-12 rounded-lg">
					<img className="" src={firstImage} alt={`image of ${productName}`} />
				</div>

                {/* contents */}
				<div className="flex-1">
					<h5 className="bg-[#749B3F1A] text-[#749B3F] w-fit rounded-lg px-1 capitalize">{category?.categoryName}</h5>

					<h3 className="text-5xl text-[#212337] my-4">{productName}</h3>

					<p>⭐ ⭐ ⭐</p>

					<h4 className="text-3xl text-[#FF6A1A] my-2">${price}/kg</h4>

					<p className="font-questrial text-[#4A4A52] text-lg mt-6">{description}</p>
				</div>
			</div>

			{/* down */}
		</div>
	);
};

export default ProductDetails;
