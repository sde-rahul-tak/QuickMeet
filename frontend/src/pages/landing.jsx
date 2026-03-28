import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'



export default function LandingPage() {

    const router = useNavigate();

  return (
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'>
                <h2>QuickMeet</h2>
            </div>
            <div className='navlist'>
                <p onClick={() => {
                        router("/2027")
                    }}>Join as Guest</p>
                <p onClick={() => {
                        router("/auth")

                    }}>Register user</p>
                <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                    <p>Login user</p>
                </div>
            </div>
        </nav>
        <div className='landingMainContainer'>
            <div>
                <h1>Distance Means Nothing When You're Connected.</h1>
                <p>Experience real-time conversations with <span className='quickmeet'>QuickMeet</span>.</p>
                <div role='button'>
                    <Link to={"/auth"}>Connect Now</Link>
                </div>
            </div>
            <div> 
                <img src="/communication.png" alt="" />
            </div>
        </div>
    </div>
  )
}
