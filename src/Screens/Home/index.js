import React,{Component} from 'react';
import HeaderRecipe from '../../Components/HeaderRecipe';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';
import Modal from '../../Components/Modal';
import Login from '../../Components/Login';
import RecipeList from '../../Components/RecipeList';
import './Style.css';

class Home extends Component {
  state = {
    filteredRecipe: '',
    isBlured: false,
    isSign: false,
    isLogin: false,
  }
  filterUpdate = (e) => {
    const { value } = e.target;
    this.setState({
      filteredRecipe: value
    })
  }
  onSign = () => {
    this.setState({
      isBlured: true,
      isSign: !this.state.isSign,
      isLogin:false,
    })
  }
  onLogin = () => {
    this.setState({
      isBlured: true,
      isLogin: !this.state.isLogin,
      isSign: false,
    })
  }
  onCancel = () => {
    this.setState({
      isBlured: false,
      isLogin: false,
      isSign:false,
    })
  }
    render() {
        const blur = isBlured ? 'blured' : null;
        const {isBlured,isLogin,isSign,filteredRecipe} = this.state;
        const {onCancel,onLogin,onSign,filterUpdate} = this.props;
        return (
                <div>
                    <Modal isSign={isSign} onSign={onSign} onLogin={onLogin} onCancel={onCancel}/>
                    <Login isLogin={isLogin} onLogin={onLogin} onSign={onSign} onCancel={onCancel}/>
                    <div className={blur}>
                        <HeaderRecipe filterUpdate={filterUpdate} onSign={onSign} onLogin={onLogin}/>
                        <Main filterUpdate={filterUpdate} />
                        <RecipeList filteredRecipe={filteredRecipe}/>
                        <Footer />
                    </div>
              </div>
                )
            }}
export default Home;