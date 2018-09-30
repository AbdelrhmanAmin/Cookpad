import React, {Component} from 'react';
import './style.css';

class Login extends Component {
    render() {
        const style = this.props.isLogin ? {display: 'block'}: null;
        return(
            <div>
                <section className='form' style={style}>
                    <div className='top'>
                    <span className="close" onClick={this.props.onCancel}>&times;</span>
                        <h1>Sign up with Cookpad</h1>
                    </div>
                    <div className='mid'>
                        <button className='fbBtn'><i className="fa fa-facebook fa-lg"></i><p>Sign up with Facebook</p></button>
                        <button className='gBtn'><i className="fa fa-google-plus fa-lg"></i><p>Sign up with Google+</p></button>
                    </div>
                        <p className='hr'>or</p>
                    <div className='botton-1'>
                        <div className="icon-1">
                            <span>
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                        <input type="email" placeholder='E-mail' className='input-1'/>       
                    </div>       
                    <div className='botton-2'>
                        <div className="icon-2">
                            <span>
                                <i class="fa fa-unlock-alt"></i>
                            </span>
                        </div>
                        <input type="email" placeholder='Password   ' className='input-1'/>
                    </div>
                    <div className='Login-1'><button className='login'>Login</button>
                    <p>Already have an account ?<a href='#' onClick={this.props.onSign}>Login</a></p>
                    </div>
                 </section>
            </div>
        )
    }
}

export default Login;