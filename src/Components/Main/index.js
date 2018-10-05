import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';
class Main extends Component {
    render() {
         const { filterUpdate } = this.props;
      return (
        <div>
            <main>
                <section className='search'>
                    <div className="big">
                        <img src={Logo} alt="Logo" className='Logo'/>
                        <h1>cookpad</h1>
                    </div>
                    <form className="searchbar">
                        <input type="text" placeholder="🔍 Ingredient,name,dish..." onChange={e => filterUpdate(e)}/>                    
                    </form>
                    <button className='recipe'><i class="fa fa-edit"></i> Create Recipe</button>
                </section>
            </main>
        </div>
      );
    }
  }
  
  export default Main;