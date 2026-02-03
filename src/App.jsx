import { useState } from 'react'
import useSwitch from './useSwitch'
import useDate from './useDate';
import useCustomPointer from './useCustomPointer';
import './App.css'

function App() {
  const {isOn, toggle} = useSwitch();
  const {time} = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <button onClick={toggle}>Cambia Stato</button>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <h1>Data e ora attuali:</h1>
      <p>{time.toLocaleString()}</p>
      <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
      </div>
    </div>
  );
}

export default App
