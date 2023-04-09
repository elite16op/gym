import Home from './pages/Home'
import Register from './auth/Register'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <div className="">
      <Outlet />
    </div>
  )
}

export default App
