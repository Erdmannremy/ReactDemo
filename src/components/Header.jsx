
import React from "react";
import Clock from './Clock';







const Header = () => {
return (
    <header>
        <div>
            <h2>Heure actuelle:</h2>
            <Clock/>
        </div>
        <hr></hr>
        <h1>Mon Premier Site React Voyage</h1>
        <hr></hr>
        
        
    </header>
);
};

export default Header;
