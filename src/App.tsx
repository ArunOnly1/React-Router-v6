import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Statistics from './components/Statistics/Statistics'
import User from './components/User/User'
import Dashboard from './pages/DashboardPage/Dashboard'
import Homepage from './pages/Homepage/Homepage'
import ProductPage from './pages/ProductPage/ProductPage'

const App: React.FC = () => {
  const isLoggedInUser = true
  return (
    <Router>
      {isLoggedInUser && <Header />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard/*' element={<Dashboard />}>
          <Route path='user-data' element={<User />} />
          <Route path='statistics' element={<Statistics />} />
        </Route>
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App
