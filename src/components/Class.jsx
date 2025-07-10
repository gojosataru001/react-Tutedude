import React from 'react'
class Class extends React.Component{
    render(){
        return(<>
            <div>Hello {this.props.name}</div>
            <h1>{this.props.age}</h1>
            </>
        )
    }
}
export default Class;