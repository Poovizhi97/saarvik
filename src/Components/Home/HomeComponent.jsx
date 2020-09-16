import React from "react";
import "./Home.style.css";
import image from "../../image/remotely.svg";
//import GoogleButton from 'react-google-button'
const HomeComponent=()=>{
   return( 
       
    //    <div className="wrapper"> 
    //          <h1>Discover your  footprint!</h1>
             
    //          <section className="Block">
    <div className="body">
    <img className="img" alt="img" src={image} ></img>
    <div className="text-block" >
    <h5 className="light-text" >Start tracing with saarvik technologies</h5>
    <h1 className="bold" >Discover your <br/>
                   footprint!</h1>
    <p className="inner-text">
                let's begin your career with saarvik Technologies   <br/>
                
                   </p>
                 {/* <GoogleButton
  onClick={() => { alert("Hi") }}
/>*/}
{/* <p className="light-text" >By signing in with your email account, you agree to our Privacy Policy & Terms of Service</p> */}
    </div>

    </div>
                
            
   );
};

export default HomeComponent;