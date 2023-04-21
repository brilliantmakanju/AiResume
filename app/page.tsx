import InputBox from "../components/Input";
import AiLogo from "../components/landing/AiLogo";
import OurWork from "../components/landing/OurWork";
import Pricing from "../components/landing/Pricing";
import HomeIntro from "../components/landing/HomeIntro";

export default function Page() {
  return (
  <main className="2xl:container mx-auto my-[-5px]  ">
      <HomeIntro />
      <OurWork />
      <AiLogo />
      <Pricing />
    </main>
  );
}
