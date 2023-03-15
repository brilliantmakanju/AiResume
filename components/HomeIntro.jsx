import HomeIntroText from "./HomeIntroText"
import HomeIntroImage from "./HomeIntroImage"

export default function HomeIntro(){
    return(
        <section className="lg:snap-always lg:snap-start md:flex w-auto md:justify-between md:items-center gap-10  md:px-20 h-full md:min-h-screen bg-no-repeat bg-cover bg-center bg-fixed " style={{backgroundImage:"url(/resumeBg.jpg)"}} >
            <HomeIntroText />
            <HomeIntroImage />
        </section>
    )
}
