import react, {Component} from "react";
export class Greet extends Component{
    render(){
       return <h2>Good Morning ! {this.props.que} </h2>
    }
}


export class Message extends Component{
    constructor(){
    super()
    this.state={
        Msg:'Hello guys !'
    }
}
    changestate(){
        this.setState(
        {
           Msg:'Proceeded'
        }
        )
}
    render(){
       return(
        <div>
            <h1>{this.state.Msg}</h1>
            <button onClick={()=>this.changestate()}>Let's Proceed</button>

        </div>
       )

}

}
