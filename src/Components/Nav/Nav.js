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
                    <button className='dropbutton'>Users</button>
                    <div className='dropdown-options'>
                        <a href=''>user1</a>
                        <a href=''>user2</a>
                        <a href=''>user3</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav;