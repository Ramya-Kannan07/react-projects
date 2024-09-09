import React from 'react'

function Destructung() {
    const Employee={
        firstname:'abc',
        lastname:"a"
    }
  return (
    <>
    
     <h1>destructing</h1>
     {Employee.firstname} {Employee.lastname}
 
    
    </>
  )
}

export default Destructung
