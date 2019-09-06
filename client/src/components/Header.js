import React, {useState, useEffect} from 'react';
import {usePurpleMode} from './usePurpleMode.js';
export default function Header() {
const[purpleMode, setPurpleMode]= usePurpleMode(false);

const theSwitch = e => {
    e.preventDefault();
    setPurpleMode(!purpleMode);
    if(purpleMode === true){
        document.body.classList.add("dark-mode");
    } else { document.body.classList.remove("dark-mode")};

}

// useEffect(() => {
//     if(darkMode === true){
//         document.body.classList.add("dark-mode");
//     } else { document.body.classList.remove("dark-mode")};
// }, [darkMode]);

console.log(purpleMode);
    return(
        <header className="App-header" >    
            <h1 >Hello! Welcome To The Ladies Of Soccer</h1>
            <button
            onClick={theSwitch}
            className="the-switch-button">
            click Me</button>
        </header>

    );
}