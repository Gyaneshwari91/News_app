import React, {Component} from "react";
class Shortcirop extends Component{
    constructor(){
    super()
        this.state={
            loginfo:true
            }
        }  
  
    render(){
        return this.state.loginfo && <div>LOGGED IN SUCCESFULLY !!</div> 
    }
}   
export default Shortcirop