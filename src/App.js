import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Button from './components/Button';
import CounterCount from './components/CounterCount';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="app">
            <CounterCount/>
              <Timer/>
            <Button />
          </div>
        </Provider>
    );
  }
}

export default App;
