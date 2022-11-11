import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
      <>
    {/* <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Erin Manahan</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li id="nav-about"><a href="#about">About</a></li>
            <li id="nav-portfolio"><a href="#portfolio">Portfolio</a></li>
            <li id="nav-contact"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav> */}
          <div className={styles.navbar_container}>
              <div className={styles.navbar_logo}>
                  <h1>DBMS Project</h1>
              </div>
              <div className={styles.navbar_links}>
                  <ul>
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/shopping">Shopping</NavLink></li>
                      <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
              </div>
          </div>

      </>
  )
}

export default NavBar