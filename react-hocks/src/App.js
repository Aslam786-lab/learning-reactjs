
import './App.css';
import React from 'react';
// import ArrayAsState from './components/useState/ArrayAsState4';
// import ObjAsState from './components/useState/ObjAsState3';
// import Counter from './components/Counter1';
// import CounterTwo from './components/useState/CounterTwo2';

// import Counter from './components/useEffect/Conter1';
// import ConditionalCounter from './components/useEffect/ConditionalEffects2';
// import RunEffectOnce from './components/useEffect/RunEffectOnce3';
// import EffectCleanup from './components/useEffect/EffectCleanup4';
// import DataFetching5 from './components/useEffect/api request/DataFetching5';
// import PostFetching from './components/useEffect/api request/PostFetching';

import ComponentA from './components/useContext/ComponentA';

export const UserContext = React.createContext()
export const CityContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* UseState Hook */}
      {/* ====================== */}

      {/* Example for counter  */}
      {/* <Counter/> */}
      {/* <CounterTwo/> */}

      {/* ============================ */}
      {/* Passing object as state to useState */}
      {/* <ObjAsState/> */}

      {/* Passing object as state to useState */}
      {/* <ArrayAsState/> */}



      {/* ===================================== */}

      {/* UseEffect Hook */}
      {/* Conter with document title using useEffect */}
      {/* <Counter /> */}
      {/* <ConditionalCounter/> */}
      {/* <RunEffectOnce/> */}
      {/* <EffectCleanup/> */}

      {/* ================================== */}
      {/* fetching data from server */}
      {/* <DataFetching5/> */}
      {/* <PostFetching/> */}

      {/* ================================================= */}


      {/* context api */}
      <UserContext.Provider value="Ak">
        <CityContext.Provider value="LA">
          <ComponentA/>
        </CityContext.Provider>
      </UserContext.Provider>


    </div>
  );
}

export default App;
