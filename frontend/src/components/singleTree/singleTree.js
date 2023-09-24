import React from "react"
import * as spotActions from "../../store/spots"
import { useSelector, useDispatch } from "react-redux"
import {useParams} from "react-router-dom"
import { useEffect } from "react"
import CreateSpotForm from "../Get-Spot"
import Navbar from "../navbar/Navbar"
import {Link} from "react-router-dom"
const SingleTree = () => {
    const dispatch = useDispatch()
    const tree = useSelector(state=>state.spots?.singleTree)
    const treeobj= Object.values(tree)
    const {treeId} = useParams()
 
    const Asia = "https://i.postimg.cc/NffZrJvx/Asiaregistry.jpg"
    const SouthAmerica ="https://i.postimg.cc/zvpMcWKW/SAregistry.jpg"
    const NorthAmerica = "https://i.postimg.cc/XqnmLxG4/NAregistry.jpg"
    const Canada = "https://i.postimg.cc/7Zcv4gcn/Canadaregistry.jpg"
        
        useEffect(()=>{
 
            dispatch(spotActions.getTree(treeId))
            
            
          }, [])
          
          return (
            <div className="w-full">

  
      <div className="mt-9">

          
        <div className="bg-black rounded-xl mb-5 h-5  mt-3 flex mx-[20%] items-center justify-center text-white">Your Tree

        </div>
              {tree.location === "Asia" ? (
                <div className="">
                  <img src={Asia} className="w-96 items-center flex justify-center mx-auto" />
                </div>
              ): ( tree.location ==="South America" ? (
                <div>
                  <img src={SouthAmerica} className="w-96 items-center flex justify-center mx-auto"/>
                </div>
              ): ( tree.location ==="North America" ? (
                <div>
                  <img src={NorthAmerica} className="w-96 items-center flex justify-center mx-auto" />
                </div>
              ): ( tree.location ==="Canada" ? (
                <div>
                  <img src={Canada} className="w-96 items-center flex justify-center mx-auto" />
                </div>
              ):(
                <div></div>
                )
                ))
                )} 
      <div className="flex items-center justify-center text-2xl  mt-9  ">

      
      </div>
      <div className="border-2 mx-[5%] flex items-center justify-around mt-5"> Tree Information
            <span>

              {tree.id}
            </span>
            <p>
              {tree.message}
            </p>

      </div>
      <div className=" mx-[20%] bg-black h-5 rounded-xl text-white items-center justify-center flex mt-5"> To The Warrior

      </div>
        <div className="w-full flex items-center justify-center  mt-3">
                <img src="https://i.postimg.cc/KYQwvw0L/sappling.webp" className="rounded-xl border-2 border-slate-600 h-24 flex   "></img>

                <span className="ml-5">

                " {tree.message} message "
                </span>
        </div>

             
            <div className="flex items-center justify-center  mt-4 ">

      <Link to="/tree">

      <button className="text-black border mb-9 rounded-xl p-[3px] bg-gray-400/50 border-black ml-4 w-fit"  > Go Back

      </button>
      </Link>
              
            </div>
      
            </div>
               
              
                
 
             
        </div>
        )}
                

export default SingleTree