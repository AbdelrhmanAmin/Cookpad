import React, {Component} from 'react';
import './style.css';
import HeaderRecipe from '../../Components/HeaderRecipe';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';
import Modal from '../../Components/Modal';
import Login from '../../Components/Login';
import RecipeList from '../../Components/RecipeList';
import SingleRecipe from '../../Components/SingleRecipe';
import Comment from '../../Components/Comment';

class RecipePage extends Component{
    render() {
        return(
            <div>
                <HeaderRecipe />
                <SingleRecipe />
                <Comment />
                <Footer />
            </div>
        );
    }
}
export default RecipePage;