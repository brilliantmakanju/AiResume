import Link from "next/link";

export default function HomeIntroText() {
  return (
    <div className="flex flex-col lg:py-28   ">
      <h3 className="hidden md:flex flex-col ml-3 py-5 text-[#f3f3f4]  md:ml-0 md:mt-0 md:text-5xl font-bold font-serif tracking-tight ">
        Create Your Professional Resume and Portfolio with Airiter
      </h3>
      <h3 className="text-[2.5em] pl-2  text-[#f3f3f4] w-full mt-[-50px] lg:first-line:mt-[-1px] font-bold font-serif tracking-wide md:hidden leading-[2.5rem] ">
        Create Your Professional Resume and Portfolio with Airiter
      </h3>
      <p className="w-full mt-2 text-[20px] text-[#b2b2b4] tracking-tight px-2 pr-3  lg:pr-10 font-bold  md:px-1">
        Welcome to Airiter, the Ai-Powered resume and portfolio generator that
        helps you to create professional and personalized resumes and
        portfolios. Our easy-to-use platform leverages the latest n artifical
        intelligence technology to simplify the process and help you stand out
        from the competition
      </p>
      <div className="flex flex-row gap-2 lg:gap-5 items-center justify-center md:justify-start md:mt-3 mt-6 mx-1 ">
        <Link
          href="login"
          className=" px-5 w-[45%] text-center py-2 md:px-3 md:py-2 rounded-md  text-[#f3f3f4] font-bold border-2 bg-[#1481ba] border-[#f3f3f4] "
        >
          Login
        </Link>
        <Link
          href="register"
          className="rounded-md px-5 py-2 md:px-2 md:py-2 text-center w-[45%] text-[#1481ba] lg:w-full bg-[#f3f3f4] font-bold border-2  border-[#1481ba] "
        >
          Register
        </Link>
      </div>
    </div>
  );
}
