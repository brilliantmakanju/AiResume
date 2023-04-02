'use client'
import Link from "next/link"
import { useState, useEffect } from "react"


const Nav = () => {

    const [mobile, setMobile] = useState(false)

  return (
    <>
        <nav className="flex flex-row  justify-between items-center h-5 w-full p-9 py-10 border-0 border-b-2 border-[#35353b] shadow-sm shadow-[red] px-2  lg:px-8 xl:px-16 2xl:px-32  " >
            <div className="flex items-center justify-center font-bold text-[80px] " >
                <h3  className="text-[40px] md:text-[30px] lg:text-[28px] " >Logo Image </h3>
            </div>

            <ul className="hidden list-none md:flex text-[25.5px] flex-row justify-evenly items-center gap-10 font-bold  cursor-pointer  " >
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/"} >Home</Link></li>
            </ul>

            <div className="hidden md:flex justify-evenly items-center gap-4" >
                <Link href={"/"} className="py-3 px-5 bg-[blue] font-bold text-white cursor-pointer rounded-md " >Login</Link> <span className="md:flex hidden text-[40px]  " >/</span> <Link href={"/"} className="py-3 md:flex hidden justify-center items-center px-5 border-2 border-[blue] bg-transparent font-bold text-white cursor-pointer rounded-md " >Register</Link>
            </div>

            <button className={`flex md:hidden p-3 px-5 rounded-md bg-[#404059]  font-bold `} onClick={() => setMobile(!mobile) } >L</button>
        </nav>
        <div className={`md:hidden w-screen h-screen bg-[#0d0c0cc2] ${mobile ? "flex top-0 left-0 z-[23] " : " flex top-0 right-[-100vw] opacity-0 " } `}></div>
        <div className={`flex md:hidden flex-wrap ${mobile ? "fixed left-0 top-0 bg-blue-800 opacity-95 " : "fixed left-[-100vw] opacity-0 top-0 " } transition-all duration-300 ease-in-out `}>
            Mobile SideNav
        </div>
    </>
  )
}

export default Nav