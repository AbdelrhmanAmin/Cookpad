import React, { Component } from 'react';
import './Style.css';

class Recipes extends Component {
    render(){
        return(
            <div className='container'>
                <div className="flex">
                {
                    this.props.Recipes.map(recipe => 
                        <div className="flexitem">
                        <div className="chef-name">
                            <a href="#"><img src={recipe.chefURL} />{recipe.chef}</a>
                            <span className='cooked'>cooked</span>
                        </div>
                        <div className="Recipe">
                                <a href="#">
                                <img src={recipe.imageURL} className='recipe-img'/>
                                    <div className="recipe-name">
                                        <h2>{recipe.name}</h2>
                                    </div>
                                </a>
                            <div className="description">
                                <div className="media">
                                <img src="https://via.placeholder.com/25x25" />
                                    <strong>{recipe.chef}</strong>
                                    <p>{recipe.steps}</p>
                                </div>
                                <ul className='btns'>
                                    <li><a href="#">Like</a></li>
                                    <li><a href="#">Reply</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                )}
                </div>
            </div>
        )
    }
}
export default Recipes;