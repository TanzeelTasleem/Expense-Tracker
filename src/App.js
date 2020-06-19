import React from 'react';
import './App.css'
import {Header} from './components/header-components/header'
import {Balance} from './components/Balance-component/Balance-component'
import {Display} from './components/display-component/Display'
import {Transaction} from './components/transaction-component/transaction';
import {Input} from './components/input-components/input';
import {GlobalProvider} from './context/globalContext';
 

const App = () =>{
  alert("Enter positive(+) Value for income and negative(-) value for expense")
  return (
          <GlobalProvider>
          <div className="main">
          <Header/>
          <Balance/>
          <Display/>
          <Transaction/>
          <Input/>
          </div>
          </GlobalProvider>
    );
}

export default App;
