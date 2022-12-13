import React from 'react'
import './Home.css'
import Card from "../Cards/Card"

function Home() {
    

    return(
        <div className='home'>
            <div className='home_banner'>

            </div>
            <div className='home_section'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
                <div className='home_section'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
          
                    </div>
         </div>
    )
}
export default Home