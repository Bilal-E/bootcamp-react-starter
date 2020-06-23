import React, { useContext } from 'react';
import counterContext from './Context.js';

function Child(){

    let counterValue = useContext(counterContext);
    console.log(counterValue)

    return(
        
        <div className = "Center">
            
            <h3>EDIT of Class 5 using Context</h3>

            <h3>Context Counter: {counterValue[0]}</h3>

            <button onClick={() => {counterValue[1](++counterValue[0])}}>
                Increment (CONTEXT)
            </button>
        
        </div>

    );
}

export default Child;