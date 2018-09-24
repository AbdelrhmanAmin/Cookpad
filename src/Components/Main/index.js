import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';
class Main extends Component {
    render() {
         const { filterUpdate,filterRecipe } = this.props;
      return (
        <div>
            <main>
                <section className='search'>
                    <div className="big">
                        <img src={Logo} alt="Logo" className='Logo'/>
                        <h1>cookpad</h1>
                    </div>
                    <form className="searchbar">
                        <input type="text" placeholder="🔍 Ingredient,name,dish..." onChange={e => filterUpdate(e)}/>                    </form>
                    {/* <ul>
                        <li onClick={e => filterUpdate(e)}><a>Chicken</a></li>
                        <li onClick={e => filterUpdate(e)}><a>Rice</a></li>
                        <li onClick={e => filterUpdate(e)}><a>oat</a></li>
                        <li onClick={e => filterUpdate(e)}><a>Crock</a></li>
                        <li className='border'><a href="#">salad</a></li>
                        <li><a href="#">categories</a></li>
                    </ul> */}
                    <button className='recipe'><i class="fa fa-edit"></i> Create Recipe</button>
                </section>
            </main>
        </div>
      );
    }
  }
  
  export default Main;