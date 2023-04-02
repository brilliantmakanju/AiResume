import Image from "next/image"

const ServiceList = ({ image, content, serviceid }) => {
  return (
    <div key={serviceid} className="flex flex-wrap flex-col bg-[blue] gap-7 justify-evenly items-center px-8 " >
        <Image 
            src={image}
            width={200}
            height={200}
            alt={"Book"}
        />
        {content}
    </div>
  )
}

export default ServiceList