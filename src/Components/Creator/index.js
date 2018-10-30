import React,{Component} from 'react';
import './style.css';
import {storage} from '../../firebase';
import Recipes from '../Data/Recipes.json';

class Creator extends Component {
    state = {
        image: null,
        url: '',
        progress: 0,
        recipetitle: '',
        recipestory: '',
    }
    handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
          }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
        }, 
        (error) => {
             // error function ....
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
      });
    }
    handleStateChangeTitle = (e) => {
        this.setState({
            recipetitle: e.target.value,
        })
    }
    handleStateChangeStory = (e) => {
        this.setState({
            recipestory: e.target.value,
        })
    }
    handlePush = () => {
        const newRecipe = {
            'ImageURL': this.state.image,
            'steps': this.state.recipestory,
            'name': this.state.recipetitle
        };
        const rare = JSON.stringify(newRecipe);
        Recipes.push(rare);
        localStorage.setItem('newRecipe', JSON.stringify(newRecipe))
    }
    render(){
        const style = {
            backgroundImage: `url(${this.state.url})`,
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            zIndex: 1,
        };
        return(
            <div className='creator'>
                <div className='c-top' style={style}>
                    <div className="c-upload" >
                        <i className="fa fa-camera fa-3x"></i>
                        {/* <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> */}
                    </div>
                    <input type="file" name='file' ref={(e) => {this.image = e}} accept='image/*' onChange={this.handleChange} />
                </div>
                <div className="c-mid">
                    <button onClick={this.handleUpload} className='c-btn'>UPLOAD</button>
                    <br/>
                    <progress value={this.state.progress} max="100"/>
                    <h1>{this.state.recipetitle}</h1>
                    <p>{this.state.recipestory}</p>
                <input type='text' placeholder='Recipe title...' className='c-m-title' ref={(e) => {this.title = e}} onChange={this.handleStateChangeTitle}/>
                <input type='text' placeholder='tell your story' className='c-m-story' ref={(e) => {this.story = e}} onChange={this.handleStateChangeStory}/>
                <button className='c-btn' onClick={this.handlePush}>PUBLISH</button>
                </div>
            </div>
        );
    }
}
export default Creator;