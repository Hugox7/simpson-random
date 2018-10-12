import React, { Component } from 'react';
import GenerateSimpson from './GenerateSimpson';
import DisplaySimpson from './DisplaySimpson'
import './App.css';



class App extends Component {

  state = {
    simpson: null
  }
  
  getData() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
    .then(response => response.json())
    .then(data => this.setState({ simpson: data[0] }))
    .then(() => console.log(this.state.simpson))
  }

  componentDidMount() {
    this.getData()
  }

  handleClick() {
    this.getData()
  }

  render() {
    if (this.state.simpson === null) {
    return <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"/>}
    
    
    return (
      <div>     
        <DisplaySimpson simpson = {this.state.simpson} />
        <GenerateSimpson selectQuote = {() => this.handleClick()} />
      </div>
    );
  }
}

export default App;
