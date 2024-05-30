import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react"

const App = () => {

  const [isLogin , setLogin] = useState(false);

  return (
    <div>
        <Navbar isLogin={isLogin} setLogin={setLogin}/>

        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
    </div>
  )
}

export default App
