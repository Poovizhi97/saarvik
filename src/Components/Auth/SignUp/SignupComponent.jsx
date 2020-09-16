

import React,{ Component, Fragment } from 'react';

import "./Signup.style.css";
import {Link} from 'react-router-dom';
import {toast} from "react-toastify";
import firebase from "../../../firebase";
//import {Link} from "react-router-dom";

class SignupComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            email:"",
            confirmpassword:"",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleChange(e){
    this.setState({[e.target.name]:e.target.value});
}


async handleSubmit(e){

    try{
        let {email,password,username}=this.state;
        e.preventDefault();
        let userInfo=await firebase
        .auth()
        .createUserWithEmailAndPassword(email,password);
        userInfo.user.sendEmailVerification();//email verification
        let message=`A verification has been sent to ${email} please verify email address`;
        toast.success(message);
        //firebaase storage option
        await firebase
        .database()
        .ref()
        .child("/users"+userInfo.user.uid)
        .set({
            username:userInfo.user.displayName,
            email:userInfo.user.email,
            uid:userInfo.user.uid,
            registrationDate:new Date().toString(),
        });
        this.setState({
            username:"",
            password:"",
            email:"",
            confirmpassword:"",
        });
        this.props.history.push("/login");
    }catch(err){
         toast.error(err.message);
    }

}



render(){
    return(
    <Fragment>
        <div className="signup-box">
                        
                        <h1>Sign Up</h1>
                        
                    
                           <form onSubmit={this.handleSubmit}>
                                <p>Username</p>
                                <input type="text" 
                                name="username" 
                                placeholder=" Enter username"
                                required
                                value={this.state.username}
                                onChange={this.handleChange}/>

                                <p>Email</p>
                                <input type="text"
                                 name="email" 
                                 placeholder=" Enter email"
                                 required
                                 value={this.state.email}
                                 onChange={this.handleChange}
                                 />

                                <p>Password</p>
                                <input type="password"
                                 name="password" 
                                 placeholder=" Enter password"
                                 required
                                 value={this.state.password}
                                 onChange={this.handleChange}
                                 />

                                <p>Confirm Password</p>
                                <input type="password" 
                                name="confirmpassword" 
                                placeholder=" Enter confirmpassword"
                                required
                                value={this.state.confirmpassword}
                                onChange={this.handleChange}
                                />
                                <input type="submit" name="submit" placeholder="Login"/>
                                  
                                  
                                <Link to="/login">Already have an account?</Link>
                                

                     </form>
            
                   </div>
    
        </Fragment>
    )
}
}



export default SignupComponent;