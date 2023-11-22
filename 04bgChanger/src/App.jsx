import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className='w-full h-screen duration-200' style={{ background: color }}>
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full shadow-md ' style={{ backgroundColor: "red" }}>Red</button>
        </div>
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("gold")} className='outline-none px-4 rounded-full shadow-md ' style={{ backgroundColor: "gold" }}>gold</button>
        </div>
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full shadow-md ' style={{ backgroundColor: "green" }}>green</button>
        </div>
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("black")} className='outline-none px-4 rounded-full shadow-md ' style={{ backgroundColor: "gray" }}>black</button>
        </div>
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full shadow-md ' style={{ backgroundColor: "orange" }}>orange</button>
        </div>
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("white")} className='outline-none px-4 rounded-full shadow-md ' style={{ backgroundColor: "white" }}>white</button>
        </div>
      </div>
    </div>
  )
}

export default App
