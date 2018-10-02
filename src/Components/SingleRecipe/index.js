import React, { Component } from 'react';
// import './Style.css';
import Recipes from '../../Components/Data/Recipes.json';

class SingleRecipe extends Component{
    render(){
        const single = Recipes
        .map(recipe => 
            <div>
                <div className="bigImg">
                    {
                        recipe.map(x =>
                            <img src={x.imageURL} alt="#"/>
                        )
                    }
                </div>
            </div>
        )
        return(
            <div>
                {single}
            </div>
        )
    }
}
export default SingleRecipe;