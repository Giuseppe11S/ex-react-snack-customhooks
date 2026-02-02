import { useState } from 'react'
import useSwitch from './useSwitch'
import './App.css'

function App() {
  const {isOn, toggle} = useSwitch();

  return (
    <div>
      <button onClick={toggle}>Cambia Stato</button>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
    </div>
  );
}

export default App
