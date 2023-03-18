 
import Link from "next/link"
import Image from "next/image"
export default function ContactMan(){
    return(
        <main className=" h-screen flex justify-center items-center py-[50%] md:py-[26%]  mx-auto px-2 bg-no-repeat bg-cover "  style={{backgroundImage:"url(/resumeAiContact.jpg)"}}  >
            <div className="flex flex-col justify-start backdrop-blur-sm border-2 border-[#15254c]  gap-1 p-2  rounded-md md:rounded-l-md h-[500px] w-[400px] md:w-[400px]  "  >
                <div className="text-center text-white my-5 " >
                    <h3 className="text-[35px] font-extrabold  " >Contact Us</h3>
                    <p className="font-bold text-[15px]  " >Got a Question, Contact us now.</p>
                </div>
                <form className="px-10 pr-20 flex flex-col gap-2 " >
                    <input type="email" placeHolder="Email" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-3 w-[120%] outline-none border-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    <textarea  placeHolder="Message" required className="h-[16em] rounded-b-md bg-transparent  px-5 w-[120%] pt-3  outline-none border-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    <button className="p-2 px-6 mx-auto rounded w-full text-white bg-[#15254c] " >Contact Us </button>
                </form>
            </div>
        </main>
    )
}
