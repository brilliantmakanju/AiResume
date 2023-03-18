 
import Link from "next/link"
import Image from "next/image"
export default function AuthSignup(){
    return(
        <main className=" h-screen  flex justify-center items-center py-[50%] md:py-[25%]  mx-auto px-2 bg-no-repeat bg-cover "  style={{backgroundImage:"url(/resumeBg.jpg)"}}  >
            <div className="flex flex-col items-center justify-start backdrop-blur-sm border-2 border-[#15254c]  gap-1 p-2  rounded-md md:rounded-l-md h-[550px] w-[400px] md:w-[400px]  "  >
                <div className="text-center text-white my-5 " >
                    <h3 className="text-[35px] font-extrabold  " >Register</h3>
                    <p className="font-bold text-[15px]  " >Don't have an account </p>
                </div>
                <form className="px-6 flex flex-col gap-5 items-center " >
                    <input type="text" placeHolder="Username" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[120%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    <input type="email" placeHolder="Email" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[120%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    <input type="password" placeHolder="Password" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[120%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    <button className="p-2 rounded w-full text-white bg-[#15254c] " >Join</button>
                </form>
                <div className="flex flex-col items-center gap-5 my-7 " >
                    <div className="w-full flex gap-5 items-center  px-5 font-bold text-white " >
                        <hr className="h-1 w-32 rounded bg-[#15254c]" />
                        OR
                        <hr className="h-1 w-32 rounded bg-[#15254c]" />
                    </div>
                    <Link href="login" className="p-2 rounded w-[60%] font-bold  text-center  text-gray-300 bg-[#15254c] " >Signup with Google</Link>
                </div>
                <div className="w-full flex flex-col gap-2 items-start  px-5 font-bold text-white " >
                    <div className="w-full flex gap-5 justify-between items-center text-[15px]   font-bold text-white" >
                        <p>If you already a member, easily log in </p>
                        <Link href="login" className="p-2 rounded font-bold  text-center  text-gray-300 bg-[#15254c] " >Login</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
