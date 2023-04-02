import ServiceList from "./ServiceList"

const Json = [
  {
    id:1,
    title:"Book",
    image:"/resumeBg.jpg",
    content:"NBNskdkdjdjdjdjjdjdjdjdjjdj"
  },
  {
    id:2,
    title:"Book",
    image:"/resumeAi.png",
    content:"NBNskdkdjdjdjdjjdjdjdjdjjdj"
  },
  {
    id:3,
    title:"Book",
    image:"/resumeAi.png",
    content:"NBNskdkdjdjdjdjjdjdjdjdjjdj"
  },
  {
    id:4,
    title:"Book",
    image:"/resumeAi.png",
    content:"NBNskdkdjdjdjdjjdjdjdjdjjdj"
  },
  {
    id:5,
    title:"Book",
    image:"/resumeAi.png",
    content:"NBNskdkdjdjdjdjjdjdjdjdjjdj"
  },
  {
    id:5,
    title:"Book",
    image:"/resumeAi.png",
    content:"NBNskdkdjdjdjdjjdjdjdjdjjdj"
  }
]

const ServiceCont = () => {
  return (
    <section className="grid grid-cols-3 gap-7 justify-evenly items-center px-3 py-10 " >
      {
        Json.map((value, index) => {
          return(
            <ServiceList image={value.image} content={value.content} serviceid={value.id}  />
          )
        })
      }
        {/* <ServiceList image={"/resumeAiContact.jpg"} content={"WOrk now to use the best software in the world a great world is out there waiting for you come now "} serviceid={1} />
        <ServiceList image={"/resumeAi.png"} content={"WOrk now to use the best software in the world a great world is out there waiting for you come now "} serviceid={2} />
        <ServiceList image={"/resumeAi.png"} content={"WOrk now to use the best software in the world a great world is out there waiting for you come now "} serviceid={3} />
         */}
    </section>
  )
}

export default ServiceCont