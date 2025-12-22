import React, { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import CategoryButton from "../../../components/CategoryButton/CategoryButton";

const FreshProducts = () => {
	const axiosInstance = useAxios();
	const [activeCategory, setActiveCategory] = useState("All");

	const {
		data: categories = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const res = await axiosInstance.get("/category");
			return res.data?.data;
		},
	});

	console.log(categories);
	const allCategories = ["All", ...categories.map((category) => category.categoryName)];

	return (
		<div className="relative max-w-350 mx-auto overflow-hidden pt-20 pb-10">
			<div className="">
				<div className="flex flex-col justify-center items-center">
					<h4 className="bg-[#749B3F1A] text-xl text-[#749B3F] font-medium px-3 py-1 rounded-md">
						Our Products
					</h4>

					<h2 className="text-[#212337] font-medium text-5xl py-3">Our Fresh Products</h2>

					<p className="font-questrial text-center text-sm text-[#4A4A52] pb-3">
						We pride ourselves on offering a wide variety of fresh and favorful fruits,
						<br />
						vegetables, and salad ingredients.
					</p>
				</div>

				{/* Category buttons */}
				<div className="flex justify-center items-center gap-2.5 pt-1 pb-6">
					{allCategories.map((category) => (
						<CategoryButton
							key={category}
							label={category}
							active={activeCategory === category}
							onClick={() => setActiveCategory(category)}
						/>
					))}
				</div>
			</div>

			{/* Grid view product cards will be shown here below */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
			</div>

			{/* See All Products Button */}
			<div className="flex justify-center items-center mt-10 mb-10">
				<button className="text-[#FF6A1A] border border-[#FF6A1A] px-8 py-4 rounded-lg font-semibold">
					See All Products
				</button>
			</div>
		</div>
	);
};

export default FreshProducts;
