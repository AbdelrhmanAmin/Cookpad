import React, { Component } from 'react';
import './App.css';
import Home from './Screens/Home';
import RecipePage from './Screens/RecipePage';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/' exact render={() => {
              return (
                <Home />
              )
            }} />
            <Route path='/recipe/:id' exact render={() => {
              return (
                <RecipePage />
              )
            }} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
