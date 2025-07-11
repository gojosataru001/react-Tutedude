import React from 'react'
 class EventBind extends React.Component{
    constructor(){
        super();

        // this.HelloEvent=this.HelloEvent.bind(this) commented this statement because put this statement directly in button onClick={this.HelloEvent.bind(this)} 
        this.state={
            name:"Amit"
        }
    }
    HelloEvent =() =>{
        this.setState({
            name:"Rohan"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.HelloEvent}>Click</button>
            </div>
        )
    }
 }

export default EventBind