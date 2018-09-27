import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Recipes from './Components/Recipes';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import Data from './Components/Data/Recipes.json';

class App extends Component {
  state = {
    filteredRecipe: '',
    isBlured: false,
    isShow: false,
  }
  filterUpdate = (e) => {
    const { value } = e.target;
    this.setState({
      filteredRecipe: value
    })
  }
  onBlur = () => {
    this.setState({
      isBlured: !this.state.isBlured,
      isShow: !this.state.isShow
    })
  }
  render() {
    const blur = this.state.isBlured ? 'blured' : null;
    return (
      <div className="App">
        <Modal isShow={this.state.isShow} onBlur={this.onBlur}/>
        <div className={blur}>
        <Header filterUpdate={this.filterUpdate} onBlur={this.onBlur}/>
        <Main filterUpdate={this.filterUpdate} />
        <Recipes Recipes={Data} filteredRecipe={this.state.filteredRecipe}/>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
