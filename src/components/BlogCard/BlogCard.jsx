import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({image, date, title, btnText}) => {
    return (
        <div>
            <img src={image} alt="blog image"/>

            <h5 className="font-questrial text-[18px] text-[#4A4A52] my-3">{date}</h5>
            <p className="text-[18px] font-medium text-[#212337] max-w-85">{title}</p>
            <button className="mt-2 flex items-center gap-3 text-lg font-semibold text-[#FF6A1A]">
                {btnText} <FaArrowRight></FaArrowRight>
            </button>
        </div>
    );
};

export default BlogCard;