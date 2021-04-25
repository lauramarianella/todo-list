import React from 'react';
import { useState } from 'react'

import './CalcCSS.css';

function Calc({prpTitle}) {

    const [stNum1, setStNum1] = useState(0.00);
    const [stNum2, setStNum2] = useState(0.00);
    const [stNumR, setStNumR] = useState(0.00);

    return (
        <div className="myPage">   
            <h1>Calculator</h1>  
            <h2>{prpTitle}</h2>  
            <input type="text" placeholder="Num1 " value={stNum1} onChange={(e)=>setStNum1(e.target.value)}/>
            <input type="text" placeholder="Num2 " value={stNum2} onChange={(e)=>setStNum2(e.target.value)}/>
            <br/>
            <input type="submit" value="add" onClick={() => setStNumR(add(stNum1,stNum2))}/>
            <br/>
            <p>{stNumR}</p>
        </div>
    );
  }

  function add(a,b){
    if(isNaN(a) || isNaN(b)) return 0;
    var r= parseFloat(a) + parseFloat(b);
    //console.log(r);
    return parseInt(r);
  }
  
  export default Calc;
