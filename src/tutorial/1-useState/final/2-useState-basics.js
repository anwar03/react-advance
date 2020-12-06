import React, { useState } from 'react';

const UseStateBasics = () => {
    const [text, setText] = useState('random people');
    const handleClick = () => {
        if(text === 'random title'){
            setText('Hello world');
        }else{
            setText('random title');
        }
    }

    return (
        <React.Fragment>
            <h2>{text}</h2>
            <button type='button' onClick={handleClick} className='btn'>
                change title
            </button>
        </React.Fragment>
    )
}

export default UseStateBasics;