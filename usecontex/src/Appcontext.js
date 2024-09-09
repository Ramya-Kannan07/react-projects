import React ,{createContext} from 'react'

export const Appcontext= createContext();
const ContextProvider=(props)=> {
  const phn="1234567890"  
  return (
    <Appcontext.Provider value={phn}>
        {props.children}
    </Appcontext.Provider>
  )
}

export default ContextProvider

