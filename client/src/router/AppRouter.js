import React from 'react'
import ReviewsGridScreen from '../components/reviewsHome/ReviewsGridScreen'
import ReviewScreen from '../components/singleReview/ReviewScreen'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AddReviewScreen from '../components/modal/AddReviewScreen'
import Sidebar from '../components/sidebar/Sidebar'
import LoginScreen from '../components/auth/LoginScreen'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

const AppRouter = ({ isAuthenticated }) => {
  return (

    <Router>

      <div className='main-content'>
        <Sidebar />
        <Switch>
          <PublicRoute exact path='/login' component={LoginScreen} isAuthenticated={isAuthenticated} />
          <PrivateRoute exact path='/addreview' component={AddReviewScreen} isAuthenticated={isAuthenticated} />
          <PrivateRoute exact path='/review/:id' component={ReviewScreen} isAuthenticated={isAuthenticated} />
          <PrivateRoute exact path='/' component={ReviewsGridScreen} isAuthenticated={isAuthenticated} />
        </Switch>
      </div>

    </Router>

  )
}

export default AppRouter
