import React from 'react';
import { NavItem } from './NavItem';


export const NavBar = () => {
  return (
    <nav>
        <ul>
            <NavItem to = '/profile' label = 'Profile' />
            <NavItem to = '/' label = 'Home' />
          </ul>
    </nav>
  )
}
