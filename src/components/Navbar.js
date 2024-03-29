import React from 'react'
import classes from '../css/Navbar.module.css'
import cx from 'classnames'

const Navbar = () => (
    <nav className={cx("navbar navbar-expand-sm bg-dark navbar-dark fixed-top", classes.Navbar)} id="main-nav">
      <div class="container">
        <a href="index.html" class="navbar-brand">LoopLAB</a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#home" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#explore-head-section" class="nav-link">Explore</a>
            </li>
            <li class="nav-item">
              <a href="#create-head-section" class="nav-link">Create</a>
            </li>
            <li class="nav-item">
              <a href="#share-head-section" class="nav-link">Share</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)

export default Navbar
