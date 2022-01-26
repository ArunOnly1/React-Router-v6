import React from 'react'
import { HeaderWrapper, NavLinkWrapper } from './HeaderWrapper'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLinkWrapper to='/dashboard'>Dashboard</NavLinkWrapper>
      <NavLinkWrapper to='/product'>Products</NavLinkWrapper>
    </HeaderWrapper>
  )
}

export default Header
