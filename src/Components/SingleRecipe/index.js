import React, { Component } from 'react';
import './Style.css';
import Recipes from '../../Components/Data/Recipes.json';

class SingleRecipe extends Component{
    render(){
        const single = Recipes[1].imageURL
        return(
            <div className='container-recipe'>
                <img src={single} className='recipeURL'/>
                <h1>{Recipes[1].name}</h1>
                    <div className='chef-recipe'>
                        <img src={Recipes[1].chefURL} alt="#"/>
                        <p>{Recipes[1].chef}</p>
                    </div>
                <h3>Ingredients:</h3>
                   {Recipes[1].ingredients.map(x =>
                    <ul>
                        <li>Name:{x.name} /
                        Quantity:{x.quantity}/
                        Type:{x.type}</li>
                    </ul>
                   )}
                   <h3>Steps:</h3>
                   <p>{Recipes[1].steps}</p>
            </div>
        )
    }
}
export default SingleRecipe;