import React from 'react'
import travelLogo from "../../assets/travel-logo-theme.avif"
import '../../styles/navlinks.css'
import { useNavigate, useNavigation} from 'react-router-dom'

export default function Navlinks() {

    const navigate=useNavigate();

  return (
    <div className='navbar-container'>
    <img src={travelLogo} alt="Logo" width={"170px"} height={"150px"}></img>
    <div className='navlinks'>
        <ul>
            <li onClick={()=>navigate('/')}>HOME</li>
            <li onClick={()=>navigate('/About')}>ABOUT</li>
            <li onClick={()=>navigate('/Destination')}>DESTINATION</li>
            <li onClick={()=>navigate('/Contact')}>CONTACT</li>
        </ul>
            
    </div>
    </div>
  )
}