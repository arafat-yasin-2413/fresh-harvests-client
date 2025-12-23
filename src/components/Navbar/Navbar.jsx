import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import { Link, useLocation } from "react-router";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setAuthModal }) => {
	const [open, setOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

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
						<Link to="/">Home</Link>
						<Link to="/shop">Shop</Link>
						<Link>About us</Link>
						<Link>Blog</Link>
					</ul>

					{/* Right Elements (Desktop) */}
					<div className="font-questrial hidden lg:flex items-center gap-5">
						<Link className={`text-sm flex items-center gap-2 ${isHome && "text-white"}`}>
							<FaHeart></FaHeart> Favorites
						</Link>
						<Link className={`text-sm  flex items-center gap-2 ${isHome && "text-white"}`}>
							<FaShoppingCart></FaShoppingCart> Cart
						</Link>
						<button
							onClick={() => setAuthModal("login")}
							className={`border px-4 py-1.5 rounded-md  text-sm font-semibold ${isHome && "border-white text-white"}`}>
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
							<li className="cursor-pointer">
								<Link to="/">Home</Link>
							</li>
							<li className="cursor-pointer">
								<Link to="/shop">Shop</Link>
							</li>
							<li className="cursor-pointer">
								<Link>About us</Link>
							</li>
							<li className="cursor-pointer">
								<Link>Blog</Link>
							</li>

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
								<button
									onClick={() => {
										setAuthModal("login");
										setOpen(false);
									}}
									className="border px-4 py-1.5 rounded-md text-sm font-semibold cursor-pointer">
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
