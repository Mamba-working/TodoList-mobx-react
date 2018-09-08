import React, { Component } from 'react';
import TodolistView from './Components'
import { Provider } from 'mobx-react'
import store from './Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodolistView onSortEnd={store.handleSort} pressDelay={200}/>
      </Provider>
      
    );
  }
}

export default App;
