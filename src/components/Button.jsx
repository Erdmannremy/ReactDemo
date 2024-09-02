import React from "react";
import { useState } from "react";



function Button () {

   const [count,setCount]= useState(0);

   function handleClick() {
      setCount(count + 1);

}

   return (
      <div>
       <button className="Button" onClick={handleClick}>
          Cliquer {count} fois
        </button>
       
       
        


      </div>
   
   
 );
};











export default Button;
