import React from 'react';
import { useState, useEffect } from 'react';
import './Popup.css'

function Popup() {
    const[pop, setpop] = useState(1);

    useEffect(()=>{
        if(!pop){
            document.querySelector('.others').style.filter="blur(0px)"
            document.querySelector('.boxpp').style.visibility = "hidden"
            setpop(1);
        }
    }, [pop])

  return (
    <div className='boxpp'>
      <div className='login_pop'>
        <div className='student'>
          <button className='student_button'>Login as Customer</button>
        </div>
        <div className='shopkeeper'>
          <button className='shopkeeper_button'>Login as Shopkeeper</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
