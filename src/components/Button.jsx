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
       
       <Button className="NavbarHome">
         
       </Button>
        


      </div>
   
   
 );
};











export default Button;
