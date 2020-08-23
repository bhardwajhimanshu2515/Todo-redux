import React from 'react';
import './App.css';
import Navbar from './shared/navbar';
import Todolist from './components/todolist'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Todolist/>
    </div>
  );
}

export default App;
