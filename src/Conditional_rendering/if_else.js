import React, {Component} from "react";
class IfElse extends Component{
    constructor(){
    super()
        
        this.state={
            loginfo:true
            }
            // console.log(this.state.loginfo)
            
        }  
    
    // changeloginfo(){
    //     this.setState({loginfo:true})
    // }
    render(){    
            if(this.state.loginfo){
                return(
                    <div>
                        Welcome In User Mode
                    </div>
                )
            }
            else{
                return (
                    <div>
                        Welcome In Guest Mode
                    </div>
                )
            }
        
        
        }       
}   
export default IfElse
