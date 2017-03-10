import React, { Component } from 'react';
import autoBind from 'react-autobind';

import dataService from './services/dataService';
import ListComponent from './components/ListComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        message: null
    };

    autoBind(this);
  }

  componentDidMount() {
      this.getMessage();
  }

  async getMessage() {
      let message = await dataService.getMessage();

      this.setState({
          message
      });
  }
  render() {
    let displayMessage = this.state.message ? this.state.message : 'Hello World from client!';

    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
          </div>

          <p className="App-intro">
              {displayMessage}
          </p>

          <h2></h2>
          <ListComponent />
      </div>
    );
  }
}

export default App;

