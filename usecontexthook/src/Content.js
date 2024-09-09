import React from 'react';
import { createContext } from 'react';
export const context=createContext()


const Content=(props) => {
    const name="abcdef";
  return (
    <context.Provider value={name}>
{props.children}
    </context.Provider>
  )
}
export default Content
