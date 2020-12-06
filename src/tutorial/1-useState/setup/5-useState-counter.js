import React, { useState } from 'react';

const useStateCounter = () => {
    const [value, setValue] = useState(0);
    const complexIncrese = () => {
        setTimeout(() => {
            setValue((preState) => {
                return preState + 1;
            });
        }, 2000);
    }


    return (
        <React.Fragment>
            <section style={{margin: '4rem 0'}}>
                <h3>Reguler counter</h3>
                <h3>{value}</h3>
                <button className='btn' onClick={() => setValue(value+1)}>increment</button>
                <button className='btn' onClick={() => setValue(value-1)}>decrement</button>
            </section>

            <section style={{margin: '4rem 0'}}>
                <h3>more complex counter</h3>
                <h3>{value}</h3>
                <button className='btn' onClick={complexIncrese}>increment</button>
            </section>

        </React.Fragment>
        
    );
}

export default useStateCounter;