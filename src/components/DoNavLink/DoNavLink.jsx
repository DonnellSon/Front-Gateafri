import React from 'react'
import { NavLink } from 'react-router-dom'

const DoNavLink = ({activeClass='active',children,to='/',inactiveClass='',className=''}) => {
  return (
    <NavLink
    to={to}
    className={({ isActive }) => ((isActive ? activeClass : inactiveClass)+' '+className)}
    >{children}</NavLink>
  )
}

export default DoNavLink
