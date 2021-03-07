import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/cakeContainer'
import NewCakeContainer from './components/newCakeContainer'
import HookCakeContainer from './components/cakeContainer'
import IceCreamContainer from './components/iceCreamContainer'



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <HookCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
