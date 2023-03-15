import Image from "next/image"
import Link from "next/link"

 export default function Footer(){
	return (
		<footer className="lg:snap-always lg:snap-end font-serif grid grid-cols-1 pt-[10%] pb-[18.5%]  bg-[#16181f] shadow-md shadow-[#242121] relative px-[2%]  md:py-[3%] lg:py-[5%]  " >
			<div className="mb-[20px] border-b-2 border-white py-[5px] text-white font-bold px-[10px] pb-[10px]  " >
				<h3>Logo</h3>
				<p>Little About Us</p>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-1 md:gap-5 lg:grid-cols-1 lg:gap-8 px-[2%] md:px-[1%] md:pb-[10%] py-[10%] pt-[2%]  " >
				<div className="text-white md:flex md:flex-wrap md:items-center " >
					<h3 className="font-extrabold letter-spacing-[0.126em] text-[18px] md:flex md:flex-wrap md:gap-10 " style={{letterSpacing:"0.126em"}} >About <span className="hidden md:flex md:gap-2" >|</span> </h3>
					<ul className="grid grid-cols-1 gap-2 md:gap-5 tracking-tight md:flex md:flex-wrap  ml-[15px] font-bold text-white text-[17px] " >
						<li><Link href="/">Privacy Notice</Link></li>
						<li><Link href="/">Terms of Use</Link></li>
						<li><Link href="/">Careers</Link></li>
						<li><Link href="/">Blog</Link></li>
						<li><Link href="/">Advertise with Us</Link></li>
					</ul>
				</div>
				<div className="text-white md:flex md:flex-wrap md:items-center " >
					<h3 className="font-extrabold letter-spacing-[0.126em] text-[18px]  md:flex md:flex-wrap md:gap-7 " style={{letterSpacing:"0.126em"}} >Contact<span className="hidden md:flex md:gap-2" >|</span></h3>
					<ul className="grid grid-cols-1 gap-2 md:gap-5 tracking-tight md:flex md:flex-wrap ml-[15px] font-bold text-white text-[17px] " >
						<li><Link href="/">Customer Service</Link></li>
						<li><Link href="/">Newsletter Contact</Link></li>
					</ul>
				</div>
				<div className="text-white md:flex md:flex-wrap md:items-center  " >
					<h3 className="font-extrabold letter-spacing-[0.126em] text-[18px] md:flex md:flex-wrap md:gap-6  " style={{letterSpacing:"0.126em"}} >Connect<span className="hidden md:flex md:gap-2" >|</span></h3>
					<ul className="grid grid-cols-2 gap-2 md:gap-5 tracking-tight md:flex md:flex-wrap ml-[15px] font-bold text-white text-[17px] " >
						<li><Link href="/">Facebook</Link></li>
						<li><Link href="/">Instagram</Link></li>
						<li><Link href="/">Twitter</Link></li>
						<li><Link href="/">LinkdeIn</Link></li>
						<li><Link href="/">Pintrest</Link></li>
						<li><Link href="/">Google</Link></li>
					</ul>
				</div>
			</div>
			<div className="absolute bottom-0 p-3 py-1 pl-[2%] md:pl-[4%] leading-loose text-left border-t-2 border-[#003087]  text-white w-full font-bold tracking-tight text-[15px] md:text-[16px]  " >
				<h5>Developer: Brilliant Makanju</h5>
				<span>Copyright © 2023 AiLover. All Rights Reserved.</span> </div>
		</footer>	
	)
}
