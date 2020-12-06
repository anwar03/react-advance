import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter', age: 26, message: 'Random message'
    });

    const [name, setName] = useState('peter');
    const [age, setAge] = useState(26);
    const [message, setMessage] = useState('Random messag');
    const changeMessage = () => {
        // setPerson({...person, message: 'Hello world'});
        setMessage('Hello world');
    }

    return (
        <React.Fragment>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button onClick={changeMessage} className='btn'>
                Change message
            </button>
        </React.Fragment>
    );
}

export default UseStateObject;