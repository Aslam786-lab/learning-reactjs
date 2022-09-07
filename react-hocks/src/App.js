
import './App.css';
import ArrayAsState from './components/useState/ArrayAsState4';
import ObjAsState from './components/useState/ObjAsState3';
// import Counter from './components/Counter1';
// import CounterTwo from './components/useState/CounterTwo2';

function App() {
  return (
    <div className="App">
      {/* Example for counter  */}
      {/* <Counter/> */}
      {/* <CounterTwo/> */}

      {/* ============================ */}
      {/* Passing object as state to useState */}
      {/* <ObjAsState/> */}

      {/* Passing object as state to useState */}
      <ArrayAsState/>
    </div>
  );
}

export default App;
