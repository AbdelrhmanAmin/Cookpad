import React,{Component} from 'react';
import './Style.css';

class Comment extends Component {
    state = {
        comment: '',
        marked1: false,
        marked2: false,
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { value } = this.refs.comment;
        this.setState({
            comment: value
        })
    }
    onClick1 = () => {
        this.setState({
            marked1: !this.state.marked1
        })
    }
    onClick2 = () => {
        this.setState({
            marked2: !this.state.marked2
        })
    }
    render(){
        const comment =
            <div className="cont-ainer">
                <div className="dialogbox">
                    <div className="body">
                        <span className="tip tip-up"></span>
                        <div className="message">
                            <span>{this.state.comment}</span>
                        </div>
                    </div> 
                </div>
            </div>;
            const style1= this.state.marked1 ? 'marked1' : null;
            const style2= this.state.marked2 ? 'marked2' : null;
        return(
            <div>
                <div className='comment-recipe'>
                    <nav>
                        <form className="inputleft">
                            <input type="text" placeholder='Comment here' ref='comment'/>
                            <input type="submit" className='myButton' value='Comment here' onClick={this.onSubmit}/>
                        </form>
                        <ul className='btnright'>
                            <li className={style2} onClick={this.onClick2}><i className="fa fa-heart"></i></li>
                            <li className={style1} onClick={this.onClick1}><i className="fa fa-bookmark"></i></li>
                            <li><i className="fa fa-share-square"></i></li>
                        </ul>
                    </nav>
                </div>
                <ul>
                    <li>
                        {comment}
                    </li>
                </ul>
            </div>
        )
    }
}
export default Comment