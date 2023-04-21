import Link from "next/link";
import Image from "next/image";
export default function ContactMan() {
  return (
    <main className=" h-screen flex  place-content-center my-[10vh] lg:my-[10vh] px-2 z-[0] lg:h-[100%] ">
      <div className="flex flex-col justify-start backdrop-blur-sm border-2 border-[#1481ba]  gap-1 p-2  rounded-md md:rounded-l-md h-[500px] w-[400px] md:w-[400px] md:h-[480px]  ">
        <div className="text-center text-white my-5 ">
          <h3 className="text-[35px] font-extrabold  ">Contact Us</h3>
          <p className="font-bold text-[15px]  ">
            Got a Question, Contact us now.
          </p>
        </div>
        <form className="px-5 pr-16 md:pr-20 flex flex-col gap-2 ">
          <input
            type="email"
            placeholder="Email"
            required
            className="h-[3em] bg-transparent rounded-t-md px-5 pl-3 w-[120%] outline-none border-2 border-[#1481ba] placeholder:text-white placeholder:font-bold text-white font-bold "
          />
          <textarea
            placeholder="Message"
            required
            className="h-[16em] rounded-b-md bg-transparent  px-5 w-[120%] pt-3  outline-none border-2 border-[#1481ba] placeholder:text-white placeholder:font-bold text-white font-bold "
          />
          <button className="p-2 px-6 mx-auto rounded w-full text-white bg-[#1481ba]">
            Contact Us{" "}
          </button>
        </form>
      </div>
    </main>
  );
}
