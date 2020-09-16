import React,{Component,Fragment} from "react";
//import "./components/FontAwesomeIcons/icons";
import HeaderComponent from "./Components/Header/HeaderComponent";
import HomeComponent from "./Components/Home/HomeComponent";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoginComponent from "./Components/Auth/Login/LoginComponent"
import SignupComponent from "./Components/Auth/SignUp/SignupComponent";
import {ToastContainer} from "react-toastify";
import firebase from "./firebase";



class App extends Component {
    constructor(props){
        super(props);
        this.state={
              userInfo:"",
        };
    }
 
    //call firebase api

    async componentDidMount(){
        await firebase
        .auth()
        .onAuthStateChanged((user)=>{
            console.log(user);
            if(user){
                this.setState({userInfo:user});
                this.props.history.push('/');
            }else{
                this.setState({userInfo:""});
                this.props.history.push("/login")
            }
        });

    }




    render(){
        return(
            <Fragment>
               <Router>
               <header>
                       <HeaderComponent user={this.state.userInfo}/>
                    </header>
                    <ToastContainer/>
               <main className="container">
                     <Switch>
                        <Route path="/" exact component={HomeComponent}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <Route path="/signup" exact component={SignupComponent}/>
                      </Switch>
                      </main>
                    </Router>
                    </Fragment>
                  
        );
    }
}

export default App;