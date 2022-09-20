
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import AsyncOperations from './components/AsyncOperations';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeCantainer'
// import ChooseState from './components/ChooseState';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/> */}
        {/* <NewCakeContainer/> */}

        {/* <ChooseState cake/>
        <ChooseState/> */}

        {/* ========================== */}
        {/* async operations  */}
        <AsyncOperations/>


        
      </div>
    </Provider>
  );
}

export default App;
