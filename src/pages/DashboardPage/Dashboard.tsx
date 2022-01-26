import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Statistics from '../../components/Statistics/Statistics'
import {
  ContentWrapper,
  DashboardWrapper,
  LinkWrapper,
} from './DashboardWrapper'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h2>Your dashboard is here</h2>
      <ContentWrapper>
        <aside>
          <LinkWrapper to='statistics'>Statistics</LinkWrapper>
          <LinkWrapper to='user-data'>User</LinkWrapper>
        </aside>
        <Outlet />
      </ContentWrapper>
    </DashboardWrapper>
  )
}

export default Dashboard
