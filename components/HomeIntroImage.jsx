import Image from "next/image"

export default function HomeIntroImage(){
    return(
        <div className="lg:flex md:flex-col gap-5 relative h-[30em] hidden " >
            <div className="relative w-[50em] h-[30em] ml-[-1em] mt-[-3em]  " >
                <Image
                        fill
                        alt="AiPic"
                        src={"/resumeAi.png"}
                        className=" md:absolute left-0 rounded-full top-0 object-fit "
                />
            </div>
            {/*
            <div className="flex flex-col gap-5 relative top-10  left-[45%] h-[4em] w-[4em] rounded-full " >
                <Image
                        fill
                        src={"/resumeHomeAiSocial.jpg"}
                        className="absolute left-0 top-0 object-fit rounded-full "
                />
            </div>
            <div className="flex flex-col gap-5 relative bottom-[-60%] left-[45%] h-[4em] w-[4em] rounded-full " >
                <Image
                        fill
                        src={"/resumeHomeAiSocial2.jpg"}
                        className="absolute left-0 top-0 object-fit rounded-full "
                />
            </div>
            <div className="flex flex-col gap-5 relative bottom-[-5%] left-10 h-[4em] w-[4em] rounded-full " >
                <Image
                        fill
                        src={"/resumeHomeAiSocial3.jpg"}
                        className="absolute left-0 top-0 object-fit rounded-full "
                />
            </div>
            <div className="flex flex-col gap-5 relative top-[-50px] left-[80%] h-[4em] w-[4em] rounded-full " >
                <Image
                        fill
                        src={"/resumeHomeAiSocial4.jpg"}
                        className="absolute left-0 top-0 object-fit rounded-full "
                />
            </div>
            */}
        </div>

    )
}
