// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import ItemList from './Components/ItemList.js';
import Signup from './Components/Signup.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemList /> */}
        <Signup/>
      </div>
    </Provider>
  );
};

export default App;
