import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  /*
  set the initial state of our Component
  */
  constructor(props) {
  	super(props);
    this.state = {
    	value1: Math.floor(Math.random() * 100),
      	value2: Math.floor(Math.random() * 100),
		value3: Math.floor(Math.random() * 100),
      	numQuestions: 0,
		numCorrect: 0
    }
  }
  /*
  method to calculate the exact total of the 3 values
  */
  calculateResult = () => {
   	 return this.state.value1 + this.state.value2 + this.state.value3;
  }
  /*
  method to calculate the proposed answer
  */
  calculateProposedAnswer = () => {
  	return  Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
  }
  /*
  handler that trigger on clicking one of the two buttons and set the State
  */
  answerQuestion = (response, proposedAnswer) => {
    const total = this.calculateResult();
    const areEquals = total === proposedAnswer;
    this.setState((prevState) => ({
        value1: Math.floor(Math.random() * 100),
      	value2: Math.floor(Math.random() * 100),
		value3: Math.floor(Math.random() * 100),
      	numQuestions: prevState.numQuestions + 1,
		numCorrect: (areEquals === response) ? (prevState.numCorrect + 1) : prevState.numCorrect 
    }));
  }
  render() {
    const proposedAnswer = this.calculateProposedAnswer();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.answerQuestion(true, proposedAnswer)}>True</button>
          <button onClick={() => this.answerQuestion(false, proposedAnswer)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
