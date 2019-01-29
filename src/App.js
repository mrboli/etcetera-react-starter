import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>etcetera...</h1>
        </header>
        <section>
          <List />
        </section>
      </div>
    );
  }
}

export default App;
