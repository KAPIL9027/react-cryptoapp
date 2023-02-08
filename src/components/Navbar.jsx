import React from 'react'
import '../Navbar.css'
import {Link} from 'react-router-dom'
// import '../Navbar'
export default function Navbar() {

    const onClick = (e)=>
    {
        const navLinks = document.querySelector('.nav-links');
      e.target.addEventListener(()=>
      {
        navLinks.classList.toggle('active');
      })
    }
  return (
    <div id="navbar">
      <div id="nav-brand">
       <img id = "nav-brand-image"src = "https://cdn-icons-png.flaticon.com/512/2495/2495859.png" alt = "navbar-brand"/>
       <legend id = "nav-brand-text">CryptoWorld</legend>
      </div>

      <span id = "hamburger-btn" onClick={()=>
    {
        const hamburgerBtn = document.querySelector('#hamburger-btn');
const navLinks = document.querySelector('.nav-links');

console.log('Hello');

 hamburgerBtn.addEventListener('click',(e)=>
{
    navLinks.classList.toggle('active');
})
    }}>
          <a href = "#" className="tile"></a>
          <a href = "#" className="tile"></a>
          <a href = "#" className="tile"></a>
      </span>

      <div className = "nav-links">
          <Link className="nav-item" to="/">HOME</Link>
          <Link className="nav-item" to="/crypto">CRYPTOCURRENCIES</Link>
          <Link className="nav-item" to="/News">NEWS</Link>
      </div>
    </div>
  )
}
