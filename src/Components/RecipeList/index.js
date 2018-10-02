import React, { Component } from 'react';
import './Style.css';
import Recipes from '../../Components/Data/Recipes.json';

class RecipeList extends Component {
    render(){
            const {filteredRecipe} = this.props;
            const recipe = Recipes
            .filter(recipe => {
                return recipe.name.toLowerCase().indexOf(filteredRecipe.toLowerCase()) >= 0 
            })
            .map(recipe => 
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
                        <img src={recipe.chefURL} />
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

            )
        return(
            <div className='container'>
                <div className="flex">
                {recipe}
                </div>
            </div>
        )
    }
}
export default RecipeList;