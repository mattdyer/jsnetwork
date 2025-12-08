import { useState } from 'react'
import './App.css'

import { Tests } from './components/Tests';

function App() {
  const [count, setCount] = useState(0);

  Tests.testDividing();



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
