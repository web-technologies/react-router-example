import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyComponent from './MyComponent'


// The Roster component matches one of two different routes
// depending on the full pathname
const Test = () => (
  <div>
    <h1>OK</h1>
    <Switch>
      <Route path='/myComponent' component={MyComponent} />
    </Switch>
  </div> 
)


export default Test