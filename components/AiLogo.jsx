import Image from "next/image"

export default function AiLogo(){
    return(
        <section className="lg:snap-always lg:snap-start bg-no-repeat bg-cover bg-center bg-fixed " style={{backgroundImage:"url(/AichatGPT.jpg)"}}  >
            <div className="md:flex md:flex-col mx-auto gap-5 relative hidden h-[30em]" >
                <div className="mx-auto relative w-[50em] h-[30em]  " >
                    <Image
                            fill
                            src={"/chatGPT.png"}
                            alt="chatGPT"
                            className=" md:absolute left-0 rounded-full top-0 object-fit "
                    />
                </div>
            </div>
            <div className="md:hidden gap-5 relative h-[20em]" >
                <div className=" relative ml-[-2em]  w-[105%] h-[20em]  " >
                    <Image
                            fill
                            src={"/chatGPT.png"}
                            alt="chatGPT"
                            className=" object-fit "
                    />
                </div>
            </div>
        </section>
    )
}
