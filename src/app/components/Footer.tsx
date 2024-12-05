import Contant from "@/app/assets/Content.png";
import Image from "next/image";



const Footer = () => {
	return (
		
			<div className='w-[1920px] h-[461px] bg-[#043873] gap-[200px] py-[140px] px-[220px] flex justify-between items-center '>
				
               <div className="w-[1480px] h-[289] gap-[100px]">
               <div>
					<Image src={Contant} alt='heading' width={1480} height={289} />
				</div>
               </div>
               
                
			</div>
		
	);
};

export default Footer;