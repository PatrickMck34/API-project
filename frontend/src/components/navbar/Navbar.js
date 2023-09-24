import * as React from "react"
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <div>

        <div className="w-full h-14 flex flex-row bg-[#44351d] font-serif">
         <Link href="https://resilience-project.com"> 
         <div className="w-54 h-7 ml-1 mt-4 text-lg text-white items-center flex "> Resilience Project // Tucson
     
     </div>
     </Link>
     <div className="flex ml-auto">

     <Link to="/">

       <button className="w-24 p-3 h-8  text-white/90 mt-4 mr-4  border text-xs shadow-sm shadow-slate-900 border-gray-700 bg-[#514f4de8] rounded-2xl flex justify-around items-center "> Home
       </button>
     </Link>
     </div>
     </div>
     </div>
    )
}