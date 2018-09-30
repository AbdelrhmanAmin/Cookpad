import React, {Component} from 'react';
import './style.css';

class RecipePage extends Component{
    render() {
        return(
            <div>
                <input type="file" name="file" id="file" class="inputfile" />
            </div>
        );
    }
}
export default RecipePage;