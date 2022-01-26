import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const DashboardWrapper = styled.div`
  h2 {
    text-align: center;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  //   justify-content: space-around;
  aside {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  margin-top: 1rem;
`
