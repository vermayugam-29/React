import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {

  return (
    <div className="w-full h-screen flex flex-col background items-center gap-4 p-9">
      <div className="w-[90%] bg-white flex justify-center items-center rounded-lg">
        <h1 className="p-2 text-2xl font-bold">RANDOM GIF'S</h1>
      </div>

      <Random />
      <Tag />
    </div>
  )
}

export default App
