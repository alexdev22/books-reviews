import React from 'react'
import ReviewsGridScreen from '../components/reviewsHome/ReviewsGridScreen'
import ReviewScreen from '../components/singleReview/ReviewScreen'
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AppRouter = () => {
      

     return(
          <Router>
            <div>
                <Switch>
                    <Route exact path="/review/:id" component={ReviewScreen}/>      
                     <Route path="/" component={ReviewsGridScreen}/>
                </Switch>
            </div>
        </Router>
    
     ) 

    
}

export default AppRouter
