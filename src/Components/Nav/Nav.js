import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Form from '../Form/Form'
import Marketplace from '../Marketplace/Marketplace'

const Nav = () => {

    // const elements = [
    //     <p key="1" value="marketplace">MARKETPLACE</p>,
    //     <p key="2" value="baby">Baby (0 - 2)</p>,
    //     <p key="3" value="toddler">Toddler (2 - 4)</p>,
    //     <p key="4" value="little_kid">Little Kid (5 - 7)</p>,
    //     <p key ="5" value="big_kid">Big Kid (8+)</p>
    // ]

    // const wrapElements = elements.map((element, index) => {
    //     <NavLink key={index} to={`/marketplace/${element}`} className='marketplace-button'>
    //         {element}
    //     </NavLink>
    // })

    return (
        <section className='nav-container'>
            <h1>Outgrown</h1>
            <div className='nav-bar'>
                <div className='nav-grid'>
                    <NavLink to='/marketplace' className='marketplace-button'>
                        <p value="marketplace">MARKETPLACE</p>
                    </NavLink>
                    <NavLink to='/marketplace/baby' className='baby-nav-button'>
                        <p value="baby">Baby (0 - 2)</p>
                    </NavLink>
                    <NavLink to='/marketplace/todler' className='toddler-nav-button'>
                        <p value="toddler">Toddler (2 - 4)</p>
                    </NavLink>
                    <NavLink to='/marketplace/little_kid' className='Little-kid-nav-button'>
                        <p value="little_kid">Little Kid (5 - 7)</p>
                    </NavLink>
                    <NavLink to='/marketplace/big_kid' className='big-kid-nav-button'>
                        <p value="big_kid">Big Kid (8+)</p>
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