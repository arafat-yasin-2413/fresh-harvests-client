import React from "react";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {
	return (
		<div className="max-w-350 mx-auto mb-20">
			<div className="flex flex-col justify-center items-center">
				<h4 className="bg-[#749B3F1A] w-fit text-xl text-[#749B3F] font-medium px-3 py-1 rounded-md">
					Our Blog
				</h4>
				<h2 className="text-[#212337] font-medium text-5xl py-3">Fresh Harvest Blog</h2>
				<p className="text-center font-questrial text-[#4A4A52] text-sm mb-6">
					Welcome to the Fresh Harvest Blog, your go-to resource for all things <br></br>{" "}
					related to fresh produce, healthy eating, and culinary inspiration.
				</p>
			</div>

			{/* blog posts will be shown here in grid layout */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
				<BlogCard
					image={blog1}
					date={"May 23, 2024"}
					title={"Exploring Seasonal Delights: A Guide to What's Fresh Right Now"}
					btnText={"Read More"}>

                </BlogCard>
				<BlogCard
					image={blog2}
					date={"May 23, 2024"}
					title={"Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"}
					btnText={"Read More"}>

                </BlogCard>
				<BlogCard
					image={blog3}
					date={"May 23, 2024"}
					title={"The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week"}
					btnText={"Read More"}>

                </BlogCard>
			</div>
		</div>
	);
};

export default Blog;
