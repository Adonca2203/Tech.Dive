import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const HeaderCom = () => {
 
    return (
        <div >
            <nav className="navbar navbar-dark bg-dark " >
                <ul className='navbar navbar-dark bg-dark nav'>
                    <li><img src="https://reactjs.org/logo-og.png" alt='#' className='icon'/></li>
                    <li className='navl'><NavLink style={{ color: 'white' }} to='/exams' >Exams</NavLink></li>
                    <li className='navl'> <NavLink style={{ color: 'white' }} to='/admin' >Admin</NavLink></li>
                </ul>
            </nav>
          
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default HeaderCom
