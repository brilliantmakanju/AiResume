import OurWorkList from "./OurWorkList";

export default function OurWork() {
  return (
    <section className="lg:snap-always lg:snap-start px-5 lg:mx-auto lg:px-20 grid grid-cols-1 gap-10 md:flex-wrap pt-[14%] md:pt-[10%] md:pb-[5%] bg-[#1481ba]  ">
      <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:mb-[100px] lg:gap-16 ">
        <h3 className="text-white lg:text-[40px] font-bold tracking-wide lg:w-[30%] lg:leading-[2.5rem] ">
          Why Airiter Is the Best Choice for Job Seekers Like You
        </h3>
        <h4 className=" text-white  lg:text-[25px] lg:w-[50%]  ">
          Airiter has helped thousands of job seekers around the world land
          their dream jobs. Our AI-powered platform has been recognized by
          industry experts for its innovation and effectiveness. But don't take
          our word for it – see what our satisfied customers have to say.
        </h4>
      </div>
      <div className=" flex flex-row flex-wrap gap-8 rounded-md py-3 place-content-end md:flex md:flex-wrap lg:place-content-center lg:px-[1px] md:gap-5">
        <OurWorkList
          title="Work Faster"
          content="Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your "
        />
        <OurWorkList
          title="Work Faster"
          content="Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your "
        />
        <OurWorkList
          title="Work Faster"
          content="Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your "
        />
        <OurWorkList
          title="Work Faster"
          content="Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your Resume , Cover Letter , Proposal and Portfolio in a flash using new AI Technology Create your "
        />
      </div>
    </section>
    //
  );
}
