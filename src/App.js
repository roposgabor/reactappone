import React from 'react';
import Header from "./componenet/header/Header";
import SignUp from "./componenet/login/SingUp";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <SignUp/>
    </div>
  );
}

export default App;
