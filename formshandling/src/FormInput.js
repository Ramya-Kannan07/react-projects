import React,{useState} from 'react';
import "./FormInput.css"         

const FormInput=(props)=> {
    const [foused,setfoused]=useState(false);
    const{label,errorMessage,onChanges,...inputprops}=props
    const handleSubmit=(e)=>{
        setfoused(true);
    }
  return (
    <>
    <label>{label}</label>

    <input
        {...inputprops}
        onChange={onChanges}
        onBlur={handleSubmit}
        foused={foused.toString()}/>
        <span>{errorMessage}</span>
    </>
  )
}

export default FormInput
