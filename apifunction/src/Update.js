import React,{useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Update() {
    //const [data,setData]=useState([])
    const{id}=useParams()
    const[value,setValues]=useState({
       name:'' 
    })
    const Navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/Users/'+id)
        .then(res=>setValues(res.data))
    })
const handleUpdate=(event)=>{
   event.preventDefault();
   axios.put('http://localhost:3000/Users/'+id,value)
   .then(res=>{
    console.log(res)
    Navigate('/')
   })
}
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <input type='text' name='name' className='form-control' placeholder='enter a name'
           value={value.name} onChange={e=>setValues({...value,name:e.target.value})}></input>
          </div>
          <buttton className='btn btn-success'>Submit</buttton>
          <Link to='/' className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  )
}
export default Update