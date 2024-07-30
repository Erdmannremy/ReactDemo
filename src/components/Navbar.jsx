import React from "react";

function Navbar () {
    function handleClick() {
           alert('Bienvenu sur notre site!');
     
     }
    
    return (
       <Navbar className="NavbarAcceuil">
            <button onClick={handleClick}>
                Acceuil 
            </button>
        
      
      </Navbar>
       
    
    ); 
};









export default Navbar;
