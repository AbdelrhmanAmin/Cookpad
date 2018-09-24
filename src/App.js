import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Recipes from './Components/Recipes';
import Footer from './Components/Footer';
import Data from './Components/Data/Recipes.json';

class App extends Component {
  state = {
    filteredRecipe: '',
  }
  filterUpdate = (e) => {
    const { value } = e.target;
    this.setState({
      filteredRecipe: value
    })
  }
  render() {
    return (
      <div className="App">
        <Header filterUpdate={this.filterUpdate}/>
        <Main filterUpdate={this.filterUpdate} />
        <Recipes Recipes={Data} filteredRecipe={this.state.filteredRecipe}/>
        <Footer />
      </div>
    );
  }
}

export default App;
