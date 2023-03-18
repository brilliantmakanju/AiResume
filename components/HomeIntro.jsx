import HomeIntroText from "./HomeIntroText"
import HomeIntroImage from "./HomeIntroImage"

export default function HomeIntro(){
    return(
        <section className="lg:snap-always lg:snap-start md:flex w-auto md:justify-between md:items-center gap-10 xl:gap-2  md:px-20 overflow-hidden  h-full bg-no-repeat bg-cover bg-center bg-fixed xl:h-[80%] " style={{backgroundImage:"url(/resumeBg.jpg)"}} >
            <HomeIntroText />
            <HomeIntroImage />
        </section>
    )
}
