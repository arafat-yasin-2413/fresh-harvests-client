import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import { Link } from "react-router";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="absolute top-0 left-0 w-full z-50">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between py-6">
					{/* Logo */}
					<div className="flex items-center">
						<MainLogo className="w-56 h-10"></MainLogo>
					</div>

					{/* Menu */}
					<ul className="font-questrial hidden lg:flex gap-8 text-[#4A4A52] text-sm">
						<Link>Home</Link>
						<Link>Shop</Link>
						<Link>About us</Link>
						<Link>Blog</Link>
					</ul>

					{/* Right */}
					<div className="font-questrial flex items-center gap-4">
						<Link className="text-sm text-white flex items-center gap-2"><FaHeart></FaHeart> Favorites</Link>
						<Link className="text-sm text-white flex items-center gap-2"><FaShoppingCart></FaShoppingCart> Cart</Link>
						<button className="border border-white px-4 py-1.5 rounded-md text-white text-sm font-semibold">
							Sign in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
