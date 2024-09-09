import React,{useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Read() {
    const [data,setData]=useState([])
    const{id} =useParams()
    useEffect(()=>{
        axios.get('http://localhost:3000/Users/'+id)
        .then(res=>setData(res.data))
    })
  return (
    <div>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-rounded'>
          <h1>Details of User</h1>
          
          <div className='mb-2'>
            <strong>Name:{data.name}</strong>
          </div>
          <Link className='btn btn-success'  to={`/update/${id}`}>Edit</Link>
          <Link to='/' className="btn btn-primary ms-3">Back</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Read
