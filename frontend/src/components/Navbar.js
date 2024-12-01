import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout()

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button onClick={() => {
              logout()
            }}>Log Out</button>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar