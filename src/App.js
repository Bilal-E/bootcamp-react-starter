import React, { useState } from 'react';
import './App.css';
import Edit1 from './User_edit1.js';
import Edit2 from './User_edit2.js';
import Child from './User_edit3.js';
import counterContext from './Context';
import Edit4 from './User_edit4.js';


function App() {
  
   let [count, setCount] = useState(0)
   let [isDay, setDay] = useState(true)
   let context_count = useState(0)

   return (
      <counterContext.Provider value={context_count}>

         <div className={`defaultBackground ${isDay ? 'daylight Center' : 'Center'}`}  >
      
            <h4>Shift: {isDay ? 'Morning..' : 'Night..'}</h4>

            <button onClick={() => setDay(!isDay)}>
               Set Shift
            </button>


            <Edit1 hello = "HELLO WORLD" username= "Bilal Elahi" />
            
            <Edit2 counter={count} />

            <button onClick = {() => setCount(++count)}>
               Counter Increment
            </button>

         </div> 


         <div className="Center">

            <Child />
            
            <Edit4 />

         </div>

      </counterContext.Provider>
         
         );
}

export default App;
