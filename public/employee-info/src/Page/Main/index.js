import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddEmployee from './Container/AddEmployee';
import DetailEmployee from './Container/DetailEmployee';
import ModifyEmployee from './Container/ModifyEmployee';
import QueryEmployee from './Container/QueryEmployee';

class Main extends React.Component{
    render(){
      return (
        <div>
          <h1>This is Main</h1>
          <Switch>
            <Route path="/main/add" component={AddEmployee}></Route>
            <Route path="/main/detail" component={DetailEmployee}></Route>
            <Route path="/main/modify" component={ModifyEmployee}></Route>
            <Route path="/main/query" component={QueryEmployee}></Route>
          </Switch>
        </div>
      )
    }
}

export default Main