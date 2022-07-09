import React from 'react'
import medicin from '../imgs/medicin.png'
import wellness from "../imgs/navimg3.png"
import labtest from "../imgs/navimg1.png"
import beauty from "../imgs/navimg6.png"
import healthcare from "../imgs/navimg8.png"
function Header() {
  return (
   <>
   <div className="nav_marg">
      <nav class=" navbar navbar-expand-lg ">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavi" aria-controls="navbarNavi"  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse" id="navbarNavi">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Medicine</a>
            <ul class="dropdown-menu dropdownbackground" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">All Medicines</a></li>
                <li><a class="dropdown-item" href="#">Previously Ordered Products</a></li>
            </ul>
            </li>
       
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Wellness
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
            
                <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Labtest
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Beauty
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item " href="#">Personal Care</a></li>
            <li><a class="dropdown-item" href="#">Make-Up</a></li>
            <li><a class="dropdown-item" href="#">Hair</a></li>
            <li><a class="dropdown-item" href="#">Skin Care</a></li>
            <li><a class="dropdown-item" href="#">Tools & Application</a></li>
            <li><a class="dropdown-item" href="#">Mom & Baby</a></li>
            <li><a class="dropdown-item" href="#">Fragrances</a></li>
            
            
            <li><a class="dropdown-item" href="#">Men's Grooming</a></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Healthcare
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Diabetes
          </a>
        </li>
       
        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Eyewear
          </a>
        </li>

        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Ayurvedic
          </a>
        </li>

        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Homeopathy
          </a>
        </li>

        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Fitness
          </a>
        </li>

        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Surgicals
          </a>
        </li>

        <li class="nav-item currsor">
          <a class="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Treatments
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
</div>
 
</>
  )
}

export default Header