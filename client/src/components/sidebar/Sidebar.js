import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addreview'>
        <button>Add Review</button>
      </Link>
      <Link to='/'>
        <button>Show Books</button>
      </Link>
    </div>
  )
}

export default Sidebar
