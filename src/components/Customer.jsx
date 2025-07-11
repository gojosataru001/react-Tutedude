import React from 'react'
// class Customer extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:'Ajay',
//             age:24,
//         }

//     }
//     render(){
//         const{name,age}=this.state
//         return(
//             <div className='text-2xl font-extrabold'>
//             <h1>{name}</h1>
//             <h1>{age}</h1>

//             </div>
//         )

//     }
// }

// first method


// const Customer = (props)=>{
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//         </div>
//     )

// }

// Second method(1st with destructuring)

// const Customer = ({name,age})=>{
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h1>{age}</h1>
//         </div>
//     )

// }

// third method(2nd with destructing)

const Customer = (props)=>{
    const {name,age} = props
    return (
        <div className='text-2xl font-extrabold'>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )

}

export default Customer;