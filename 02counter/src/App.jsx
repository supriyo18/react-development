import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);


  const addValue = () => {
    if (counter < 20)
      setCounter((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    if (counter > 1)
      setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hello Welcome to React</h1>
      <h2> Counter Value : {counter}</h2>

      <button onClick={addValue}> Add value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
