import React, {Component} from "react";
export class Formonsubmit extends Component{
    constructor(){
        super()
        this.state={
            usernm:''
        }
    }
    updateusernm=(event)=>{
            this.setState({
                usernm: event.target.value
            })
    }
    display=()=>{
      
            alert(`Hello, ${this.state.usernm}`)
            console.log(`Hello, ${this.state.usernm}`)
        
}
    render(){
        return(
        <div>   
            <form onSubmit={this.display} >
             
                    <label>User_Name</label>
                    <input 
                    type="text"
                    value={this.state.usernm}
                    onChange={this.updateusernm}
                    />
               <button type="submit">Submit</button>
            </form>
            {/* <button onClick={this.displaynm}>Submit</button> */}
        </div> 
        )
    }

}