import React,{Component} from 'react';
import './style.css';

class Footer extends Component {
    render(){
        return(
            <div className='flexer'>
                <ul className="left">
                    <li>Copyright © Cookpad Inc. All Rights Reserved </li>
                    <li><a href="#">Feedback</a></li>
                </ul>
                <ul className="right">
                    <li><a href="#">العربية</a></li>
                    <li><a href="#">French</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
        )
    }
}
export default Footer;