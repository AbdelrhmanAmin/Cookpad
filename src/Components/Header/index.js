import React, { Component } from 'react';
import './Style.css';
import Logo from './chef.png';

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }
class Header extends Component {
    state={
        scrollPositionY: 0,
    }
    componentDidMount(){
        window.addEventListener('scroll', debounce(this.handleScroll, 16))
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', debounce(this.handleScroll, 32))
    }
    
    handleScroll = () => {
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
      }
    render() {
        const isScrolling = !!this.state.scrollPositionY;
        const {filterUpdate ,onBlur} = this.props;
      return (
            <header>
                <nav>
                    <div className={(isScrolling) ? 'leftnav' : 'x'}> 
                        <img src={Logo}/>
                        <a href="#">cookpad</a>
                        <input type="text" placeholder="Ingredient,name,dish..." onChange={filterUpdate}/>
                    </div>
                    <ul>
                        <li><a href="#">Settings <i className="fa fa-cogs"></i></a></li>
                        <li><a href="#">Log in <i className="fa fa-sign-in"></i></a></li>
                        <li onClick={onBlur}><a href="#">Sign up <i className="fa fa-user"></i></a></li>
                    </ul>
                </nav>
            </header>
      );
    }
  }
  
  export default Header;