import React from 'react'
import "../styles/destination.css"
import china from "../assets/China.jpg"
import tower from "../assets/eiffel-tower.webp"
import navy from "../assets/RP_NAVY-PIER.jpg"
import bali from "../assets/best-hotel-bali.jpeg"

export default function Destination() {
  return (
    <div className='destination'>
        <h3>Places to visit</h3>
        <div className='places'>
        <img src={china} alt="china" width={"150px"} height={"150px"}></img>
        <img src={tower} alt="tower" width={"150px"} height={"150px"}></img>
        <img src={navy} alt="navy" width={"150px"} height={"150px"}></img>
        <img src={bali} alt="bali" width={"150px"} height={"150px"}></img>
        </div>
    </div>
  )
}
