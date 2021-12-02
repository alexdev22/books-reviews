import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/AuthActions'
import { AuthContext } from '../../context/AuthContext'
import { BiLogOut, BiShow } from 'react-icons/bi'
import { AiFillFileAdd } from 'react-icons/ai'
const Sidebar = () => {
  const { dispatch, user } = useContext(AuthContext)

  return (

    <aside className='sidebar'>
      <div className='logoutContainer'>
        {user && (
          <>
            <button className='logoutBtn' onClick={() => dispatch(logout())}><BiLogOut className='logoutIcon' /> </button>
            <div className='loggedUser'>{user.username || ''}</div>
          </>
        )}

      </div>
      <nav className='sidebarMenu'>
        <Link to='/addreview'>
          <button className=' sidebarBtn'><AiFillFileAdd className='sidebar-icons' /></button>
        </Link>
        <Link to='/'>
          <button className=' sidebarBtn'><BiShow className='sidebar-icons' /></button>
        </Link>
      </nav>

    </aside>
  )
}

export default Sidebar
