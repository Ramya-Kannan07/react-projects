import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Layout=() => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="home">Home</Link>
            </li>
            <li>
                <Link to="Blog">Blog</Link>
            </li>
            <li>
                <Link to="Contact">Contact</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout
