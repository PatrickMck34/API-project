import React from 'react'
import './Home.css'
import Card from "../Cards/Card"
import Header from '../Header/Header'
function Home() {
    

    return(
        <div className='home'>
            <div className='home_banner'>
                <Header />
            </div>
            <div className='home_section'>
                
            <Card />
        </div>
         </div>
    )
}
export default Home