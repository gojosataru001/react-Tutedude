import React from 'react'
class Employee extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Rohan'
        }
    }
    changeName(){
        this.setState({
            name:'Rahul'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeName( )}>Click</button>
            </div>
        )
    }
}
export default Employee;