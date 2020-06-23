import React, { useReducer } from 'react';
import counterReducer from './Reducer.js';


const Edit4 = () => {

    let [state, dispatch] = useReducer(counterReducer, 0);

    return (

        <div>
           
            <h3>EDIT of Class 5 using Reducer</h3>

            <h3>Reducer Counter: {state}</h3>

            <button onClick = {() => dispatch('INCREMENT')}>
                Increment (REDUCER)
            </button>
            
        </div>
    )    
}
    
export default Edit4;
