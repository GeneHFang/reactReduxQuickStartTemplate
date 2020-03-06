import React from 'react';
import logo from './logo.svg';
import './App.css';

//Redux stuff
import { connect } from 'react-redux';
import {
        increment,
        //import each action as necessary,
      } from './Redux/actions/exampleActions';

//Dispatch
//This is where you will be mapping all your actions to this component props
const mapDispatchToProps = {
  increment,

  //If you want to rename the action in this file context do this: 
  //renamedAction: otherAction
}

//State
//This is where you will be mapping the default values of state to this component props
const mapStateToProps = (state) => {
  return({
    incrementExample: state.first.incrementExample,

    //exampleValFromFirstReducer: state.first.exampleVal,
    //exampleValFromSecondReducer: state.second.exampleVal,
    //exampleValIfOnlyOneReducer: state.exampleVal,

    //Again, you can rename this state value to whatever you wish:
    //renamedStateVar: state.otherDefaultValue
  })
}

const App = (props) => {
  const incButtonHandler = () => {
    //If you want to see the props, uncomment this line and open your console in your browser
    //console.log(props);
    props.increment();
  }
  return (
    <div className="App">
      <h1>This is the current value of our example: {props.incrementExample}</h1>
      <button onClick={incButtonHandler}>Click here to increment it</button>
    </div>
  );
}

//connect msp and mdp to our component
export default connect(mapStateToProps, mapDispatchToProps)(App);
