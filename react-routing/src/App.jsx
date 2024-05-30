import { Route,Routes,Link,NavLink } from "react-router-dom"
import Support from "./components/Support"
import Home from "./components/Home"
import About from "./components/About"
import MainHeader from "./components/MainHeader"
import NotFound from "./components/NotFound"


function App() {

  return (
    <>

      <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
      </div>

      <Routes>
          <Route path="/" element={<MainHeader/>}>
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/support" element={<Support/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Route>
      </Routes>

    </>
  )
}

export default App
