import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
// import ItemDate from './components/ItemDate'
// import Card from './components/Card'

function App() {
  const name2 = "Raghav";
  const response = [
    {
      name : "Yugam" ,
      date : 29 ,
      month : "Oct" ,
      year : 2003
    },
    {
      name : "Raghav" ,
      date : 15 ,
      month : "Apr" ,
      year : 2003
    },
    {
      name : "Akshit" ,
      date : 4 ,
      month : "Jan" ,
      year : 2003
    }
  ]
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <Item name={response[0].name}>I am vissible due to use of props.children</Item>
        <ItemDate date={response[0].date} month={response[0].month} year={response[0].year}></ItemDate>

        <Item name={response[1].name}></Item>
        <ItemDate date={response[1].date} month={response[1].month} year={response[1].year}></ItemDate>

        <Item name={response[2].name}></Item>
        <ItemDate date={response[2].date} month={response[2].month} year={response[2].year}></ItemDate>
      </Card>
    </>
  )
}

export default App
