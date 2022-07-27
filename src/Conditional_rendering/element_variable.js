import React, {Component} from "react";
class Elevar extends Component{
    constructor(){
    super()
        this.state={
            loginfo:true
            }
        }  
  
    render(){
        var msg;
            if(this.state.loginfo){
                   msg=<div>Welcome In User Mode</div>
                }
            else{
                  msg=<div>Welcome In Guest Mode</div>
            }
        return(<div>{msg}</div>)      
        }       
}   
export default Elevar
