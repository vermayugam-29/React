import { useState } from 'react'
import Form from './components/Form'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] flex flex-col items-center'>
      <Form></Form>
    </div>
  )
}

export default App
