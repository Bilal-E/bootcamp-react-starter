import React, { useState } from 'react';
import './App.css';
import Edit1 from './User_edit1.js'
import Edit2 from './User_edit2.js'


function App() {
  
   let [count, setCount] = useState(0)
   let [isDay, setDay] = useState(true)
  
   return (

      <div className = {`defaultBackground ${isDay ? 'daylight' : ''}`}>
     
         <h4>Shift: {isDay ? 'Morning..' : 'Night..'}</h4>

         <button onClick={() => setDay(!isDay)}>
            Set Shift
         </button>


         <Edit1 hello = "HELLO WORLD" username= "Bilal Elahi" />
         
         <Edit2 counter={count} />

         <button onClick = {() => setCount(count + 1)}>
            Counter Increment
         </button>

      </div> 

         );
}

export default App;
