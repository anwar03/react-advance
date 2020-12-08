import React, { useState } from 'react';
import { data } from '../../../data';

const PropDrilling = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter(( person ) => person.id !== id);
        });
    };

    return (
        <section >
            <h3>Prop Drilling</h3>
            <List people={people} removePerson={removePerson} />
        </section>
    )
}

const List = ({ people, removePerson }) => {
    return (
        <>
            {
                people.map((person) => {
                    return <SinglePerson 
                    key={person.id} 
                    {...person} 
                    removePerson={removePerson} />;
                })
            }
        </>
    )
}

const SinglePerson = ({ id, name, removePerson }) => {

    return (
        <>
            <div className='item'>
                <p>{name}</p>
                <button onClick={ () => removePerson(id) }>remove</button>
            </div>
        </>
    )
}

export default PropDrilling;
