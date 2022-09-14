
import './App.css';
import React,{useReducer} from 'react';

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

// import ComponentA from './components/useContext/ComponentA';
// import FocusInput from './components/useRef/FocusInput';
// import Timer from './components/useRef/Timer';

// import Counter from './components/useReducer/Counter1';
// import Counter2 from './components/useReducer/Counter2';
// import Counter3 from './components/useReducer/Counter3';
// import RefComponent from './components/useRef/PersistValues';

// import ComponentA from './components/useReducer/reducer with context/ComponentA';
// import ComponentB from './components/useReducer/reducer with context/ComponentB';
// import ComponentC from './components/useReducer/reducer with context/ComponentC';


import SlowFunction from './components/useMemo/SlowFunction';
import ReferentialEquality from './components/useMemo/ReferentialEquality';
import ThemeNumber from './components/useCallback/ThemeNumber';

// export const UserContext = React.createContext()
// export const CityContext = React.createContext()

// export const CountContext = React.createContext()

// //this is for useReducer with useContext
// const initialState =0
// const reducer = (state, action) =>{
//     switch (action) {
//         case 'increment':
//             return state+1;
            
//         case 'decrement':
//             return state-1;
            
//         case 'reset':
            
//           return  initialState;

//         default:
//             return state;
//     }
    
// }


function App() {

  //this is for useReducer with useContext
  // const [count, dispatch] = useReducer(reducer, initialState)

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


      {/* useContext hook */}
      {/* <UserContext.Provider value="Ak">
        <CityContext.Provider value="LA">
          <ComponentA/>
        </CityContext.Provider>
      </UserContext.Provider> */}

      {/* ======================================================== */}
      {/* useRef hook */}
      {/* <FocusInput/> */}
      {/* <Timer/> */}
      {/* <RefComponent/> */}

      {/* ================================================================ */}
      {/* useReducer hook */}
      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}

      {/* useReducer with useContext to pass the state betwwn different components*/}
     
      {/* <CountContext.Provider value={{countState: count, countDispatch:dispatch}}>
      Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      </CountContext.Provider> */}

      {/* ============================================================ */}

      {/* useMemo hook */}
      {/* <SlowFunction/> */}
      {/* <ReferentialEquality/> */}


      {/* ============================================================= */}
      
      {/* useCallback hook */}
      <ThemeNumber/>




    </div>
  );
}

export default App;
