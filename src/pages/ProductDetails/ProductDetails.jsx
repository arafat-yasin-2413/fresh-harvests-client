import React from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { IoIosStar } from "react-icons/io";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import DescriptionReview from "../../components/DescriptionReview/DescriptionReview";
import RelatedProducts from "../../components/ReleatedProducts/RelatedProducts";

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

	const { id,productName, description, price, images, category } = product || {};
	const firstImage = images?.[0];

	if (isLoading) {
		return <p className="text-center py-20">Loading Product Details...</p>;
	}

	return (
		<div className="mt-20 max-w-7xl mx-auto py-10">
			{/* top */}
			<div className="flex items-start gap-10">
				{/* image */}
				<div className="border border-gray-200 px-4 py-12 rounded-lg">
					<img className="w-2xs" src={firstImage} alt={`image of ${productName}`} />
				</div>

				{/* contents */}
				<div className="flex-1">
					<h5 className="bg-[#749B3F1A] text-[#749B3F] w-fit rounded-lg px-1 capitalize">
						{category?.categoryName}
					</h5>

					<h3 className="text-5xl text-[#212337] my-4">{productName}</h3>

					<div className="flex items-center gap-2 text-sm">
						<p className="text-[#FFB848] flex items-center gap-1">
							<IoIosStar />
							<IoIosStar />
							<IoIosStar />
							<IoIosStar />
							<IoIosStar />
						</p>

						<p className="">
							<span className="font-semibold">5.0</span>
							<span className="text-xs">(1 review)</span>
						</p>
					</div>

					<h4 className="text-3xl text-[#FF6A1A] my-2">${price}/kg</h4>

					<p className="font-questrial text-[#4A4A52] text-lg mt-6">{description}</p>

					<br />
					<br />

					{/* Quantity Selector */}
					<div className="flex items-center gap-2">
						<p>Quantity</p>

						<div class="join">
							<button class="btn join-item">-</button>
							<input
								type="number"
								className="input input-bordered join-item w-16 text-center"
								value="1"
							/>
							<button className="btn join-item">+</button>
						</div>

						<p className="font-light">/kg</p>
					</div>

					{/* Action buttons */}

					<div className="flex gap-4 mt-4">
						<button className="flex items-center justify-center gap-2 px-4 flex-1 py-3 rounded-lg  bg-[#F4F6F6]">
							<FaHeart className="text-gray-400" />
							Save as favorite
						</button>

						<button className="flex items-center justify-center gap-2 px-4 flex-1 py-3 rounded-lg bg-[#FF6A1A] text-white">
							<FaShoppingCart />
							Add to cart
						</button>
					</div>
				</div>
			</div>

			{/* down */}
            <DescriptionReview></DescriptionReview>

            <RelatedProducts categoryName={category?.categoryName} currentProductId={id}></RelatedProducts>
		</div>
	);
};

export default ProductDetails;
