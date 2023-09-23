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
 
    
        
        useEffect(()=>{
 
            dispatch(spotActions.getTree(treeId))
          
           
          }, [])
          
    return (
      <div>

          
      
              {tree.location}  {tree.message}

      
             
            
              
      
            </div>
               
              
                
 
             
        )}
                

export default SingleTree