import React from 'react'
import "../styles/contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <h3>CONTACT FORM</h3>
      <form className="form">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Your Name" className="content" required />
        <label>Travellers Accompanying:</label>
        <input type="number" name="number" placeholder="0" className="content"  min="0" required />
        <label>From date:</label>
        <input type='date' name="date" className='date-group' required></input>
        <label>To date:</label>
        <input type='date' name="date" className='date-group' required></input>
        <label>Phone Number:</label>
        <input type="tel" name="phone" placeholder="Your Phone Number" className="content" required />
        <label>Contact Id:</label>
        <input type="email" name="email" placeholder="Your Email" className="content" required />
        <label>Comments:</label>
        <textarea name="message" placeholder="Your Message" className="content" rows="2"></textarea>
        <button type="submit" className="button">Submit</button><br/>
      </form>
    </div>
  )
}