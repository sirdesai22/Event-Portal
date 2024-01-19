import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Admin from './Components/AdminDashboard'
import Funds from './Components/Funds'
import Requests from './Components/Requests'
import StudentDashboard from './Components/StudentDashboard'
import GuestDashboard from './Components/GuestDashboard'
import NewEvent from './Components/NewEvent'
import { SharedProvider } from './Helpers/SharedContext';
function App() {

  return (
    <SharedProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:user/login' element={<Login />} />
          <Route path='/dashboard/admin' element={<Admin />} />
          <Route path='/dashboard/student' element={<StudentDashboard />} />
          <Route path='/dashboard/guest' element={<GuestDashboard />} />
          <Route path='/admin/funds' element={<Funds />} />
          <Route path='/admin/requests' element={<Requests />} />
          <Route path='/event/new' element={<NewEvent />} />
        </Routes>
      </Router>
    </SharedProvider>

  )
}

export default App
