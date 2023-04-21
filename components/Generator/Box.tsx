import Image from "next/image";
import Link from "next/link";

interface GeneratorBoxProps {
  title: string;
  context: string;
  href: string;
  image: string;
  Dest: string;
  subheading: string;
}

const GeneratorBox: React.FC<GeneratorBoxProps> = ({
  title,
  context,
  href,
  Dest,
  image,
  subheading,
}) => {
  return (
    <>
      <div className="w-[80%] lg:w-[50%] h-auto rounded-md bg-[#1481ba] px-5 py-14 text-center  hidden lg:flex lg:flex-col lg:gap-10 ">
        <Link className="" href={href}>
          <div className="relative w-[80px] mb-4 h-[80px] mx-auto place-content-center flex justify-center items-center rounded-full overflow-hidden mt-3 lg:mt-[-20px]  ">
            <Image
              fill
              src={image}
              alt={"BOO,"}
              className={"absolute left-0 top-0 rounded-full overflow-hidden "}
            />
          </div>
          <h4 className=" text-[#fafbf4] font-extrabold tracking-tight text-[20px] mb-2 ">
            {title}
          </h4>
          <p className="mb-[30px] font-bold text-[#fafbf3] tracking-tight px-10 ">
            {context}
          </p>
          <button className="w-full px-10 rounded-md text-[#fafbf4] border-2 border-[#fafbf4] font-extrabold py-3 bg-red-900 mt-[50px] ">
            {Dest}
          </button>
        </Link>
      </div>
      <div className="w-[126%] relative bg-[#1481ba] lg:hidden py-[10%] px-[20px] rounded-md flex justify-start items-center ">
        <Link href={href} className="flex items-center  ">
          <div className="relative w-[50px] h-[50px] mx-auto place-content-center flex justify-center items-center rounded-full overflow-hidden mt-3 lg:mt-[-20px]  ">
            <Image
              fill
              src={image}
              alt={"BOO,"}
              className={"absolute left-0 top-0 rounded-full overflow-hidden "}
            />
          </div>
          <div className="flex flex-col gap-0 leading-0 items-start mt-[10px] ml-[10px] ">
            <h4 className="font-extrabold text-[20px] text-[#fafbf4] ">
              {title}
            </h4>
            <p className="text-[17px] font-bold text-[#dadbd5] mt-[-7px]">
              {subheading}
            </p>
          </div>
          <div className="absolute top-[30%] flex right-[20px] rounded-full font-extrabold text-[#fafbf4] bg-[#061A40] p-4 h-[50px] w-[50px] items-center place-content-center ">
            L
          </div>
        </Link>
      </div>
    </>
  );
};

export default GeneratorBox;
