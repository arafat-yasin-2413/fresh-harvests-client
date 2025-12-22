import React from "react";
import man from "../../assets/images/Image.png";

const Testimonial = () => {
	return (
		<div className="max-w-350 mx-auto mb-20">
			
            
            <div className="flex flex-col justify-center items-center">
				<h4 className="bg-[#749B3F1A] w-fit text-xl text-[#749B3F] font-medium px-3 py-1 rounded-md">
					Testimonial
				</h4>
				<h2 className="text-[#212337] font-medium text-5xl py-3">What Our Customer Say</h2>
				<p className="text-center font-questrial text-[#4A4A52] text-sm mb-6">
					Don't just take our word for it - here's what some of our customers have to{" "}
					<br /> say about their experience with Fresh Harvests
				</p>
			</div>

            {/* actual review */}
            <div className="flex justify-between items-center">
                {/* left image */}
                <div className="flex-1">
                    <img className="w-125" src={man} alt="image of reviewer"/>
                </div>

                {/* right side content */}
                <div className="bg-[#F4F6F6] p-8 rounded-3xl flex-1 h-fit">
                    <p class="font-questrial text-[20px] text-[#4A4A52] mb-6">
                        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                    </p>

                    <p className="font-questrial text-[18px]">
                        <span className="font-bold">John Doe - </span>Professional Chef 
                    </p>
                </div>
            </div>
		</div>
	);
};

export default Testimonial;
