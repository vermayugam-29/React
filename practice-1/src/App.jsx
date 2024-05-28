import { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
    const [details, setDetails] = useState([
        {
            name: "Yugam",
            date: 29,
            month: "Oct",
            year: 2003,
            nickname : "Chutad"
        },
        {
            name: "Raghav",
            date: 15,
            month: "Apr",
            year: 2003,
            nickname : "Momos"
        },
        {
            name: "Akshit",
            date: 4,
            month: "Jan",
            year: 2003,
            nickname : "Mulla"
        },
        {
            name: "Tanmay",
            date: 13,
            month: "Jun",
            year: 2003,
            nickname : "Loda" 
        }
    ]);

    function getData(data) {
        const [year, month, date] = data.dob.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


        const newUser = {
            name: data.name,
            date: parseInt(date),
            month: months[parseInt(month) - 1],
            year: parseInt(year),
            nickname : data.nickname.toString()
        };

        setDetails([...details, newUser]);
    }

    return (
        <div className='App'>
            <Form setData={getData} />
            <List details={details} />
        </div>
    );
}

export default App;

