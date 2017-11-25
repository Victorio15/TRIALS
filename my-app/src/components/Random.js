import React, {Component} from 'react';
import Button from './Button.js';


class Random extends Component {
    constructor(props){
        super(props)
        this.state = { 
            color: [0, 25, 237]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering. 
    componentDidMount() {
        this.applyColor();
    }
    // componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }
    //formats 'rgb' for DOM
    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }
    //adjusts button color based on this.state.color for background
    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }
    // applies background color to body of document
    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }
    //chooses random numbers for rgb rendering
    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random()*256));
        }
        return random;
    }
    // click handler event to choose color when button is clicked
    handleClick(){
        this.setState({ 
          color: this.chooseColor()
        });
      }

    render(){
        return(
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
                   Color Picker  
            
                </h1>
                <Button onClick={this.handleClick} light={this.isLight()}/>
            </div>
        )
    }
}

export default Random;