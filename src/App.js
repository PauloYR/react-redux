import React, { Component } from 'react';
import store from './store';
import TodoList from './componets/TodoList';
import Counter from './componets/Counter';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <TodoList />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
