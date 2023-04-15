import Image from "next/image";

export default function HomeIntroImage() {
  return (
    <div className="lg:flex md:flex-col gap-5 py-10 md:py-20 relative h-[24em] lg:h-[39em] overflow-visible   ">
      <div className="relative  lg:w-[cal(50% - 50vw)] xl:w-[cal(100% - 100vw)] 2xl:w-[40em] w-[25em] h-[22em] lg:h-[55em]  mt-[-3em]  container mx-auto ">
        <Image
          fill
          alt="AiPic"
          src={"/resumeAi.png"}
          className=" md:absolute left-0 rounded-full top-0 object-fit "
        />
      </div>
    </div>
  );
}
