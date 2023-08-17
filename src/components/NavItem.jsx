import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export const NavItem = ({to, label}) => {

    const location = useLocation();
    const isActive = location.pathname === to;

  return (
    <li>
        <Link className = {isActive ? 'activeNavItem' : 'inactiveNavItem'} to={to}>{label}</Link>
    </li>
  )
}
