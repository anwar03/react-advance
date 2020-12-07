import React, { useState } from 'react';

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(firstName && email){
            const person = {
                id: new Date().getTime().toString(),
                firstName,
                email
            }

            setPeople((people) => {
                return [...people, person];
            })

            setFirstName('');
            setEmail('');
            console.log(person);
            console.log(people);
        }else{
            console.log('Empty values');
        }
    }

    return (
        <>
            <article>
                <form className="form">
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name: </label>
                        <input 
                        type='text' 
                        id='firstName'
                        name='firstName' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Name: </label>
                        <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSubmit} type='submit' className='btn'>Add person</button>
                </form>

                {
                    people.map( (person, index) => {
                        const {id, firstName, email} = person;
                        return (
                            <div className='item' key={id}>
                                <h4>{ firstName }</h4>
                                <p>{ email }</p>
                            </div>
                        );
                    })
                }
            </article>
        </>
    )
}

export default ControlledInputs;