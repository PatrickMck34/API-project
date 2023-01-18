import React from 'react'
import './Home.css'
import Card from "../Cards/Card"
import Header from '../Header/Header'
import {useSelector} from 'react-redux'
import DemoUser from '../DemoUser/DemoUser'
import { useDispatch } from 'react-redux'
import * as sessionActions from "../../store/session"
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem'
function Home() {
    const dispatch = useDispatch()
    const demoUser = "DemoUser"
 const password = "123456"
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