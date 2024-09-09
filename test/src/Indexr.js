import React from 'react';
const Employees=(props)=>{
    const employee={
        firstname:'abcd',
        lastname:'ab',
        email:'abc@gmail.com'
    }
   // const{firstname,lastname,email}=employee//destructing
    const {firstname,lastname}=props
    return(
        //destructing
<>
//destructing
    <><div>
        <h1>Destructing</h1>
        {employee.firstname},{employee.lastname},{employee.email}
        <br></br>
    </div>

   </> <div>
        <h1>props</h1>
        hii{firstname} {lastname}
    </div></>
    )

}