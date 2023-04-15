import HomeIntroText from "./HomeIntroText";
import HomeIntroImage from "./HomeIntroImage";

export default function HomeIntro() {
  return (
    <>
      <section className="lg:snap-always lg:snap-start w-auto md:justify-between md:flex-row flex-col-reverse  md:items-center gap-4 xl:gap-2  md:px-20 overflow-hidden  bg-no-repeat bg-cover bg-center bg-fixed xl:h-[80%] lg:hidden  ">
        <HomeIntroImage />
        <HomeIntroText />
      </section>
      <section className="lg:snap-always lg:snap-start lg:flex w-auto lg:justify-between lg:flex-row flex-col-reverse items-center  lg:items-center gap-4 xl:gap-2  lg:px-20 overflow-hidden  bg-no-repeat bg-cover bg-center bg-fixed xl:h-[80%] hidden ">
        <HomeIntroText />
        <HomeIntroImage />
      </section>
    </>
  );
}
