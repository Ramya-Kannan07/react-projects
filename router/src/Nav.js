import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <link class="nav-link active" aria-current="page" to="/">Home</link>
        </li>
        <li class="nav-item">
          <link class="nav-link" to="/About">About</link>
        </li>
        <li class="nav-item">
          <link class="nav-link" to="/Contact">Contact</link>
        </li>
        <li class="nav-item">
          <link class="nav-link " to="/Login">Login</link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav
