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
    </main>
  );
}
