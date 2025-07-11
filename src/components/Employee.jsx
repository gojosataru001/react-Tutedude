import React from 'react'
class Employee extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name: this.props.name
    //     }
    // }

    state={
        name:'rohan',
        age:42,
        fav_color:"blue"

    }
    changeName(){
        this.setState({
            name:'balbasour',
            age:45,
            fav_color:'green'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.fav_color}</h1>
                <button onClick={() => this.changeName( )}>Click</button>
            </div>
        )
    }
}
export default Employee;