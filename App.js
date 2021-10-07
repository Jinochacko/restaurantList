import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import AppNavigation from './src/Navigation';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
  )};
}

export default App;