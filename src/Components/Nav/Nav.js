import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/OutGrownLogo.png'

const Nav = ({loggedUser, user}) => {
  const { pathname } = useLocation()
  const [currentUser, setUser] = useState('')

  useEffect(() => {
    if (loggedUser) {
      setUser(user.name)
    }
  }, [loggedUser])


  return (
    <section className='nav-container'>
      <Link to="/" className="logo-link"><img className="logo" src={logo}/></Link>
      <div className='nav-bar'>
        <div className='nav-grid'>
          <NavLink to='/marketplace/all/all/all' className='nav-button' isActive={() => pathname.split('/')[3] === 'all'}>MARKETPLACE</NavLink>
          <NavLink to='/marketplace/all/baby/all' className='nav-button' isActive={() => pathname.includes('baby')}>BABY</NavLink>
          <NavLink to='/marketplace/all/todler/all' className='nav-button' isActive={() => pathname.includes('todler')}>TODDLER</NavLink>
          <NavLink to='/marketplace/all/little_kid/all' className='nav-button' isActive={() => pathname.includes('little_kid')}>LITTLE KID</NavLink>
          <NavLink to='/marketplace/all/big_kid/all' className='nav-button' isActive={() => pathname.includes('big_kid')}>BIG KID</NavLink>
        </div>
        <div className='dropdown'>
          <button className='dropbutton'>{currentUser ? currentUser : "Change User"}</button>
          <div className='dropdown-options'>
            <a href='/profile/7'>Elvis Baumbach</a>
            <a href='/profile/8'>Phillis Osinski</a>
            <a href='/profile/9'>Xavier Willms DO</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav;