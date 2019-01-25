import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as vegal from 'vega-lite';
import * as vega from 'vega';
import vegae from 'vega-embed';

class App extends Component {

  componentDidMount(){
    var yourVlSpec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
      description: 'A simple bar chart with embedded data.',
      data: {
        values: [
          {a: 'A', b: 28},
          {a: 'B', b: 55},
          {a: 'C', b: 43},
          {a: 'D', b: 91},
          {a: 'E', b: 81},
          {a: 'F', b: 53},
          {a: 'G', b: 19},
          {a: 'H', b: 87},
          {a: 'I', b: 52}
        ]
      },
      mark: 'bar',
      encoding: {
        x: {field: 'a', type: 'ordinal'},
        y: {field: 'b', type: 'quantitative'}
      }
    };
    vegae('#vis', yourVlSpec);    
  }

  render() {
    
    console.log(vega,vegal,vegae);
    debugger;
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
        </header>

        <div id="vis"></div>
      </div>
    );
  }
}

export default App;
