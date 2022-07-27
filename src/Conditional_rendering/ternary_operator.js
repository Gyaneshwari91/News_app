import React, {Component} from "react";
class Ternop extends Component{
    constructor(){
    super()
        this.state={
            loginfo:true
            }
        }  
  
    render(){
        return(
        this.state.loginfo ? 
        <div>Welcome in User Mode</div> :
        <div>Welcome in Guest Mode</div>
        )
    }
}   
export default Ternop
