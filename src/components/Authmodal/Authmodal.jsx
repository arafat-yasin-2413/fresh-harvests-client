import React from "react";

const Authmodal = ({ type, onClose, switchModal }) => {
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

				<form className="space-y-4">
					{type === "register" && (
						<input
							type="text"
							placeholder="Full Name"
							className="input input-bordered w-full"
						/>
					)}

					<input
						type="email"
						placeholder="Email"
						className="input input-bordered w-full"
					/>

					<input
						type="password"
						placeholder="Password"
						className="input input-bordered w-full"
					/>

					{type === "login" && (
						<div className="flex justify-between text-sm">
							<label className="flex gap-2 items-center">
								<input type="checkbox" className="checkbox checkbox-sm" />
								Remember me
							</label>
							<span className="text-orange-500 cursor-pointer">Forgot Password</span>
						</div>
					)}

					<button className="btn btn-warning w-full text-white">
						{type === "login" ? "Login" : "Register"}
					</button>
				</form>

				{/* Social login */}
				<div className="my-4 text-center text-sm">Or sign in with</div>

				<div className="flex gap-3">
					<button className="btn btn-outline w-1/2">Google</button>
					<button className="btn btn-outline w-1/2">Facebook</button>
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
