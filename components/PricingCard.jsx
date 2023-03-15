import Link from "next/link"



export default function Card(){
    return(
        <div className="  grid grid-cols-1 gap-10 rounded-md py-10 md:px-20 md:grid-cols-2 md:gap-20"  >

          <div className=" relative rounded-md  border-[#15254c] shadow-md shadow-black mx-auto h-[30em] w-[300px] px-5 py-10 hover:bg-[#16181f] hover:text-white hover:shadow-lg hover:shadow-[#15254c] hover:translate-y-[10px] duration-300 transition ease-in-out muhoverEffect " >
               <div className="mt-[-15px]" >
                    <h3 className="font-bold text-[20px] py-2 " >Starter</h3>
                    <h3 className="font-bold text-[40px]  flex items-center gap-2 " >$0 <span className="text-[15px] text-[#003087] " >/Month</span></h3>
                    <p className="text-[15px] py-2 font-bold " >Resume Generation using one of the best AI in the world  </p>
                </div>
                <ul className="font-bold  text-[20px] flex flex-col justify-between items-start gap-2 pl-[10px] my-[15px]  " >
                    <li className="text-[18px] tracking-tight  " >Fixed Template</li>
                    <li className="text-[18px] tracking-tight  " >Image and PDF</li>
                    <li className="text-[18px] tracking-tight  " >Customisable Template</li>
                    <li className="text-[18px] tracking-tight  " >2-5 (Per week)</li>
                </ul>
                <Link href="/" className=" border-[#15254c] border-[2px] bg-[#003087] absolute bottom-5 text-white w-[70%] text-center mx-auto left-[40px] rounded-md font-bold py-2 hoverEffect " >Choose Plan</Link>
          </div>
          <div className=" relative rounded-md  border-[#15254c] shadow-md shadow-black mx-auto h-[30em] w-[300px] px-5 py-10 hover:bg-[#16181f] hover:text-white hover:shadow-lg hover:shadow-[#15254c] hover:translate-y-[10px] duration-300 transition ease-in-out muhoverEffect " >
                <span className="absolute top-0 left-0 w-full bg-[#003087] py-2 rounded-t-md text-center font-bold text-white " >MOST POPULAR</span>
                <div>
                    <h3 className="font-bold text-[20px] py-2 " >Pro</h3>
                    <h3 className="font-bold text-[40px]  flex items-center gap-2 " >$8 <span className="text-[15px] text-[#003087] " >/Month</span></h3>
                    <p className="text-[15px] py-2 font-bold " >Resume Generation using one of the best AI in the world  </p>
                </div>
                <ul className="font-bold  text-[20px] flex flex-col justify-between items-start gap-2 pl-[10px] my-[15px]  " >
                    <li className="text-[18px] tracking-tight  " >Fixed Template</li>
                    <li className="text-[18px] tracking-tight  " >Image and PDF</li>
                    <li className="text-[18px] tracking-tight  " >Customisable Template</li>
                    <li className="text-[18px] tracking-tight  " >2-5 (Per week)</li>
                </ul>
                <Link href="/" className=" border-[#15254c] border-[2px] bg-[#003087] absolute bottom-5 text-white w-[70%] text-center mx-auto left-[40px] rounded-md font-bold py-2 hoverEffect " >Choose Plan</Link>
          </div>
        </div>
    )
}
