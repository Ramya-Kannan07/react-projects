import React,{useContext} from 'react'
import {Appcontext} from './Appcontext'

const Footer=()=> {
    const phone=useContext(Appcontext);
  return (
    <div>
      <h2>Footer</h2>
      <h3>phone:{phone}</h3>
    </div>
  )
}

export default Footer
