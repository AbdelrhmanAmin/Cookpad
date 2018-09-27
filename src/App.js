import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Recipes from './Components/Recipes';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import Login from './Components/Login';
import Data from './Components/Data/Recipes.json';

class App extends Component {
  state = {
    filteredRecipe: '',
    isBlured: false,
    isSign: false,
    isLogin: false,
  }
  filterUpdate = (e) => {
    const { value } = e.target;
    this.setState({
      filteredRecipe: value
    })
  }
  onSign = () => {
    this.setState({
      isBlured: !this.state.isBlured,
      isSign: !this.state.isSign,
    })
  }
  onLogin = () => {
    this.setState({
      isBlured: !this.state.isBlured,
      isLogin: !this.state.isLogin,
    })
  }
  
  render() {
    const blur = this.state.isBlured ? 'blured' : null;
    return (
      <div className="App">
        <Modal isSign={this.state.isSign} onSign={this.onSign} onLogin={this.onLogin}/>
        <Login isLogin={this.state.isLogin} onLogin={this.onLogin} onSign={this.onSign}/>
        <div className={blur}>
        <Header filterUpdate={this.filterUpdate} onSign={this.onSign} onLogin={this.onLogin}/>
        <Main filterUpdate={this.filterUpdate} />
        <Recipes Recipes={Data} filteredRecipe={this.state.filteredRecipe}/>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
