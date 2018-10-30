import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';

class HeaderRecipe extends Component {
    render() {
        const {filterUpdate ,onSign, onLogin} = this.props;
      return (
            <header>
                <nav className='R-nav'>
                    <div className='leftnav'> 
                        <img src={Logo}/>
                        <a href="/"><span>cookpad</span></a>
                    </div>
                    <ul>
                        <li><a href="#">Settings <i className="fa fa-cogs"></i></a></li>                    
                    </ul>
                </nav>
            </header>
      );
    }
  }
  
  export default HeaderRecipe;