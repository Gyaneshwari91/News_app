import React, { Component } from "react";
export class Onclickevent extends Component{
    display()
    {
        console.log('Hello Everyone !')
        alert('Hi Guys :) ')
    }
    render()
    { 
        return(
            <div>
                <button onClick={this.display}>Click</button> 
                {/* ()for function */}
            </div>
        )
    }
}