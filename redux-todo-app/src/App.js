import {Provider} from 'react-redux'
import store from './redux/store'
import React from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Header/>
          <AddTodo/>
          <hr/>
          <Todos/>
        </div>
    </Provider>
  );
}

export default App;
