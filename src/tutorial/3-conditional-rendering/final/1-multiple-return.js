import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturn = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    const [ user, setUser ] = useState('Default User');

    useEffect( () => {
        fetch(url)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json();
            }else{
                setTimeout(() => {
                    setIsLoading(false);
                    setIsError(true);
                }, 1000)
            }
        })
        .then((user) => {
            const { login } = user;
            setTimeout(() => {
                setUser(login);
                setIsLoading(false);
            },1000);
        })
        .catch( (error) => console.log(error) )
    }, []);

    if( isLoading ){
        return  (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }else if( isError ){
        return  (
            <div>
                <h2>Error...</h2>
            </div>
        )
    }
    else{
        return (
            <>
                <h2>{user}</h2>
            </>
        )
    }
}

export default MultipleReturn;