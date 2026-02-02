import { useState } from 'react'
import useSwitch from './useSwitch'
import useDate from './useDate';
import './App.css'

function App() {
  const {isOn, toggle} = useSwitch();
  const {time} = useDate();

  return (
    <div>
      <button onClick={toggle}>Cambia Stato</button>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <h1>Data e ora attuali:</h1>
      <p>{time.toLocaleString()}</p>
    </div>
  );
}

export default App
