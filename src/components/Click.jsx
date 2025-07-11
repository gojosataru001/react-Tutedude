import React from 'react'
// const Click = () => {
//     const HelloFunction = () =>{
//         alert('hello world')
//     }
//     return(
//         <div className='text-2xl font-bold '>
//            <button onClick={HelloFunction} class="m-10 bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-110">
//   Click
// </button>
//   </div>
//     )
// }

// With Class Component

// class Click extends React.Component{

//     render(){
//         const HelloFunction = (name) => {
//             alert(
//                 'hello' + name
//             )
//         }
//         return(
//             <div>
//                  <div className='text-2xl font-bold '>
//             <button onClick={() => HelloFunction("Amit")} class="m-10 bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-110">
//    Click
//  </button>

//             </div>
//             </div>
//         )
//     }
// }


// with props

// class Click extends React.Component{

//     render(){
//         const HelloFunction = (name) => {
//             alert(
//                 'hello' + name
//             )
//         }
//         return(
//             <div>
//                  <div className='text-2xl font-bold '>
//             <button onClick={() => HelloFunction(this.props.name)} class="m-10 bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-110">
//    Click
//  </button>

//             </div>
//             </div>
//         )
//     }
// }

// same things with functional components

function Click(){
    const HelloFunction = (name) =>{
        alert('Hello ' + name)
    }
    return(
        <div>
            <button onClick={()=>HelloFunction("Ajay")} class="m-10 bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-110">
                click
            </button>
        </div>
    )
}

export default Click;