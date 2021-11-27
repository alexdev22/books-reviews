import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/AuthActions'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext)

  return (
    <div className='sidebar'>
      <Link to='/addreview'>
        <button>Add Review</button>
      </Link>
      <Link to='/'>
        <button>Show Books</button>
      </Link>
      <button onClick={() => dispatch(logout())}>Logout Now</button>
    </div>
  )
}

export default Sidebar
