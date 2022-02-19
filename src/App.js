import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
      const optionsDate = {year: 'numeric', month: '2-digit', day: '2-digit' };

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h3>{(new Date()).toLocaleTimeString('en-US')}</h3>
            <h3>{(new Date()).toLocaleTimeString('es-NI')}</h3>
            <h3>{(new Date()).toLocaleDateString('en-US')}</h3>
            <h3>{(new Date()).toLocaleDateString('es-NI')}</h3>
            <h3>{(new Date()).toLocaleDateString('en-US',optionsDate)}</h3>
            <h3>{(new Date()).toLocaleDateString('es-NI',optionsDate)}</h3>

          </header>
        </div>
      );
  }
}

export default App;
