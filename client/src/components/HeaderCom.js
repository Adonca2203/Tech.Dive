import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const HeaderCom = () => {
 
    return (
         <div className="row">
            <nav>
                <ul className='navbar navbar-dark bg-dark nav'>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt='#' className='icon' /></li>
                    <li><NavLink style={{ color: 'white' }} to='/exams' >Exams</NavLink></li>
                    <li> <NavLink style={{ color: 'white' }} to='/admin' >Admin</NavLink></li>
                </ul>
            </nav>
          
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default HeaderCom
