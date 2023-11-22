import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charecterAllowed, setCharecterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed)
      str += "0123456789";
    if (charecterAllowed)
      str += "@#$%^*&,/;'+-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charecterAllowed,
    setPassword])

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charecterAllowed, passwordGenerator])

  //useref hook
  const passwordRef = useRef(null);
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 
    bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password} className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordClipBoard}
          className='outline-none bg-green-400 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            id='numberInput'
            value={numberAllowed}
            onChange={() => { setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            id='charecterInput'
            value={charecterAllowed}
            onChange={() => { setCharecterAllowed((prev) => !prev) }}
          />
          <label htmlFor="charecterInput">Charecter</label>
        </div>
      </div>
    </div>
  )
}

export default App
