import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link,useNavigate} from "react-router-dom";

function Home(){
    const[data,setData]=useState([])
    useEffect(()=>{
axios.get('http://localhost:3000/Users')
.then(res=>setData(res.data))
    },[])
const Navigate=useNavigate()
const handleDelete=(id)=>{
    const confirm=window.confirm("need to delete")
    if(confirm){
        axios.delete('http://localhost:3000/Users/'+id)
        .then(res=>{
window.location.reload()
        })
    }
}
return( 
    <>
   <div className="d-flex flex-column justify-content-center bg-light">
    <h1>List of Users</h1>
    <table className="table table-stiped w-75 bg-white border shadow p-4">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>Action</th>
                <div className="d-flex flex-column justify-content-end">
                    <Link to="/create" className='btn btn-success'>Add+</Link>
                </div>
            </tr>
        </thead>
        <tbody>
            {
               data.map ((d,i)=>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>
                       <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                       <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">update</Link>
                       <button onClick={e=>handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
               ))
            }
        </tbody>
    </table>
   </div>
    </>
)
}
export default Home