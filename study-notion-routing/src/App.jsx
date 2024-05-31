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
    <div className="w-screen h-screen bg-richblack-900 flex flex-col text-white">

        <Navbar isLogin={isLogin} setLogin={setLogin}/>

        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login setLogin={setLogin}/>} />
            <Route path="/signup" element={<Signup setLogin={setLogin}/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>

    </div>
  )
}

export default App
