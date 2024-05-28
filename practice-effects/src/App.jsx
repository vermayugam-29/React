import { useEffect, useState } from 'react'

/*
use of useEffect :-
  when you want to do something 'after' the rendering of your component is complete
  then we define that in useEffect hook.
  Eg. add a listner, remove a listner, https  request, api calling
*/


function App() {

  const [text,setText] = useState('');

  function changeHandler(e) {
    setText(e.target.value)
    console.log(text);
  }

  //variation 1 : Renders every time ui is updated
  // useEffect( () => {
  //   console.log("Rendered UI");
  // })


  // variation 2 : - only renders for the first time
  // useEffect( () => {
  //   console.log("Rendering UI only for the first time");
  // } , [])

  //variation 3:- First render + whenever something from dependency list is updated
  // useEffect( () => {
  //   console.log("Changed");
  // } ,[text])

  //variation 4:- used for cleaning code , removing old even listners from memory
  useEffect( () => {
    console.log("new listner added");

    return () => {
      console.log("Old listner removed");
    }
  } , [text])
  
  return (
    <>
      <input className='border-2 border-black' onChange={changeHandler} type="text" />
    </>
  )
}

export default App
