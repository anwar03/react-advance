import React, { useState } from 'react';

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    // const firstValue = text || 'Hello world';
    // const secondValue = text && 'Hello world';

    return (
        <>
            {/* <h2>{ firstValue }</h2>
            <h2>value: { secondValue }</h2> */}
            <h1>{text || 'john doe'}</h1>
            { text && <h1>Hello world</h1>}

            {/* ternary operator */}
            <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
            { isError && <h1>Error...</h1>}
            { isError ? <p>There is an error...</p> : <div>
                    <p>There is no error</p>
                </div>}

        </>
    );
}

export default ShortCircuit;