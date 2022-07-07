import React from "react";

function Header({name,title}){
    return (
        <div style={{background:"yellow",padding:20}}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <p> this is a card of {name} it is a paragraph which is yellow color</p>
            <p> REactJs is library that used for building user interfaces</p>
            
        </div>
        
    );
}

export default Header;