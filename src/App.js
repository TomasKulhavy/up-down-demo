import React, {useState} from 'react';
import './App.css';
import UpDown, {UpDownInner} from "./components/UpDown";

function App() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(5);
  return (
    <>
      <UpDown value={a} setValue={setA} min={0} max={10} />
      <UpDown value={b} setValue={setB} />
      <p>{a + b}</p>
    </>
    //<UpDownInner><strong>X</strong></UpDownInner>
  );
}

export default App;
