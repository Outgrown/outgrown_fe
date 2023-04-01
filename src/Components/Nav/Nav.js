import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'


const Nav = () => {

    return (
        <section className='nav-container'>
            <h1>Outgrown</h1>
            <div className='nav-bar'>
                <div className='nav-grid'>
                    <NavLink to='/marketplace' className='marketplace-button'>
                        <p>MARKETPLACE</p>
                    </NavLink>
                    <NavLink to='/marketplace/baby' className='baby-nav-button'>
                        <p>BABY</p>
                    </NavLink>
                    <NavLink to='/marketplace/girl' className='girl-nav-button'>
                        <p>GIRL</p>
                    </NavLink>
                    <NavLink to='/marketplace/boy' className='boy-nav-button'>
                        <p>BOY</p>
                    </NavLink>
                </div>
                <div className='dropdown'>
                    <button className='dropbutton'>Users</button>
                    <div className='dropdown-options'>
                        <a href='/profile/user1'>user1</a>
                        <a href='/profile/user2'>user2</a>
                        <a href='/profile/user3'>user3</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav;