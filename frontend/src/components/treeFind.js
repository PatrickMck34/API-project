
import {Link} from "react-router-dom"

import React from "react"
 import {useState, useEffect } from "react";
import {  useDispatch , useSelector} from "react-redux";
import * as spotActions from "../store/spots"


export default function TreeFind() {
    const dispatch = useDispatch()
    const Asia = "https://i.postimg.cc/MHhqbdDL/Asiaregistry.jpg"
    const SouthAmerica ="https://i.postimg.cc/0rR1Jr5R/SAregistry.jpg"
    const NorthAmerica = "https://i.postimg.cc/VkF5mP4L/NAregistry.jpg"
    const Canada = "https://i.postimg.cc/Dw7yCYFV/Canadaregistry.jpg"
    const [errors, setErrors] = useState([]);
    const [form, SetForm] = useState({
        location: "",
        number: 0,
        forSurvivor: false,
        message: "",
      })
      const [number, setNumber] = useState(null)
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]); 
        dispatch(spotActions.getTrees(55))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        
      }
 

   



    return (

        <div>
    

           
            <div className="bg-black mx-[15%] text-center rounded-xl mt-4 text-white"> Lookup Your Tree Below

            </div>
            <div className="border mx-[20%] h-fit flex  mt-2 p-2  shadow-sm shadow-slate-900 rounded-xl ">
                <img src="https://i.postimg.cc/ZR88hM98/sprout.png" className="h-[30%] w-[30%] p-4 "></img>
                <div className="flex flex-col w-fit h-fit mt-4 ">
                    <div className="text-black flex mb-4 text-2xl text-center font-serif">

                        To find any tree in the registry, simply input the tree number located on the certificate and hit submit.
                    </div>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="number"
                            className="text-black border border-black ml-[15%]
                    
                            mt-12 justify-center items-center"
                        
                            onChange={(e) => setNumber(e.target.value)}
                            required
                            placeholder="Tree Number"

                        >
                        </input>
                        <Link to={`/api/${number}`}>

                            <button className="text-black border bg-gray-400/50 border-black ml-4 "  >
                                Submit
                            </button>
                        </Link>


                    </form>
                    <div className="flex flex-col border">


                    </div>
                </div>
            </div>
        </div>
    )
}