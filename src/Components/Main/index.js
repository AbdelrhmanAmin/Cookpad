import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';
class Main extends Component {
    render() {
      return (
        <div>
            <main>
                <section className='search'>
                    <div className="big">
                        <img src={Logo} alt="Logo" className='Logo'/>
                        <h1>cookpad</h1>
                    </div>
                    <form className="searchbar">
                        <input type="text" placeholder="🔍 Ingredient,name,dish..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    <ul>
                        <li><a href="#">chicken recipes</a></li>
                        <li><a href="#">beef</a></li>
                        <li><a href="#">starch</a></li>
                        <li><a href="#">chicken macaroni</a></li>
                        <li className='border'><a href="#">tasty recipes</a></li>
                        <li><a href="#">categories</a></li>
                    </ul>
                    <button className='recipe'><i class="fa fa-edit"></i> Create Recipe</button>
                </section>
            </main>
        </div>
      );
    }
  }
  
  export default Main;