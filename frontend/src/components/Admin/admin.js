import React from "react"
import { useSelector } from "react-redux"
import CreateSpotForm from "../"
const Admin = () => {
    const trees = useSelector(state=>state.spots?.allTrees)
    const treesobj = Object.values(trees)
    console.log(treesobj)
return (
    <div className="text-black">
       {treesobj.map((tree) => (
        <div>
        {tree.location} {tree.message}
        </div>
       ))}
    </div>
)
}
export default Admin