import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/OutGrownLogo.png'

const Nav = (loggedUser) => {
  const { pathname } = useLocation()
  const [currentUser, setUser] = useState('Change User')

  useEffect(() => {
    console.log("Loggeduser", loggedUser)
    console.log(currentUser)
    if (loggedUser = 4) {
      setUser('User 1')
    }
    else if (loggedUser = 5) {
      setUser('User 2')
    }
    else if (loggedUser = 6) {
      setUser("User 3")
    }
  }, [currentUser])

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
          <button className='dropbutton'>{currentUser}</button>
          <div className='dropdown-options'>
              <a data-user-id='4' href='/profile/4'>User 1</a>
              <a data-user-id="5" href='/profile/5'>User 2</a>
              <a data-user-id="6" href='/profile/6'>User 3</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav;