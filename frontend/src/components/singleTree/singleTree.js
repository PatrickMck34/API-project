import React from "react"
import * as spotActions from "../../store/spots"
import { useSelector, useDispatch } from "react-redux"
import {useParams} from "react-router-dom"
import { useEffect } from "react"
import CreateSpotForm from "../Get-Spot"
const SingleTree = () => {
    const dispatch = useDispatch()
    const tree = useSelector(state=>state.spots?.singleTree)
    const treeobj= Object.values(tree)
    const {treeId} = useParams()
 
    const Asia = "https://i.postimg.cc/MHhqbdDL/Asiaregistry.jpg"
    const SouthAmerica ="https://i.postimg.cc/0rR1Jr5R/SAregistry.jpg"
    const NorthAmerica = "https://i.postimg.cc/VkF5mP4L/NAregistry.jpg"
    const Canada = "https://i.postimg.cc/Dw7yCYFV/Canadaregistry.jpg"
        
        useEffect(()=>{
 
            dispatch(spotActions.getTree(treeId))
          
           
          }, [])
          
    return (
      <div>

          
      {tree.location === "Asia" ? (
        <div>
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
      <div className="ml-[40%] text-2xl  ">

      <p className="">
      </p>
              {tree.id}
      <p className="border rounded-xl border-2 mt-2 border-slate-400 bg-gray-200 w-fit p-1 ">
              {tree.location}  
        
      </p>

      </div>
      {tree.message}
<CreateSpotForm />
      
             
            
              
      
            </div>
               
              
                
 
             
        )}
                

export default SingleTree