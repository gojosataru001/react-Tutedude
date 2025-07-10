import React from 'react'
let name = 'Rohan'
const car_object={
    name:'Ferrari',colour:'red'
};

let a = 10;
let msg="";
if(a>5){
    msg='hello';
} else{
    msg='bye'
}
function Hello(){
    return (
        <div>
            <h1>Hello guys</h1>
            <h1>{name}</h1>
            <h1>{car_object.name}</h1>
            <h1>{car_object.colour}</h1>
            <h1>{msg}</h1>

        </div>
    )
}

export default Hello;



