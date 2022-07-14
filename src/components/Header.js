import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Gallery Web-app</h1>
        <div className='links'>
            <NavLink to="/" className="link">
                Home
            </NavLink>
            <NavLink to="/new" className="link">
                Upload
            </NavLink>
        </div>
    </header>
  )
}

export default Header