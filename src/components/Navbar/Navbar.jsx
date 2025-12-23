import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import { Link } from "react-router";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute top-0 left-0 w-full z-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between py-5">
					{/* Logo */}
					<div className="flex items-center">
						<MainLogo className={"w-56 h-10"}></MainLogo>
					</div>

					{/* Desktop Menu */}
					<ul className="font-questrial hidden lg:flex gap-8 text-[#4A4A52] text-sm">
						<Link>Home</Link>
						<Link>Shop</Link>
						<Link>About us</Link>
						<Link>Blog</Link>
					</ul>

					{/* Right Elements (Desktop) */}
					<div className="font-questrial hidden lg:flex items-center gap-5">
						<Link className="text-sm  flex items-center gap-2">
							<FaHeart></FaHeart> Favorites
						</Link>
						<Link className="text-sm  flex items-center gap-2">
							<FaShoppingCart></FaShoppingCart> Cart
						</Link>
						<button className="border px-4 py-1.5 rounded-md  text-sm font-semibold">
							Sign in
						</button>
					</div>

					{/* Hamburger Menu for Mobile */}
					<button
						onClick={() => setOpen(!open)}
						className="lg:hidden text-2xl cursor-pointer text-white">
						<GiHamburgerMenu></GiHamburgerMenu>
					</button>
				</div>

				{/* Mobile Menu */}
				{open && (
					<div className="lg:hidden bg-white rounded-xl shadow-md p-4">
						<ul className="flex flex-col gap-4 text-sm">
							<li className="cursor-pointer">Home</li>
							<li className="cursor-pointer">Shop</li>
							<li className="cursor-pointer">About us</li>
							<li className="cursor-pointer">Blog</li>

							<li className="cursor-pointer">
								<Link className="text-sm flex items-center gap-2">
									<FaHeart></FaHeart> Favorites
								</Link>
							</li>
							<li className="cursor-pointer">
								<Link className="text-sm flex items-center gap-2">
									<FaShoppingCart></FaShoppingCart> Cart
								</Link>
							</li>
							<li>
								<button className="border px-4 py-1.5 rounded-md text-sm font-semibold cursor-pointer">
									Sign in
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
