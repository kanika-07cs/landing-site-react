import React from 'react'
import "../styles/destination.css"
import china from "../assets/China.jpg"
import tower from "../assets/eiffel-tower.webp"
import navy from "../assets/RP_NAVY-PIER.jpg"
import bali from "../assets/best-hotel-bali.jpeg"
import bangkok from "../assets/Bangkog.jpg"
import maldives from "../assets/maldives.webp"

export default function Destination() {
  return (
    <div className='destination'>
        <h3>Places to visit</h3>
        <div className='places'>
        <fig><img src={china} alt="china" width={"200px"} height={"200px"}></img><figcaption>Great Wall of China</figcaption></fig>
        <fig><img src={tower} alt="tower" width={"200px"} height={"200px"}></img><figcaption>Eiffel Tower</figcaption></fig>
        <fig><img src={navy} alt="navy" width={"200px"} height={"200px"}></img><figcaption>Navy Pier</figcaption></fig>
        <fig><img src={bali} alt="bali" width={"200px"} height={"200px"}></img><figcaption>Bali</figcaption></fig>
        <fig><img src={bangkok} alt="bangkok" width={"200px"} height={"200px"}></img><figcaption>Bangkok</figcaption></fig>
        <fig><img src={maldives} alt="maldives" width={"200px"} height={"200px"}></img><figcaption>Maldives</figcaption></fig>
        </div>
    </div>
  )
}
