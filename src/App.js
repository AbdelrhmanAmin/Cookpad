import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
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
      isBlured: true,
      isSign: !this.state.isSign,
      isLogin:false,
    })
  }
  onLogin = () => {
    this.setState({
      isBlured: true,
      isLogin: !this.state.isLogin,
      isSign: false,
    })
  }
  onCancel = () => {
    this.setState({
      isBlured: false,
      isLogin: false,
      isSign:false,
    })
  }
  
  render() {
    const blur = this.state.isBlured ? 'blured' : null;
    return (
      <Router>
          <div className="App">
            <Prompt when={this.state.isLogin,this.state.isS}
            message='Do you want to login ?' />
          <Modal isSign={this.state.isSign} onSign={this.onSign} onLogin={this.onLogin} onCancel={this.onCancel}/>
          <Login isLogin={this.state.isLogin} onLogin={this.onLogin} onSign={this.onSign} onCancel={this.onCancel}/>
          <div className={blur}>
          <Header filterUpdate={this.filterUpdate} onSign={this.onSign} onLogin={this.onLogin}/>
          <Main filterUpdate={this.filterUpdate} />
          <Recipes Recipes={Data} filteredRecipe={this.state.filteredRecipe}/>
          <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
