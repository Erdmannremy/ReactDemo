
import React from "react";
import Clock from "./Clock";






const Header = () => {
return (
    <header>
        <hr></hr>
        <h1>Mon Premier Site React Voyage</h1>
        <hr></hr>
        <Clock>{time}</Clock>
        
    </header>
);
};

export default Header;
