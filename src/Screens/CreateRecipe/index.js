import React,{Component} from 'react';
import HeaderRecipe from '../../Components/HeaderRecipe';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';
import Modal from '../../Components/Modal';
import Login from '../../Components/Login';
import RecipeList from '../../Components/RecipeList';
import SingleRecipe from '../../Components/SingleRecipe';
import Comment from '../../Components/Comment';
import Creator from '../../Components/Creator';

class CreateRecipe extends Component{
    render(){
        return(
            <div>
                <HeaderRecipe />
                <Creator />
                <Footer />
            </div>
        );
    }
}
export default CreateRecipe;