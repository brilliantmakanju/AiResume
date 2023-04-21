import GeneratorBox from "../../../components/Generator/Box";

const ResumeHome = () => {
  return (
    <main className="h-full flex flex-col gap-10 md:flex-col md:flexnowrap lg:flexnowrap xl:flex-nowrap lg:px-5 md:gap-20 justify-center items-center place-content-center  lg:my-[10vh] px-2 z-[0] lg:h-[100%] pb-[5em] lg:pb-[1em] lg:py-[1em] ">
      <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:mb-[100px] lg:gap-16 ">
        <h3 className="text-white text-[40px] mt-[50px] lg:text-[40px] font-bold tracking-wide lg:w-[30%] lg:leading-[2.5rem] ">
          Why Airiter Is the Best Choice for Job Seekers Like You
        </h3>
        <h4 className=" text-white  lg:text-[25px] lg:w-[50%]  ">
          Airiter has helped thousands of job seekers around the world land
          their dream jobs. Our AI-powered platform has been recognized by
          industry experts for its innovation and effectiveness. But don't take
          our word for it – see what our satisfied customers have to say.
        </h4>
      </div>
      <div className="flex flex-col gap-10 md:flex-wrap lg:flex-row lg:flexnowrap xl:flex-nowrap lg:px-5 md:gap-20 justify-center items-center place-content-center   ">
        <GeneratorBox
          href="/generators/resume"
          title="Text to Resume"
          Dest="Generator"
          subheading="Create your Resume Now "
          image="/resumeHomeAiSocial.jpg"
          context="Create your perfect resume using our ai "
        />
        <GeneratorBox
          href="/generators/cv"
          title="Speech to Resume"
          Dest="Generate"
          subheading="Create your Resume Now "
          image="/resumeHomeAiSocial.jpg"
          context="Creta eyour resume using any of the following , ranging from text , images or voice "
        />
        <GeneratorBox
          href="/"
          title="Image to Resume"
          Dest="Generator"
          subheading="Create your Resume Now "
          image="/resumeHomeAiSocial.jpg"
          context="Creta eyour resume using any of the following , ranging from text , images or voice "
        />
      </div>
    </main>
  );
};

export default ResumeHome;
