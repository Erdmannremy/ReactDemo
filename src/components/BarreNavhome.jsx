import React from "react";
import { Link } from "react-router-dom";



function BarreNavhome() {
return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Collection">Collection</Link></li>
            <li></li>
        </ul>
    </nav>
);

};

export default BarreNavhome;

