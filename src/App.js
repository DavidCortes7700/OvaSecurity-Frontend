import React, {useState} from 'react';
import './styles/styles.css';
import {Login} from './components/Login';
import {Register} from './components/Register';
import { Password_recovery } from './components/Password_recovery';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  
  return (
    <div className="App">
      {
        currentForm === "login"? 
          <Login onFormSwitch={toggleForm}/> 
        : 
          currentForm === "register" ?
            <Register onFormSwitch={toggleForm}/> 
          : 
            <Password_recovery onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
