import React from "react";

function Button () {
   function handleClick() {
alert('Vous avez cliqué !');
}
} 

{
    return (
       <button className="Button" onClick={handleClick}>
          cliqué ici
        </button>
       

    );
};







export default Button;
