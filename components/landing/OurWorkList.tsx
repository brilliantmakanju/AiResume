import Image from "next/image";
import Link from "next/link";

interface OurWorkListProps {
  icon?: string;
  title: string;
  content: string;
}

const OurWorkList: React.FC<OurWorkListProps> = ({ icon, title, content }) => {
  return (
    <div className="text-white p-3 w-full lg:py-10 lg:w-[23.5%] bg-[#061A40] border-2 border-[#fafbf3]  rounded-md flex flex-col gap-3 transition-colors duration-300 ">
      <div className="relative w-[120px] h-[120px] mx-auto place-content-center flex justify-center items-center rounded-full overflow-hidden mt-3 lg:mt-[-20px]  ">
        <Image
          fill
          alt={"Icon Pic"}
          src={"/resumeHomeAiSocial4.jpg"}
          className={"absolute left-0 top-0 rounded-full overflow-hidden "}
        />
      </div>
      <h4 className="font-bold text-[22px] tracking-tight ">{title}</h4>
      <div className="font-extrabold text-[15px] tracking-wide leading-[1.3rem] ">
        {content}
      </div>
    </div>
  );
};

export default OurWorkList;
