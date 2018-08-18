import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Components/Header'
import Login from '../Login'
import Main from '..//Main'

class RouterMap extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
