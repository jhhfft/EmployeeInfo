import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login'
import Main from '..//Main'

class RouterMap extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/main' component={Main} />
          <Route excat path="/" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default RouterMap
