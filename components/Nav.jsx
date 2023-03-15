"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

 export default function Nav(){
 	const [mobile, setMobile] = useState(false)


    const handleMobile = () => {
        setMobile(!mobile)
    }

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])
 
	return (
		<>
			<nav className={`${ fixed ? "fixed top-0 left-0 w-full z-[19] bg-[#c6c3be] text-[#0a1124] shadow-md shadow-[#242121] flex justify-between items-center " : "text-white fixed top-0 left-0  w-full bg-transparent items-center flex justify-between " } transition-colors items-center  flex-wrap px-[3%] py-[3%]  md:px-[2%] md:py-[1%] `} >
				<div className="flex justify-between items-center" >
					<h3 className={` flex justify-between items-center font-bold md:text-2xl font-serif tracking-wide `} >WriteMyResume</h3>
				</div>
				<div className="hidden md:flex items-center justify-between" >
					<ul className=" text-[20px] flex justify-around font-bold items-center gap-10 " >
						<li><Link href="/">Guide</Link></li>
						<li><Link href="/">About</Link></li>
						<li><Link href="/">Pricing</Link></li>
						<li><Link href="/">Contact</Link></li>
					</ul>
				</div>
				<div className="hidden md:flex " >
					<Link href="/" className="flex items-center justify-between font-bold text-white bg-[#15254c] py-2.5 px-5 rounded-md " >Login</Link>
				</div>
				<button className={`flex md:hidden p-3 px-5 rounded-md   font-bold ${fixed ? "bg-[#0a1124] text-white " : " text-white bg-[#15254c]"} `} onClick={() => setMobile(!mobile) } >L</button>
			</nav>
			<div className={`${mobile ? "fixed left-0 top-0 w-full h-screen " : "fixed left-[-3000px]" } duration-300 ease-in-out  `} ></div>
			<div className={`${mobile ? "fixed left-0 top-0 w-[50%] h-screen opacity-80 " : "fixed left-[-3000px] opacity-0 " } duration-500 ease-in-out  pt-[90px] flex flex-col gap-[150px] z-[19]  fixed left-0 top-0 w-[70%]  h-screen bg-[#0a1124] px-4 py-4 md:hidden`} >
				<button className={`md:hidden p-3 px-5 rounded-md  absolute top-5 right-4 font-bold bg-[#15254c]`} onClick={() => setMobile(!mobile) } >X</button>
				<div className="flex flex-col gap-3 text-white h-[20px]  " >
					<h3 className={`text-white flex justify-between items-center font-bold text-2xl font-serif tracking-wide `} >WriteMyResume</h3>
					<p className="text-md tracking-tighter pr-4 " >Welcome to the future of resume, cover letter and proposal creation</p>
				</div>
				<div className="flex items-center justify-between" >
					<ul className="text-white flex flex-col justify-around font-bold items-center gap-7 " >
						<li><Link href="/">Guide</Link></li>
						<li><Link href="/">About</Link></li>
						<li><Link href="/">Pricing</Link></li>
						<li><Link href="/">Contact</Link></li>
					</ul>
				</div>
			</div>
		</>
	)
}

