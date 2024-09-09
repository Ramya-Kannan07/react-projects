import React, {useContext} from 'react'
import { context } from './Content';



const File=()=> {
    const names=useContext(context)
  return (
    <h1>names:: {names}</h1>
  )
}

export default File
