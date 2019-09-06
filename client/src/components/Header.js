import React, {useState, useEffect} from 'react';

export default function Header() {
const[darkMode, setDarkMode]= useState(false);

console.log(darkMode);
const theSwitch = e => {
    e.preventDefault();
    setDarkMode(!darkMode);

}

useEffect(() => {
    if(darkMode === true){
        document.body.classList.add("dark-mode");
    } else { document.body.classList.remove("dark-mode")};

}, [darkMode]);

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