import React, { useContext } from 'react'
import ReviewsGridScreen from '../components/reviewsHome/ReviewsGridScreen'
import ReviewScreen from '../components/singleReview/ReviewScreen'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AddReviewScreen from '../components/addReview/AddReviewScreen'
import Sidebar from '../components/sidebar/Sidebar'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
import { AuthContext } from '../context/AuthContext'

const AppRouter = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <main>
        <div className='main-content'>
          <Sidebar />
          <Switch>
            <Route exact path='/login'>
              {user ? <Redirect to='/' /> : <LoginScreen />}
            </Route>
            <Route exact path='/register' component={RegisterScreen} />

            {user && (
              <>
                <Route exact path='/addreview' component={AddReviewScreen} />
                <Route exact path='/review/:id' component={ReviewScreen} />
                <Route exact path='/' component={ReviewsGridScreen} />
              </>
            )}

          </Switch>
        </div>
      </main>
    </Router>

  )
}

export default AppRouter
