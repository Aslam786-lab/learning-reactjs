
import './App.css';
import AddTodo from './components/AddTodo';

import Header from './components/Header';
import Todos from './components/Todos';




function App() {
  
  
  return (
    <div className="App">
      <Header/>
      <AddTodo/>
      <hr/>

      <div className='container'>
      <Todos/>
      </div>
      
    </div>
  );
}

export default App;
