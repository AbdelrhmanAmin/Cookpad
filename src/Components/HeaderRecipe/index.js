import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';

class HeaderRecipe extends Component {
    render() {
        const {filterUpdate ,onSign, onLogin} = this.props;
      return (
            <header>
                <nav>
                    <div className='leftnav'> 
                        <img src={Logo}/>
                        <a href="#">cookpad</a>
                        <input type="text" placeholder="Ingredient,name,dish..." onChange={filterUpdate}/>
                    </div>
                    <ul>
                        <li><a href="#">Settings <i className="fa fa-cogs"></i></a></li>
                        <li><a href="#" onClick={onLogin}>Log in <i className="fa fa-sign-in"></i></a></li>
                        <li><a href="#" onClick={onSign}>Sign up <i className="fa fa-user"></i></a></li>
                    </ul>
                </nav>
            </header>
      );
    }
  }
  
  export default HeaderRecipe;