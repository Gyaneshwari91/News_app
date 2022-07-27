import React, {Component} from "react";
export class Loginpage extends Component {
    constructor(){
        super()
        this.state={
            loginfo:false
        }
    }
    loggedin=()=>{
        this.setState({
            loginfo:true
        })
    }
    loggedout=()=>{
        this.setState({
            loginfo:false
        })
    }
    render(){
        var msg;
        if(this.state.loginfo){ 
            msg='WELCOME TO USER MODE' 
        }
        else{
            msg='WELCOME TO GUEST MODE'
        }
        return(
            <div>
                <button onClick={this.loggedin}>LOGIN</button>
                <button onClick={this.loggedout}>LOGOUT</button>
                <h1>{msg}</h1>   
            </div>
        )
    }
}