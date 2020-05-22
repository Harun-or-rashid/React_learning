import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/First'
import './components/Second'
import Second from './components/Second'
import First from './components/First';
let name=''
function App() {
  return (
    <div className="App">
    <First  name='Ringku' email='ringku.swe@gmail.com' />
     <Second />

    </div>
  );
}

export default App;

