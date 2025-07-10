import React from 'react'
const HelloMessage = (props) =>{
    return(
        <div><h1>Hi name is {props.name}. my age is {props.age}.</h1>
        {props.children}
 </div>
    )

}

export default HelloMessage;