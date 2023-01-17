import React from 'react'
import './Home.css'
import Card from "../Cards/Card"
import Header from '../Header/Header'
import {useSelector} from 'react-redux'
function Home() {
    const spots = useSelector(state=> state.spots)
const id = spots.id
    return(
        <>
            <Header />
        <div className='home'>
            <div className='home_banner'>
                <button className="guest">
                   User Demo
                </button>
               
            </div>
            <div className='home_section'>
     
            <Card key={id}/>
            
                
        </div>
         </div>
        </>
    )
}
export default Home