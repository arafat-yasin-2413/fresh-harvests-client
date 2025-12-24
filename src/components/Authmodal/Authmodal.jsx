import React, { useState } from "react";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import useAxios from "../../hooks/useAxios";

const Authmodal = ({ type, onClose, switchModal }) => {
	const axiosInstance = useAxios();

	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		password: "",
	});

	const handleRegister = async () => {
		try {
			const role = formData.email === "admin@gmail.com" ? "ADMIN" : "USER";

			const userInfo = {
				userName: formData.userName,
				email: formData.email,
				password: formData.password,
				profileImage: null,
				role,
			};

			const res = await axiosInstance.post("/users/register", userInfo);
			console.log("SUCCESS:", res.data);
		} catch (error) {
			console.error("REGISTER ERROR:", error.response?.data || error.message);
		}
	};

	return (
		<div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-3">
			<div className="bg-white w-full max-w-md rounded-xl p-6 relative">
				{/* Close button */}
				<button onClick={onClose} className="absolute right-4 top-4 text-xl">
					✕
				</button>

				<h2 className="text-2xl font-semibold text-center mb-6">
					{type === "login" ? "Login" : "Register"}
				</h2>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleRegister();
					}}
					className="space-y-4">
					<label className="font-questrial">Full Name</label>
					{type === "register" && (
						<input
							type="text"
							placeholder="Enter your name"
							className="input input-bordered w-full font-questrial"
							value={formData.userName}
							onChange={(e) => {
								setFormData({ ...formData, userName: e.target.value });
							}}
						/>
					)}

					<label className="font-questrial">Email</label>
					<input
						type="email"
						placeholder="Enter your email"
						className="input input-bordered w-full font-questrial"
						value={formData.email}
						onChange={(e) => {
							setFormData({ ...formData, email: e.target.value });
						}}
					/>

					<label className="font-questrial">Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						className="input input-bordered w-full font-questrial"
						value={formData.password}
						onChange={(e) => {
							setFormData({ ...formData, password: e.target.value });
						}}
					/>

					{type === "login" && (
						<div className="flex justify-between text-sm">
							<label className="flex gap-2 items-center">
								<input
									type="checkbox"
									className="checkbox checkbox-sm text-[#FF6A1A] border border-[#FF6A1A]"
								/>
								Remember me
							</label>
							<span className="text-[#4A4A52] underline cursor-pointer">
								Forgot Password
							</span>
						</div>
					)}

					<button className="btn bg-[#FF6A1A] w-full text-white">
						{type === "login" ? "Login" : "Register"}
					</button>
				</form>

				{/* Social login */}
				<div className="flex w-full flex-col">
					{type === "register" ? (
						<div className="divider">Or Sign Up with</div>
					) : (
						<div className="divider">Or Sign in with</div>
					)}
				</div>

				<div className="flex gap-3">
					<button className="flex items-center btn btn-outline-[#D9D9D9] w-1/2">
						<img className="w-5" src={google} alt="logo of google" />
						Google
					</button>
					<button className="flex items-center btn btn-outline-[#D9D9D9] w-1/2">
						<img className="w-5" src={facebook} alt="logo of facebook" />
						Facebook
					</button>
				</div>

				{/* Switch */}
				<p className="text-center text-sm mt-5">
					{type === "login" ? (
						<>
							Don't have an account?{" "}
							<span
								onClick={() => switchModal("register")}
								className="text-orange-500 cursor-pointer">
								Sign up
							</span>
						</>
					) : (
						<>
							Already have an account?{" "}
							<span
								onClick={() => switchModal("login")}
								className="text-orange-500 cursor-pointer">
								Login
							</span>
						</>
					)}
				</p>
			</div>
		</div>
	);
};

export default Authmodal;
