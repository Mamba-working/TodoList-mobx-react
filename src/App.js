import React, { Component } from 'react';
import TodolistView from './Components'
import { Provider } from 'mobx-react'
import store from './Store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodolistView />
      </Provider>
      
    );
  }
}

export default App;
