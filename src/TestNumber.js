//We want to test whether the number input by user is even or odd 
//and greater or less than 50 or not .
import React, {Component} from "react";
export class Testnum extends Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    updatenum=(event)=>{
        this.setState({
            number:event.target.value
        })
    }

    render(){
        var msg;
        // if(((this.state.number)%2)===0){
        //     if(this.state.number>=50){
        //         msg=`Number ${this.state.number} is Even and Greater than 50 !`
        //     }
        //     else{
        //         msg=`Number ${this.state.number} is Even and Less than 50 !`
        //     }
        // }
        // else{
        //     if(this.state.number>=50){
        //         msg=`Number ${this.state.number} is Odd and Greater than 50 !`
        //     }
        //     else{
        //         msg=`Number ${this.state.number} is Odd and Less than 50 !`
        //     }
        // }

        (((this.state.number)%2)===0) ? 
            (this.state.number>=50) ?
                msg=`Number ${this.state.number} is Even and Greater than 50 !`
            :   msg=`Number ${this.state.number} is Even and Less than 50 !`
            
        
        :
            (this.state.number>=50) ?
                msg=`Number ${this.state.number} is Odd and Greater than 50 !`
            :   msg=`Number ${this.state.number} is Odd and Less than 50 !`
            

        return(
        <div>
            <form onSubmit={this.submithandler}>
                <label>ENTER YOUR NUMBER : </label>
                <input type='text' 
                value={this.state.number}
                onChange={this.updatenum}/> 
            </form>
            <h1>{msg}</h1>
        </div>
        )
    }
}