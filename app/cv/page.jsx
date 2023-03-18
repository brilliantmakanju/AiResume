 




 export default function CVGen(){
     return(
         <main className="px-20 py-20 flex flex-col items-center gap-5 " >
            <h3 className="text-center text-[35px] tracking-wide leading-loose " >CV Generator </h3>
            <form className="flex flex-col gap-5 rounded-md items-center justify-between bg-[red] w-[40%] px-10 py-3 " >
                <div className="flex flex-col justify-evenly items-start gap-1" >
                    <label>Name</label>
                    <div className="flex justify-evenly items-center gap-5" >
                        <input type="text" placeHolder="First" />
                        <input type="text" placeHolder="Last" />
                    </div>
                </div>
                <input type="date" className="w-full" />
            </form>
         </main>
    )
}








