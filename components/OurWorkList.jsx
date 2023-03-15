import Image from "next/image"
import Link from "next/link"

export default function OurWorkList(){
    return(
        <div className="md:bg-[#b3b0ac] grid grid-cols-1 gap-5 rounded-md py-10 md:flex md:flex-wrap md:gap-20 md:place-content-center  lg:px-20 lg:grid-cols-3 md:gap-5"  >
          <div className="bg-[#c6c3be] relative rounded-md shadow-md shadow-black mx-auto h-[400px] w-[300px] px-5 py-5 hover:shadow-lg hover:shadow-[#15254c] hover:scale-2 duration-300 transition ease-in-out " >
                <Image
                    width={250}
                    alt="CoverLetter"
                    height={150}
                    src='/resumeHomeAi.jpg'
                    className="rounded-md "
                />
                <h3 className="font-bold text-center pt-6 " >ResumeAI</h3>
                <p className="px-1  font-bold tacking-widest text-center pt-5 pb-10 " >
                    Improve your resume with out AI bullet point generator so you can land your dream job.
                </p>
                <Link href="/" className="bg-[#15254c] text-white w-full px-16 ml-1 rounded-md font-bold py-2 " >Build Resume</Link>
          </div>
          <div className="bg-[#c6c3be] relative rounded-md shadow-md shadow-black mx-auto h-[400px] w-[300px] px-5 py-5 hover:shadow-lg hover:shadow-[#15254c] hover:scale-2 duration-300 transition ease-in-out " >
                <Image
                    width={250}
                    alt="CoverLetter"
                    height={150}
                    src='/resumeHomeAi.jpg'
                    className="rounded-md "
                />
                <h3 className="font-bold text-center pt-6 " >ResumeAI</h3>
                <p className="px-1  font-bold tacking-widest text-center pt-5 pb-10 " >
                    Improve your resume with out AI bullet point generator so you can land your dream job.
                </p>
                <Link href="/" className="bg-[#15254c] text-white w-full px-16 ml-1 rounded-md font-bold py-2 " >Build Resume</Link>
          </div>
          <div className="bg-[#c6c3be] relative rounded-md shadow-md shadow-black mx-auto h-[400px] w-[300px] px-5 py-5 hover:shadow-lg hover:shadow-[#15254c] hover:scale-2 duration-300 transition ease-in-out " >
                <Image
                    width={250}
                    alt="Proposal"
                    height={150}
                    src='/resumeHomeAi.jpg'
                    className="rounded-md "
                />
                <h3 className="font-bold text-center pt-6 " >ResumeAI</h3>
                <p className="px-1  font-bold tacking-widest text-center pt-5 pb-10 " >
                    Improve your resume with out AI bullet point generator so you can land your dream job.
                </p>
                <Link href="/" className="bg-[#15254c] text-white w-full px-16 ml-1 rounded-md font-bold py-2 " >Build Resume</Link>
          </div>
        </div>
    )
}
