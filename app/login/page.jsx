import Link from "next/link";
import Image from "next/image";
import InputBox from "../../components/Input";
export default function AuthLogin() {
  return (
    <main className="h-screen flex justify-center items-center   mx-auto px-2 mb-[100px] ">
      <div className="flex flex-col items-center justify-start backdrop-blur-sm border-2 border-[#1481ba] gap-1 p-2  rounded-md md:rounded-l-md h-[480px] w-[400px] md:w-[400px]  ">
        <div className="text-center text-white my-5 ">
          <h3 className="text-[35px] font-extrabold  ">Login</h3>
          <p className="font-bold text-[15px]  ">Already a member? </p>
        </div>
        <form className="px-6 flex flex-col gap-5 items-center ">
          <InputBox type="text" placeholder="Username " required />
          <InputBox type="password" placeholder="Password " required />
          <button className="p-2 rounded w-full text-white bg-[#1481ba]">
            Login
          </button>
        </form>
        <div className="flex flex-col items-center gap-5 my-7 ">
          <div className="w-full flex gap-5 items-center  px-5 font-bold text-white ">
            <hr className="h-1 w-32 rounded bg-[#1481ba]" />
            OR
            <hr className="h-1 w-32 rounded bg-[#1481ba]" />
          </div>
          <Link
            href="register"
            className="p-2 rounded w-[60%] font-bold  text-center  text-gray-300 bg-[#1481ba] "
          >
            Signin with Google
          </Link>
        </div>
        <div className="w-full flex flex-col gap-2 items-start  px-5 font-bold text-white ">
          <div className="w-full flex gap-5 justify-between items-center text-[15px]   font-bold text-white">
            <p>Not a Member Yet? </p>
            <Link
              href="register"
              className="p-2 rounded font-bold  text-center  text-gray-300 bg-[#1481ba]"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
