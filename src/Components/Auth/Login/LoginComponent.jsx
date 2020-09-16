import React,{ Component, Fragment } from 'react';
import "./Login.style.css";
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
import firebase from "../../../firebase";

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
             username:"",
             email:"",
             password:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

handleChange(e){
     this.setState({[e.target.name]:e.target.value});
     }

async handleSubmit(e){
    let {email,password}=this.state;
    e.preventDefault();
    //firebase
    try{
        let userInfo=await firebase
        .auth()
        .signInWithEmailAndPassword(email,password);
        if(userInfo.user.emailVerified){
            this.props.history.push("/");
            let message="successfully loggedin..";
            toast.success(message);
        }
        else{
             let message=`${email} is not yet verified`
             toast.error(message);
        }
    }catch(err){
        toast.error(err.message);
    }
    this.setState=({
        username:"",
        email:"",
        password:""
    })
}



render(){
    return(
    <Fragment>
        <div className="login-box">
                        
                        <h1>Login</h1>
                        
                    
                           <form onSubmit={this.handleSubmit}>
                                

                                <p>Password</p>
                                <input type="password" 
                                name="password" 
                                placeholder=" Enter password"
                                value={this.state.password}
                                 onChange={this.handleChange}
                                />

                                <p>Email</p>
                                <input type="text"
                                 name="email" 
                                 placeholder=" Enter email" 
                                 value={this.state.email}
                                 onChange={this.handleChange}/>
                                <input type="submit" name="submit" placeholder="Login"/>
                                <a href="#">Forgot Password</a>
                                <p>Dont't have an account?</p>
                                <Link to="/signup">Create account</Link>
                                

                     </form>
            
                   </div>
    
        </Fragment>
    );
}
}



export default LoginComponent;