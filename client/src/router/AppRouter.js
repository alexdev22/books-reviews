import React from 'react'
import ReviewsGridScreen from '../components/reviewsHome/ReviewsGridScreen'
import ReviewScreen from '../components/singleReview/ReviewScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddReviewScreen from '../components/modal/AddReviewScreen'
import Sidebar from '../components/sidebar/Sidebar'

const AppRouter = () => {
  return (
    <Router>
      <div className='main-content'>
        <Sidebar />
        <Switch>

          <Route exact path='/addreview' component={AddReviewScreen} />
          <Route exact path='/review/:id' component={ReviewScreen} />
          <Route path='/' component={ReviewsGridScreen} />
        </Switch>
      </div>
    </Router>

  )
}

export default AppRouter
