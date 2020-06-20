import React from 'react';
import './App.css';

function Edit1(props) {
    return (
        
        <div className="App">

            <h1>{props.hello}</h1>
            <hr/>
            <h2>{props.username}</h2>

        </div>


    );
}

export default Edit1;
