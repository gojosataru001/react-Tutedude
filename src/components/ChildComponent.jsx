import React from 'react'
class ChildComponent extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.callMethod("Ajay")}>
                    Click
                </button>
            </div>
        )
    }
}
export default ChildComponent
