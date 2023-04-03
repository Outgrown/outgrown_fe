import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/OutGrownLogo.png'
import Form from '../Form/Form'
import Marketplace from '../Marketplace/Marketplace'

const Nav = () => {

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
                        <a href='/profile/4'>user1</a>
                        <a href='/profile/5'>user2</a>
                        <a href='/profile/6'>user3</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav;