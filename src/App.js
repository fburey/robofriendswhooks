// import logo from './logo.svg';
import logo from './LogoFactoring.svg'
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
      const optionsDate = {year: 'numeric', month: '2-digit', day: '2-digit' };

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>{(new Date()).toLocaleTimeString('en-US')}</h3>
          <h3>{(new Date()).toLocaleTimeString('es-NI')}</h3>
          <h3>{(new Date()).toLocaleDateString('en-US')}</h3>
          <h3>{(new Date()).toLocaleDateString('es-NI')}</h3>
          <h3>{(new Date()).toLocaleDateString('en-US',optionsDate)}</h3>
          <h3>{(new Date()).toLocaleDateString('es-NI',optionsDate)}</h3>          
        </div>
      );
  }
}

export default App;
