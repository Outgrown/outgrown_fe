import React from 'react'
import './Nav.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/OutGrownLogo.png'

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <section className='nav-container'>
      <Link to="/" className="logo-link"><img className="logo" src={logo}/></Link>
      <div className='nav-bar'>
        <div className='nav-grid'>
          <NavLink to='/marketplace/all/all/all' className='nav-button' data-cy='all-nav' isActive={() => pathname.split('/')[3] === 'all'}>MARKETPLACE</NavLink>
          <NavLink to='/marketplace/all/baby/all' className='nav-button' data-cy='baby-nav' isActive={() => pathname.includes('baby')}>BABY</NavLink>
          <NavLink to='/marketplace/all/toddler/all' className='nav-button' data-cy='toddler-nav' isActive={() => pathname.includes('todler')}>TODDLER</NavLink>
          <NavLink to='/marketplace/all/little_kid/all' className='nav-button' data-cy='little-nav' isActive={() => pathname.includes('little_kid')}>LITTLE KID</NavLink>
          <NavLink to='/marketplace/all/big_kid/all' className='nav-button' data-cy='big-nav' isActive={() => pathname.includes('big_kid')}>BIG KID</NavLink>
        </div>
        <div className='dropdown'>
          <button className='dropbutton'>CHANGE USER</button>
          <div className='dropdown-options'>
            <a href='/profile/4'>User 1</a>
            <a href='/profile/5'>User 2</a>
            <a href='/profile/6'>User 3</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav;