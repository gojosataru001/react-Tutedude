import React from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends React.Component{
    ParentMethod=(childName) =>{
        alert('Hello from parent to '+ childName)
    }
    render(){
        return(
            <div>
<ChildComponent callMethod={this.ParentMethod}/>
            </div>



        )
    }
}

export default ParentComponent