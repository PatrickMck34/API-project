import React from 'react'
import './Home.css'
import Card from "../Cards/Card"
import Header from '../Header/Header'
import {useSelector} from 'react-redux'
function Home() {
    const spots = useSelector(state=> state.spots)
const id = spots.id
    return(
        <div className='home'>
            <div className='home_banner'>
               
            </div>
            <div className='home_section'>
     
            <Card key={"c"+id}/>
                
        </div>
         </div>
    )
}
export default Home