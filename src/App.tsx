import { useState } from 'react'
import './App.css'

import { Network } from './components/Network';

function App() {
  const [count, setCount] = useState(0)

  let network = new Network([8, 16, 8], 1000000);

  network.processInput([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]);

  console.log('Network output values:', network.getOutputValues());


  return (
    <>
      <h1>Added Numbers</h1>
      <div onClick={() => setCount(count + 1)}>
        {count}
      </div>
      
    </>
  )
}

export default App
