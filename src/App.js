import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = ""
  }
  alterar = (e) => {
    this.setState({texto: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.alterar} value={this.state.texto} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.texto}</p>
      </div>
    );
  }
}

export default App;
