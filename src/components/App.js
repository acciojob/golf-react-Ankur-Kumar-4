import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" },
            currentPosition:0,
            
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.moveBallRight = this.moveBallRight.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

    };

  
    
    buttonClickHandler() {
    this.setState({
        renderBall: true
    });
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event

    moveBallRight() {

       this.setState({currentPosition:this.state.currentPosition+5})

        this.setState({
            ballPosition: { left: `${this.state.currentPosition}px` }
        });

    }


    handleKeyDown(event) {
        // Check if the right arrow key is pressed (key code 39)
        if (event.keyCode === 39) {
           this.moveBallRight();
        }
    }

   

    componentDidMount() {
        
        document.addEventListener('keydown', this.handleKeyDown);
    }

    

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
