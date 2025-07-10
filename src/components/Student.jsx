import React from 'react'
class Student extends React.Component {
    constructor(props){
        super(props);
        console.log('it is a construtor')
    }
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}!!</h1>
            </div>
        )
    }
}
export default Student;