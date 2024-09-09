import logo from './logo.svg';
import './App.css';
import  {useState} from 'react';
import FormInput from './FormInput';
import "./FormInput.css"

const App= ()=>{
   const[values,setvalues]=useState({
    username:"",
    email:"",
    password:"",
    Confirmpassword:""
  })
  const inputs=[
    {
      id:1,
      label:"username",
      type:"text",
      errorMessage:"username should be valid",
      placeholder:"enter a username",
      required:true
 },
 {
  id:2,
      label:"email",
      type:"email",
      errorMessage:"email should be valid",
      placeholder:"enter a email",
      required:true
 },
 {
  id:3,
      label:"password",
      type:"password",
      errorMessage:"password should be valid",
      placeholder:"enter a password",
      required:true,
      pattern:"/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.*).{8,16}$/"
 },
 {
  id:4,
      label:"Confirm password",
      type:"password",
      errorMessage:" Confirm password should be valid",
      placeholder:"enter a password",
      required:true,
      pattern:values.password
 }
  ];

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const onChanges=(e)=>{
    setvalues({...values,[e.target.name]:e.target.values})
  }
return(
  <>
  <div class='App'>
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input)=>(
<FormInput
key={input.id}
{...input}
values={values[input.name]}
onChange={onChanges}/>
      ))}
      <button>Submit</button>
    </form>
  </div>
  </>
)

}
export default App;
