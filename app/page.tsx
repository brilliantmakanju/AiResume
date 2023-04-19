import InputBox from "../components/Input";
import AiLogo from "../components/landing/AiLogo";
import OurWork from "../components/landing/OurWork";
import Pricing from "../components/landing/Pricing";
import HomeIntro from "../components/landing/HomeIntro";
import Image from "next/image";

export default function Page() {
  return (
    <main className="2xl:container mx-auto">
      <HomeIntro />
      <OurWork />
      <AiLogo />
      <Pricing />
      <section className="flex justify-center items-center lg:flex-row-reverse  py-20 ">
        <div className="bg-[#fafbf3af] h-[24em] w-[30em] rounded-md lg:rounded-l-md lg:rounded-r-none p-4 lg:p-6 lg:h-[25em] border-[3px] border-[#1481ba] lg:border-r-[0px]  ">
          <form>
            <InputBox
              type="email"
              required
              value={"Email"}
              placeholder={"Email"}
              disabled={false}
            />
          </form>
        </div>
        <div
          className={
            "hidden lg:flex h-[24em] w-[30em] bg-white lg:h-[25em] relative rounded-tl-[200000000em] overflow-hidden rounded-r-md "
          }
        >
          <Image
            fill
            src={"/resumeBg.jpg"}
            alt={"Newsletter"}
            className={"absolute left-0 top-0 bg-contain object-fill "}
          />
        </div>
      </section>
    </main>
  );
}
