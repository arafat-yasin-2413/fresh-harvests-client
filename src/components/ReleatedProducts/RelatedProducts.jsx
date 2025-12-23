import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard/ProductCard";

const RelatedProducts = ({ categoryName, currentProductId }) => {
	const axiosInstance = useAxios();

	const { data: products = [], isLoading } = useQuery({
		queryKey: ["related-products", categoryName],
		queryFn: async () => {
			const res = await axiosInstance.get("/products");
			return res.data?.data;
		},
	});

	const relatedProducts = products
		.filter(
			(product) =>
				product?.category?.categoryName === categoryName && product?.id !== currentProductId
		)
		.slice(0, 4);

	if (isLoading) {
		return <p className="text-center py-10">Loading related products...</p>;
	}

	return (
		<div className="relative max-w-350 mx-auto overflow-hidden pt-20 pb-10">
			<div className="flex flex-col justify-center items-center">
				{/* <h4 className="bg-[#749B3F1A] text-xl text-[#749B3F] font-medium px-3 py-1 rounded-md">
						Our Products
					</h4> */}
				<h2 className="text-[#212337] font-medium text-5xl py-3">Related Products</h2>
			</div>


            {/* No related products */}
			{relatedProducts.length === 0 ? (
				<div className="border border-dashed border-gray-300 rounded-xl py-16 text-center">
					<p className="text-xl text-gray-500">
						No related products found in this category
					</p>
					<p className="text-sm text-gray-400 mt-2">
						We’ll add more products soon. Stay tuned!
					</p>
				</div>
			) : (
				/* Showing related products in grid layout */
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
					{relatedProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}



		</div>
	);
};

export default RelatedProducts;
