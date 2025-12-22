import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import appStore from "../../assets/images/appstore.png";
import playStore from "../../assets/images/googleplay.png";
import { Link } from "react-router";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

import visa from "../../assets/images/Visa.png";
import applepay from "../../assets/images/applypay.png";
import paypal from "../../assets/images/paypal.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-[1900px] bg-[#F4F6F6] mx-auto overflow-hidden pt-20 pb-10">
			<div className="max-w-350 mx-auto flex justify-between items-center">
				{/* div 1 */}
				<div>
					<MainLogo className={"w-52"}></MainLogo>

					{/* app store and play store */}
					<div className="mt-20 lg:mt-32">
						<h5 className="text-[#4A4A52] text-sm font-medium mb-3">Download App:</h5>
						<div className="flex items-center gap-4 justify-center lg:justify-start">
							<img
								src={appStore}
								alt="App Store"
								className="h-10 cursor-pointer shadow-md rounded-md"
							/>
							<img
								src={playStore}
								alt="Play Store"
								className="h-10 cursor-pointer shadow-md rounded-md"
							/>
						</div>
					</div>
				</div>

				{/* div 2 */}
				<div>
					<h4 className="text-lg font-medium mb-2">Quick links 1</h4>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Shop</Link>
					</li>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>About us</Link>
					</li>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Blog</Link>
					</li>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Detail Blog</Link>
					</li>
				</div>
				{/* div 3 */}
				<div>
					<h4 className="text-lg font-medium mb-2">Quick links 2</h4>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Favorites</Link>
					</li>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Cart</Link>
					</li>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Sign in</Link>
					</li>
					<li className="list-none text-sm font-questrial mb-4">
						<Link>Register</Link>
					</li>
				</div>
				{/* div 4 */}
				<div>
					<h4 className="text-lg font-medium mb-2">Contact us</h4>
					<li className="list-none text-sm font-questrial mb-4 flex items-center gap-2">
						<MdOutlineLocalPhone className="text-[#749B3F] text-lg" />
						+8801344 555777
					</li>
					<li className="list-none text-sm font-questrial mb-4 flex items-center gap-2">
						<CgMail className="text-[#749B3F] text-lg" />
						freshharvests@gmail.com
					</li>
					<li className="list-none text-sm font-questrial mb-4 flex items-center gap-2">
						<CiLocationOn className="text-[#749B3F] text-lg" />
						Tanjung Sari Street, Pontianak, Indonesia
					</li>

                {/* payment methods */}
                <div>
                    <h5>Accepted Payment Methods:</h5>

                    <div className="flex items-center gap-4">
                        <img className="w-16" src={visa} alt="image of visa"/>
                        <img className="w-16" src={paypal} alt="image of apple pay"/>
                        <img className="w-16" src={applepay} alt="image of paypal"/>
                    </div>
                </div>

				</div>

                <br/>
			</div>


            <div className="max-w-350 mx-auto my-8 border-t border-[#D9D9D9]">
            
            <div className="mt-8 flex justify-between items-center">
                <p>
                    &copy; Copyright 2024. All Rights Reserved by Banana Studio
                </p>

                <p className="flex items-center gap-4">
                    <FaTwitter className="text-white text-5xl p-3 bg-[#212337] rounded-full" />
                    <FaFacebookF className="text-white text-5xl p-3 bg-[#212337] rounded-full" />
                    <FaInstagram className="text-white text-5xl p-3 bg-[#212337] rounded-full" />

                </p>
            </div>
            </div>
		</div>
	);
};

export default Footer;
