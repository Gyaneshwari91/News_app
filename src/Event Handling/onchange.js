import React, {Component} from "react";
export class Formonchange extends Component{
    constructor(){
        super()
        this.state={
            usernm:'Initial_value'
        }
    }
    updateusernm=(event)=>{
            this.setState({
                usernm: event.target.value
                // usernm : 'ABC'
            })
            console.log(this.state.usernm)
    }
    display=()=>{
      
            alert(`Hello, ${this.state.usernm}`)
            console.log(`Hello, ${this.state.usernm}`)
        
}
    render(){
        return(
        <div>   
            <form >
             
                    <label>User_Name</label>
                    <input 
                    type="text"
                    value={this.state.usernm}  //Initial Value of the text box
                    onChange={this.updateusernm}
                    />
               <button onClick={this.display}>Greet</button>
            </form>
            
        </div> 
        )
    }

}