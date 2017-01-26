import React, {Component} from 'react';
import CharactersContainer from './components/CharactersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Marvel Characters</h2>
        </div>
        <div>
          <CharactersContainer/>
        </div>
      </div>
    );
  }
}

export default App;
