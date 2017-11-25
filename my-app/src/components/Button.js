import React, {Component} from 'react';
// eslint-disable-next-line
import Random from './Random.js';


class Button extends Component {
	// eslint-disable-next-line
    constructor(props){
        super(props)
    }


    render(){
        return(
            <button
                className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				Click!
            </button>
        )
    };
};


export default Button;