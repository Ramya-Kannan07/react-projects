import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


function Create() {
    const[value,setValues]=useState({
        name:''
    })

    const Navigate=useNavigate();
const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post('http://localhost:3000/Users',value)
      .then(res=>{
        console.log(res)
        Navigate('/')
      }) 
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <input type='text' name='name' className='form-control' placeholder='enter a name'
            onChange={e=>setValues({...value,name:e.target.value})}></input>
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
