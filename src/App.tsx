import { useState } from 'react'
import './App.css'

import { Network } from './components/Network';

function App() {
  const [count, setCount] = useState(0);

  let trainingData = [
    {
      input: [0, 0, 0, 0, 0, 0, 0, 100000],
      output: [0, 0, 0, 0, 0, 0, 0, 200000]
    },
    {
      input: [0, 0, 0, 0, 0, 0, 0, 200000],
      output: [0, 0, 0, 0, 0, 0, 0, 400000]
    },
    {
      input: [0, 0, 0, 0, 0, 0, 0, 400000],
      output: [0, 0, 0, 0, 0, 0, 0, 800000]
    }
  ]

  let network = new Network([8, 16, 8], 1000000);

  //network.processInput([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]);

  network.train(trainingData);

  network.processInput([0, 0, 0, 0, 0, 0, 0, 300000]);

  //network.printNetwork();

  console.log('Network output values:', network.getOutputValues());


  network.processInput([0, 0, 0, 0, 0, 0, 0, 50000]);

  console.log('Network output values:', network.getOutputValues());

  network.processInput([0, 0, 0, 0, 0, 0, 0, 10]);

  console.log('Network output values:', network.getOutputValues());



  return (
    <>
      <h1>Test Neural Network App</h1>
      <div onClick={() => setCount(count + 1)}>
        {count}
      </div>
      
    </>
  )
}

export default App
