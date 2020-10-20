import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat Datang di Aplikasi React
        </p>
        <input type="text" placeholder="Username" name="uname" required/>
        <input type="password" placeholder="Password" name="psw" required/>
        <button type="submit">Login</button>
      </header>

      
     
      
    </div>
  );
}

export default App;
