import React from 'react'
import './Nav.css'


const Nav = () => {

    return (
        <section className='nav-container'>
            <h1>Outgrown</h1>
            <div className='nav-bar'>
                <div className='nav-grid'>
                    <p>MARKETPLACE</p>
                    <p>BABY</p>
                    <p>GIRL</p>
                    <p>BOY</p>
                </div>
                <div className='dropdown'>
                    <button>Users</button>
                </div>
            </div>
        </section>
    )
}

export default Nav;