"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  const [fixed, setFixed] = useState(false);

  const FixedChange = () => {
    if (window.scrollY >= 1) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", FixedChange);
  }, []);

  return (
    <>
      <nav
        className={`${
          fixed
            ? "fixed top-0 left-0 w-screen z-[19] bg-[#1481ba] text-[#0a1124] shadow-md shadow-[#242121]  flex justify-between items-center px-auto mx-auto "
            : "text-white   w-screen bg-transparent items-center flex justify-between 2xl:container 2xl:mx-auto "
        }   transition-colors items-center  flex-wrap px-[3%]  py-[1.2%]   md:px-[2%] md:py-[1%]   `}
      >
        <div className="flex justify-between items-center ">
          <Link href="/">
            <h3
              className={` flex text-[#f3f3f4] justify-between items-center font-bold md:text-2xl font-serif tracking-wide `}
            >
              Airiter
            </h3>
          </Link>
        </div>
        <div className="hidden md:flex items-center  justify-between">
          <ul
            className={`2xl:text-white text-[20px]  flex justify-around font-bold items-center gap-10 `}
          >
            <li className="transition duration-300 hover:text-[#1481ba] ">
              <Link href="/">Features</Link>
            </li>
            <li className="transition duration-300 hover:text-[#1481ba] ">
              <Link href="/">Generators</Link>
            </li>
            <li className="transition duration-300 hover:text-[#1481ba] ">
              <Link href="/">Pricing</Link>
            </li>
            <li className="transition duration-300 hover:text-[#1481ba] ">
              <Link href="contact">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <Link
            href="login"
            className="flex items-center justify-between font-bold text-white bg-[#1481ba] py-2.5 px-5 rounded-md "
          >
            Login
          </Link>
        </div>
        <button
          className={`flex md:hidden p-3 gap-2 justify-end rounded-md flex-col  font-bold  `}
          onClick={() => setMobile(!mobile)}
        >
          <div className="w-[40px] bg-white h-1  "></div>
          <div className="w-[30px] bg-white h-1 flex justify-end items-end "></div>
          <div className="w-[20px] bg-white h-1 "></div>
        </button>
      </nav>
      <div
        className={`${
          mobile
            ? "fixed right-0 top-0 w-full h-screen bg-[#16181f] opacity-80  z-[20] "
            : "fixed right-[-300px] opacity-0 "
        } fixed right-0 w-full duration-300 ease-in-out  `}
      ></div>
      <div
        className={`${
          mobile
            ? "fixed left-0 top-0 w-[50%] h-screen opacity-90 z-[21] "
            : "fixed left-[-3000px] opacity-0 "
        } duration-500 ease-in-out  pt-[90px] flex flex-col gap-[150px] z-[19]  fixed left-0 top-0 w-[70%]  text-white h-screen bg-[#0a1124] px-4 py-4 md:hidden`}
      >
        <button
          className={`md:hidden p-3 px-5 rounded-md  absolute top-5 right-4 font-bold bg-[#15254c]`}
          onClick={() => setMobile(!mobile)}
        >
          X
        </button>
        <div className="flex flex-col gap-3 text-white h-[20px]  ">
          <h3
            className={`text-white flex justify-between items-center font-bold text-2xl font-serif tracking-wide `}
          >
            WriteMyResume
          </h3>
          <p className="text-md tracking-tighter pr-4 ">
            Welcome to the future of resume, cover letter and proposal creation
          </p>
        </div>
        <div className="flex items-center justify-between">
          <ul className="text-white flex flex-col text-left justify-around font-bold items-center gap-7 ">
            <li>
              <Link href="/" onClick={() => setMobile(!mobile)}>
                Guide
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMobile(!mobile)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMobile(!mobile)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="contact" onClick={() => setMobile(!mobile)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="login" onClick={() => setMobile(!mobile)}>
                Login
              </Link>
            </li>
          </ul>
          <Link
            href="register"
            className="flex absolute bottom-20 left-3 justify-center items-center p-3 w-[10em] bg-[#003087] border-3 border-white font-bold rounded-full "
            onClick={() => setMobile(!mobile)}
          >
            Join Us
          </Link>
        </div>
      </div>
    </>
  );
}
