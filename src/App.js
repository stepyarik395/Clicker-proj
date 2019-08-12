import React from 'react';
import logo from './logo.svg';
import './App.css';
import Popap__component from './Components/Popap-component/Popap-component';
import Popap__items from './Components/Popap-items/Popap-items';

let  App = () => {
  return (
    <div>
      <Popap__component></Popap__component>
      <Popap__items></Popap__items>

    </div>
  );
}

export default App;
