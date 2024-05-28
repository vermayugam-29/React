import { useState } from "react"

function App() {
  const [count,setCount] = useState(0);

  return (
    <div className="w-[100%]">
      <div className='flex flex-col items-center justify-center w-[100%] gap-7'>
        <div>
            <h1 className="text-blue-400 text-3xl">Increment & Decremennt</h1>
        </div>

        <div className="flex flex-row gap-6 rounded-lg bg-white w-[10%] justify-between p-2">

          <button onClick={() => {setCount(count-1)}}
          className="text-black font-bold text-2xl w-[25%] border-r-2">
              -
          </button>

          <div className="text-black text-2xl font-bold">{count}</div>

          <button onClick={() => {setCount(count+1)}} 
          className="text-black font-bold text-2xl w-[25%] border-l-2"> 
            +
          </button>

        </div>

        <div className="flex flex-col items-center w-[50%]">
          <button onClick={() => setCount(0)} className="bg-blue-400 text-white w-[15%] rounded-lg">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
