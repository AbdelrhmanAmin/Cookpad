import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';

class Header extends Component {
    render() {
      return (
        <div>
            <header>
                <nav>
                    <div className='leftnav'> 
                        <img src={Logo}/>
                        <a href="#">cookpad</a>
                        <input type="text" placeholder="Ingredient,name,dish..." />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <ul>
                        <li><a href="#">Settings <i className="fa fa-cogs"></i></a></li>
                        <li><a href="#">Log in <i className="fa fa-sign-in"></i></a></li>
                        <li><a href="#">Sign up <i className="fa fa-user"></i></a></li>
                    </ul>
                </nav>
            </header>
        </div>
      );
    }
  }
  
  export default Header;