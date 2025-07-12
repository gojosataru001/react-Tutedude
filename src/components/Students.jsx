import React from 'react'
const Students = () => {
    const names = ['Ajay','Anil','Harsh','Diva']
    let Stdnames=names.map((std, index)=><li key={index}>{std}</li>)
    // const studentsInfo=[
    //     {
    //         name:"Ajay",
    //         age:23,
    //         semester:1
    //     },
    //         {
    //         name:"Harsh",
    //         age:24,
    //         semester:2
    //     },
    //         {
    //         name:"Divya",
    //         age:20,
    //         semester:3
    //     },
    // ]
    
    return(
        <div>
            {/* {studentsInfo.map(std=><h1>My name is {std.name}, My age is {std.age}, I study in semester{std.semester}</h1>)} */}
        {<ul>{Stdnames}</ul>}
        </div>
    )
}
export default Students;