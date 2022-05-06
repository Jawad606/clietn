import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
      <div className="container-fluid Nav py-1">
    <div  className='container'>
<nav className="navbar navbar-expand-lg  navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">GO FILER</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
         <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className={'nav-link'} to={'/befiler'}>Be Filer</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className={'nav-link'} to={'/tax'}>Tax Collection</NavLink>
          </li>
          <li className="nav-item">
          <NavLink   className={'nav-link'}to={'/abouts'}>About Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className={'nav-link'} to={'/contectus'}>Contect Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className={'nav-link'} to={'/oonnectwithmetamask'}>Connect with MATAMSK</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav></div></div>
  )
}

export default Header