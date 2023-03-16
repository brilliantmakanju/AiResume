import Image from "next/image"
import Link from "next/link"

export default function OurWorkList(){
    return(
        <div className="md:bg-[#b3b0ac] grid grid-cols-1 gap-8 rounded-md py-10 md:flex md:flex-wrap md:gap-20 md:place-content-center  lg:px-20 lg:grid-cols-3 md:gap-5"  >
          <div className="bg-[#c6c3be] relative rounded-md shadow-md shadow-black mx-auto h-[400px] w-[300px] md:h-[400px] md:w-[300px]  hover:shadow-lg hover:shadow-[#15254c] hover:scale-2 duration-300 transition ease-in-out  " >
                <Image
                    width={350}
                    alt="CoverLetter"
                    height={300}
                    src='/resumeHomeAi.jpg'
                    className="rounded-t-md "
                />
                <h3 className="font-bold text-center pt-6 " >ResumeAI</h3>
                <p className="px-3  font-bold tacking-widest text-center pt-3 pb-8 " >
                    Improve your resume with out AI bullet point generator so you can land your dream job.
                </p>
                <div className="px-5 " >

                <Link href="/" className="bg-[#15254c] mx-auto text-white w-full px-3 flex justify-center items-center  rounded-md font-bold py-2 " >Build Resume</Link>
                </div>
          </div>
          <div className="bg-[#c6c3be] relative rounded-md shadow-md shadow-black mx-auto h-[400px] w-[300px] md:h-[400px] md:w-[300px]  hover:shadow-lg hover:shadow-[#15254c] hover:scale-2 duration-300 transition ease-in-out  " >
                <Image
                    width={350}
                    alt="CoverLetter"
                    height={300}
                    src='/resumeHomeAi.jpg'
                    className="rounded-t-md "
                />
                <h3 className="font-bold text-center pt-6 " >ResumeAI</h3>
                <p className="px-3  font-bold tacking-widest text-center pt-3 pb-8 " >
                    Improve your resume with out AI bullet point generator so you can land your dream job.
                </p>
                <div className="px-5 " >

                <Link href="/" className="bg-[#15254c] mx-auto text-white w-full px-3 flex justify-center items-center  rounded-md font-bold py-2 " >Build Resume</Link>
                </div>
          </div>
          <div className="bg-[#c6c3be] relative rounded-md shadow-md shadow-black mx-auto h-[400px] w-[300px] md:h-[400px] md:w-[300px]  hover:shadow-lg hover:shadow-[#15254c] hover:scale-2 duration-300 transition ease-in-out  " >
                <Image
                    width={350}
                    alt="CoverLetter"
                    height={300}
                    src='/resumeHomeAi.jpg'
                    className="rounded-t-md "
                />
                <h3 className="font-bold text-center pt-6 " >ResumeAI</h3>
                <p className="px-3  font-bold tacking-widest text-center pt-3 pb-8 " >
                    Improve your resume with out AI bullet point generator so you can land your dream job.
                </p>
                <div className="px-5 " >

                <Link href="/" className="bg-[#15254c] mx-auto text-white w-full px-3 flex justify-center items-center  rounded-md font-bold py-2 " >Build Resume</Link>
                </div>
          </div>
        </div>
    )
}
