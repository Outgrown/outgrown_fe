import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'


const Nav = () => {

    // const elements = [
    //     <p key="marketplace">MARKETPLACE</p>,
    //     <p key="baby">Baby (0 - 2)</p>,
    //     <p key="toddler">Toddler (2 - 4)</p>,
    //     <p key="little_kid">Little Kid (5 - 7)</p>,
    //     <p key="big_kid">Big Kid (8+)</p>
    // ]

    // const wrapElements = elements.map((element) => {
    //     <NavLink to={`/marketplace/${element}`} className='marketplace-button'>
    //         {element}
    //     </NavLink>
    // })

    return (
        <section className='nav-container'>
            <h1>Outgrown</h1>
            <div className='nav-bar'>
                <div className='nav-grid'>
                    <NavLink to='/marketplace' className='marketplace-button'>
                        <p>MARKETPLACE</p>
                    </NavLink>
                    <NavLink to='/marketplace/baby' className='baby-nav-button'>
                        <p>Baby (0 - 2)</p>
                    </NavLink>
                    <NavLink to='/marketplace/toddler' className='toddler-nav-button'>
                        <p>Toddler (2 - 4)</p>
                    </NavLink>
                    <NavLink to='/marketplace/little_kid' className='Little-kid-nav-button'>
                        <p>Little Kid (5 - 7)</p>
                    </NavLink>
                    <NavLink to='/marketplace/big_kid' className='big-kid-nav-button'>
                        <p>Big Kid (8+)</p>
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