import { useEffect, useState } from "react"
import Input from "./components/Input"
import './App.css'

function App() {

  const [lists,setLists] = useState([]);
  const [idx , setIdx] = useState(0); 

  useEffect(()=>{},[lists,idx])


  return (
    <div className="mainDiv">
      <h1>To-Do List</h1>
      <Input idx={idx} setIdx={setIdx} lists={lists} setLists={setLists}/>
    </div>
  )
}

export default App
