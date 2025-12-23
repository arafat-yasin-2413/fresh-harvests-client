import React, { useState } from "react";

const DescriptionReview = () => {
	const [activeTab, setActiveTab] = useState("description");

	return (
		<div className="max-w-7xl mx-auto mt-10">
			{/* Tabs */}
			<div className="flex gap-3 mb-4">
				<button
					onClick={() => setActiveTab("description")}
					className={`px-5 py-2 rounded-lg text-sm font-medium transition
            ${
				activeTab === "description"
					? "bg-[#749B3F] text-white"
					: "bg-white border border-gray-200 text-gray-600"
			}`}>
					Description
				</button>

				<button
					onClick={() => setActiveTab("reviews")}
					className={`px-5 py-2 rounded-lg text-sm font-medium transition
            ${
				activeTab === "reviews"
					? "bg-[#D9D9D9] text-white"
					: "bg-white border border-gray-200 text-gray-600"
			}`}>
					Reviews (1)
				</button>
			</div>

			{/* Content Box */}
			<div className="bg-gray-50 rounded-2xl p-6 text-gray-600 text-sm leading-relaxed">
				{activeTab === "description" && (
					<p>
						Our coconuts are sustainably grown, ensuring the best quality and taste.
						Each coconut is handpicked and carefully prepared, offering you the freshest
						product possible. Rich in healthy fats, electrolytes, and essential
						nutrients, coconuts provide both hydration and nourishment.
						<br />
						<br />
						Perfect for smoothies, desserts, curries, and more — let the natural
						sweetness of the coconut elevate your recipes.
					</p>
				)}

				{activeTab === "reviews" && (
					<p>
						⭐⭐⭐⭐☆ <br />
						Very fresh and tasty coconuts! Packaging was good and delivery was on time.
						Will definitely buy again.
					</p>
				)}
			</div>
		</div>
	);
};

export default DescriptionReview;
