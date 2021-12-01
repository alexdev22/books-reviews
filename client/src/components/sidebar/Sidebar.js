import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/AuthActions'
import { AuthContext } from '../../context/AuthContext'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {
  const { dispatch, user } = useContext(AuthContext)

  return (

    <div className='sidebar'>
      <div className='logoutContainer'>
        {user && (
          <>
            <button className='logoutBtn' onClick={() => dispatch(logout())}><BiLogOut className='logoutIcon' /> </button>
            <div className='loggedUser'>{user.username || ''}</div>
          </>
        )}

      </div>
      <div className='sidebarMenu'>
        <Link to='/addreview'>
          <button className='addReviewBtn sidebarBtn'>Add Review</button>
        </Link>
        <Link to='/'>
          <button className='showBooksBtn sidebarBtn'>Show Books</button>
        </Link>
      </div>

    </div>
  )
}

export default Sidebar
