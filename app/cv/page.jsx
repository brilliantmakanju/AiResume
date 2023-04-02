 "use client"

import {useState, useEffect} from "react"


 export default function CVGen(){

     const [fb, setFB] = useState("")
     const [mail, setMail] = useState("")
     const [github, setGit] = useState("")
     const [lname, setLname] = useState("")
     const [fname, setFname] = useState("")
     const [mname, setMname] = useState("")
     const [dateob, setDateoB] = useState("")
     const [gender, setGender] = useState("")
     const [twitter, setTwitter] = useState("")
     const [discord, setDiscord] = useState("")
     const [linkedIn, setLinkedIn] = useState("")
     const [instagram, setInstagram] = useState("")
     const [numbertel, setNumberTel] = useState("")
     // const [fname, setFname] = useState("")
     // const [fname, setFname] = useState("")
     // const [fname, setFname] = useState("")
     // const [fname, setFname] = useState("")
     // const [fname, setFname] = useState("")
     const [tab1, setTab1] = useState(true)
     const [tab2, setTab2] = useState(false)
     const [tab3, setTab3] = useState(false)
     const [tab4, setTab4] = useState(false)

     function Tab1(e){
         e.preventDefault();
         if(fname === "" || lname === "" || dateob === "" || gender === ""  ){
             alert("All Field are required to be filled")
        }else{
             setTab1(false)
             setTab2(true)
             setTab3(false)
             setTab4(false)
        }
    }

    function Tab2(e){
         e.preventDefault();
         if(fb === "" || twitter === "" || discord === "" || linkedIn === "" || github === "" || numbertel === "" || mail === "" ){
             alert("All Field are required to be filled")
        }else{
             setTab1(false)
             setTab2(false)
             setTab3(true)
             setTab4(false)
        }
    }

    function backTab(e){
        e.preventDefault();
        setTab1(true)
        setTab2(false)
        setTab3(false)
        setTab4(false)
    }

     return(
         <main className="px-2 lg:px-20 py-2 pb-10 flex flex-col items-center gap-5 " >
            <h3 className="text-center text-[35px] tracking-wide leading-loose " >CV Generator </h3>
            <form className="px-6 flex flex-col gap-5  " >
                <div className={`${tab1 ? "grid grid-cols gap-5 " : "hidden overflow-hidden w-[0] h-[0] " }`} >
                    <div className="grid grid-cols-2 gap-5" >
                        <div>
                            <input type="text" value={fname} onChange={(e) => setFname(e.target.value) } placeholder="First Name" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        </div>
                        <div>
                            <input type="text" value={lname} onChange={(e) => setLname(e.target.value) } placeholder="Last Name" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        </div>
                    </div>
                    <div>
                        <input type="date" value={dateob} onChange={(e) => setDateoB(e.target.value) } placeholder="year" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    </div>
                    <div>
                        <select type="gender" value={gender} onChange={(e) => setGender(e.target.value) } required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold  font-bold " >
                            <option value="" ></option>
                            <option value="Male" >Male</option>
                            <option value="Female" >Female</option>
                        </select>
                    </div>
                    <button onClick={(e) => Tab1(e) } className="p-2 mx-auto rounded w-[50%] text-white bg-[#15254c] " >Next</button>
                </div>
                <div className={`${tab2 ? "grid grid-cols-1  " : "hidden" }`} >
                    <h3 className="font-bold mx-6 " >Social </h3>
                    <div className="grid grid-cols-1 w-[90vw]  px-4 gap-5 mb-5 " >
                        <input type="url" value={fb} onChange={(e) => setFB(e.target.value) } placeholder="Facebook"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="url" value={twitter} onChange={(e) => setTwitter(e.target.value) } placeholder="Twitter" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="url" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value) } placeholder="LinkedIn" required className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="url" value={github} onChange={(e) => setGit(e.target.value) } placeholder="Github"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="url" value={discord} onChange={(e) => setDiscord(e.target.value) } placeholder="Discord"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="url" value={instagram} onChange={(e) => setInstagram(e.target.value) } placeholder="Instagram"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="url" value={mail} onChange={(e) => setMail(e.target.value) } placeholder="Gmail"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                        <input type="tel" value={numbertel} onChange={(e) => setNumberTel(e.target.value) } placeholder="Phone"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                    </div>
                    <div className="flex justify-between items-center gap-5" >
                        <button onClick={(e) => backTab(e) } className="p-2 mx-auto rounded w-[50%] text-white bg-[#15254c] " >Back</button>
                        <button onClick={(e) => Tab2(e) } className="p-2 mx-auto rounded w-[50%] text-white bg-[#15254c] " >Next</button>
                    </div>
                </div>
                <div className={`grid grid-cols-1  `} >
                    <div className="grid grid-cols-1 w-[90vw]  px-4 gap-5 mb-5 " >
                        <div className="flex flex-col gap-4" >
                            <h3 className='font-bold' >Skill</h3>
                            <span className="font-bold  px-2 " >Add skill and experience partaking to the job offer you want to apply for </span>
                            <div className="flex justify-between items-center gap-6 " >
                                <input type="tel" value={numbertel} onChange={(e) => setNumberTel(e.target.value) } placeholder="Skill"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                                <input type="tel" value={numbertel} onChange={(e) => setNumberTel(e.target.value) } placeholder="Experience"  className="h-[3em] bg-transparent rounded-t-md px-5 pl-1 w-[50%] border-0 outline-none border-b-2 border-[#15254c] placeholder:text-white placeholder:font-bold text-white font-bold " />
                                <button onClick={(e) => Tab2(e) } className="  p-2 mx-auto rounded w-[20%] text-white bg-[#15254c] " >Add</button>
                            </div>
                            <div className="flex overflow-x-hidden overflow-y-scroll w-[100%] h-[50%] rounded-2xl bg-[gray] p-5 flex-wrap gap-6 items-center  " >
                                <span className="border-2 rounded-full border-dot border-[red] py-1 px-2 bg-[yellow] " >Django</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5" >
                        <button onClick={(e) => backTab(e) } className="p-2 mx-auto rounded w-[50%] text-white bg-[#15254c] " >Back</button>
                        <button onClick={(e) => Tab2(e) } className="p-2 mx-auto rounded w-[50%] text-white bg-[#15254c] " >Next</button>
                    </div>
                </div>
            </form>
         </main>
    )
}








