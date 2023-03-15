import OurWorkList from "./OurWorkList"

export default function OurWork(){
    return(
        <section className="lg:snap-always lg:snap-start px-5 md:mx-auto md:py-[20px] lg:px-20 grid grid-cols-1 gap-10 md:flex-wrap py-[14%] md:py-[10%] ">
            <h3 className="text-[25px] px-[5px] text-center font-bold font-serif tracking-wide h-[2em] md:h-[3em]  leading-tight text-center md:text-[40px]  lg:text-[45px] mx-auto lg:w-[100%] md:gap-10" >Create your Resume/Cover Letter or Proposal with our AI</h3>
            <OurWorkList />
        </section>
    )
}
