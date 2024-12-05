import heading from "@/app/assets/Heading.png";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div>
			<div className='w-[1920px] h-[829px] bg-[#043873] py-[140px] px-[220px] flex justify-between items-center '>
				
                <div>
					<Image src={heading} alt='heading' width={656} height={361} />
				</div>
               
                <div className="w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD]">

                </div>
			</div>
		</div>
	);
};

export default HeroSection;