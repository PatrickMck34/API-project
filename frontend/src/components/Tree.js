import * as React from "react"

import {Link} from 'react-router-dom'









export default function Home() {

  return (
    <div>

   <div className="w-full h-14 flex flex-row bg-[#44351d] font-serif">
    <Link href="https://resilience-project.com"> 
    <div className="w-54 h-7 ml-1 mt-4 text-lg  items-center flex"> Resilience Project // Tucson

</div>
    </Link>
      <div className="flex ml-auto">
    <Link to="/tree">

    <button className="w-24 p-3 h-8  text-white/90 mt-4 mr-4  border text-xs shadow-sm shadow-slate-900 border-gray-700 bg-[#514f4de8] rounded-2xl flex justify-around items-center "> Lookup Tree

    </button>
    </Link>
    <Link to="/admin">
    <button className="w-24 h-8 ml-16 mr-3 mt-4 text-white/90 text-xs border shadow-sm shadow-slate-900 border-gray-700 bg-[#514f4de8] rounded-2xl justify-center items-center flex" >Sign In
   
    </button>
    </Link>
      </div>
    </div>
    <div className="w-full  flex ">
    {/* <img src="../API-project/sprout.png" className="w-full h-80 static"></img> */}
<span className="absolute bottom-80 left-[20%] text-6xl text-white/90 font-serif"> Trees for Triumph (registry) </span>
    </div>
    <div className="h-fit w-full  text-black flex justify-center items-center mt-4 text-3xl font-serif"> Welcome to the Registry for Trees for Triumph

    </div>
    <div className="bg-black rounded-xl justify-center items-center flex ml-[15%] mr-[15%] mt-8 font-serif"> Info about Registry</div>
    <div className="flex text-black bg-gray-200 rounded-xl mx-[18%] mt-2 border shadow-sm w-[65%]">
    <div className="text-2xl ml-auto w-96 mt-16 text-center font-serif ">
    Your donation goes to agroforestry projects led by women and empowering communities throughout the world. Simply choose a region where you would like a tree planted and use your healing to cultivate female empowerment.

    </div>

{/* <img src="../sprout.png" className="h-96 ml-auto mr-24 rounded-xl mt-5  flex"></img> */}
    </div>
    </div>
  )
}