// Code Keypad Component Here
import React from 'react';

function Keypad (){

    function handleChange(e) {
        console.log(`Entering password...`, e.target.value)
    }
    return (
        <div>
            <input type='password' onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;