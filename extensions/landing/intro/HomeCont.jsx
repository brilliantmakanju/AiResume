import HomeImage from "./HomeImage"
import HomeText from "./HomeText"

const HomeCont = () => {
  return (
    <section className="flex justify-between items-center h-[50vh] md:h-[70vh] w-[97.5%] rounded-md md:w-full p-6 text-white " style={{background:"url('/resumeBg2.jpg')"}} >
        <HomeText />
        <HomeImage />
    </section>
  )
}

export default HomeCont