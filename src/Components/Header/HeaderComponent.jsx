import React from "react";
import "./Header.style.css";
//import image from "../../image/undraw_cabin_hkfr.svg";
//import {FonAwesomeIcons} from "@fortawesome/react-fontawesome";

const HeaderComponent=()=>{
    return(
        
        <nav class="navbar navbar-expand-lg navbar-light bg-secoundry">
         {/* <img className="logo" src={image} ></img>*/}
  <a class="navbar-brand" href="#">Saarvik</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="/login">Login</a>
      <a class="nav-link" href="/signup">Sign Up</a>
      
    </div>
  </div>
</nav>
      
    );  
};

export default HeaderComponent;