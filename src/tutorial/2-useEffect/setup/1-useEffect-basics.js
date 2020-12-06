import React, { useState, useEffect } from 'react';


const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('call useEffacr');
        if(value > 0){
            document.title = `New message (${value})`;
        }
    }, [value]);

    useEffect(() => {
        console.log('hello world');
    }, []);

    console.log('render component');

    return (
        <React.Fragment>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>Click me</button>
        </React.Fragment>
    );
}

export default UseEffectBasics;