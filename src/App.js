import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Recipes from './Components/Recipes';
import Data from './Components/Data/Recipes.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Recipes Recipes={Data}/>
      </div>
    );
  }
}

export default App;
