import { useState } from 'react';
import './Form.css';

function Form(props) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const maxDate = `${year}-${month}-${day}`;

    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [nickname , setNickName] = useState('')

    function submitHandler(e) {
        e.preventDefault();
        
        const data = {
            name: name,
            dob: dob,
            nickname : nickname
        };

        if(data.name == '' || data.dob == '' || nickname == ''){
            alert('Field cannot be empty')
            return;
        } 
        props.setData(data);

        setName('');
        setDob('');
        setNickName('');
    }

    function nameHandler(e) {
        setName(e.target.value);
    }

    function dobHandler(e) {
        setDob(e.target.value);
    }

    function nicknameHandler(e){
        setNickName(e.target.value);
    }

    return (
        <>
            <form onSubmit={submitHandler} className='form'>
                <h1>FORM</h1>
                <div>
                    <span>Name : </span>
                    <input onChange={nameHandler} value={name} type="text" />
                </div>
                <div>
                    <span>DOB : </span>
                    <input onChange={dobHandler} value={dob} type="date" min='1900-01-01' max={maxDate} />
                </div>
                <div>
                    <span>Nickname : </span>
                    <input onChange={nicknameHandler} value={nickname} type="text" />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;
