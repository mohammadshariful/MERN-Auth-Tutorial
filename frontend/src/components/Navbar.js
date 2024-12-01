import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();


  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Link to='/'>Home</Link>
            {user?.email ? <button style={{ cursor: 'pointer' }} onClick={() => {
              logout()
            }}><span>{user?.email}</span> Log Out</button> : <><Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </>}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar