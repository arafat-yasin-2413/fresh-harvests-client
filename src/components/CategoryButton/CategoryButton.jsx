import React from "react";

const CategoryButton = ({label, active, onClick}) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`border px-5 py-2 rounded-lg text-[18px] font-light cursor-pointer
        ${
			active ? "bg-[#749B3F] text-white border-[#749B3F]" : "border-[#D9D9D9] text-[#A6A6A6]"
		}`}>
				{label}
			</button>
		</>
	);
};

export default CategoryButton;
