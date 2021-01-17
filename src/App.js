import React, { useEffect, useState, useCallback } from "react";
import "./App.css";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increase = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render(){
    return(
      <div className="wrapper">
        <h1>My First Counter</h1>
        <span className="counter">{this.state.counter}</span>
        <button className="button" onClick={this.increase}>INCREASE</button>
      </div>
    );
  }
}

export default App;
