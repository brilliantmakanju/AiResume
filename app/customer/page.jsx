

import Metadata from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title:"Customer Service"
}

export default function Customer(){
    return(
        <main className="h-[100%] flex relative backdrop-blur-sm pt-[1%] pb-[10%] 2xl:container mx-auto px-2 md:pt-[-20%] lg:pt-[0%] lg:px-[13em]  bg-no-repeat bg-cover  w-screen "  >
            <div className="relative font-bold   rounded-t-md px-[2%] overflow-y-scroll py-[5%] pb-[15%] h-[84.2vh] mb-[6.7vh] flex flex-col gap-8 MsgContain border-0 lg:rounded-b-[5em]  " >
                <div className=" text-white px-1 gap-3 flex flex-row-reverse float-right " >
                    <div className="relative flex-none h-[3em] w-[3em] rounded-full overflow-hidden " >
                        <Image
                            fill
                            alt="userPic"
                            src="/resumeHomeAiSocial4.jpg"
                            className="rounded-full overflow-hidden"
                        />
                    </div>
                    <div className="userMsg bg-[#15254c] border-3 border-[#16181f] shrink mt-[30px] md:w-[60%] rounded-[1.3em] p-2  "  >
                        How do i create an account
                    </div>
                </div>
                <div className=" text-white px-1 gap-3 flex  w-[100%]" >
                    <div className="relative flex-none h-[3em] w-[3em] rounded-full overflow-hidden " >
                        <Image
                            fill
                            alt="resumeBot"
                            src="/resumeBg.jpg"
                            className="rounded-full overflow-hidden"
                        />
                    </div>
                    <div className="botMsg bg-[#16181f] border-3 border-[#15254c] shrink mt-[30px] md:w-[60%] rounded-[1.3em] p-2  "  >
                        To create an account all you simply need to do is navigate to our register page throught this link and fill in the details then you will be a registred user on Ai resume wwriter
                    </div>
                </div>
            </div>
            <div className="flex items-center fixed bottom-[5em] pb-[1%]  z-[19] left-0 px-[20px] w-full lg:bottom-[10em] lg:px-[20em] 2xl:px-[30em] 2xl:bottom-[10em]  " >
                <input type="text" placeholder="Message" className="h-[3.5em]  customerMsg px-5 pl-3  outline-none border-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold bg-[#16181f]  w-[95%] " />
                <button className="p-5 py-4 font-bold border-0 border-l-2 border-white customerBtn mx-auto text-white bg-[#15254c]  " >Send</button>
            </div>
        </main>
    )
}
