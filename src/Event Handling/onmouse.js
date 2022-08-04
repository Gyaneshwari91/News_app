import React, {Component} from "react";
export class Onmouse extends Component{
    constructor(){
        super()
        this.state={
            enter:false
        }
    }
    enter=()=>{
    this.setState({
            enter:true
        });
    }
    out=()=>{
        this.setState(
            {
                enter:false
            }
        );
    }
    render()
    {
        return(
            
            <div>
                <button onMouseEnter={this.enter} onMouseLeave={this.out} >
                    Hover 
                </button>
             {this.state.enter && <div>I'll appear when you hover over me !</div>}
                   
            </div>
        )

    }
}