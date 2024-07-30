import React from "react";

function Button () {
   function handleClick() {
      alert('vous avez cliqué !');

}

   return (
      <div>
       <button className="Button" onClick={handleClick}>
          Cliquer ici
        </button>
      </div>
   
   
 );
};











export default Button;
