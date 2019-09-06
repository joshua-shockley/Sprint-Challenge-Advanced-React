import React from 'react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
//stored value is coming from useLocalStorage... can be call whatever i want though as long as its the same in each spot.previously called it initialValue
export const usePurpleMode = (storedValue) => {
    const [purpleMode, setPurpleMode] = useLocalStorage('purpleMode', storedValue);


    useEffect(() => {
        const div = document.getElementsByClassName("container");
        console.log(div);
        purpleMode === true ? document.body.classList.add('purple-mode') : document.body.classList.remove('purple-mode');
        // if (darkMode !== false) {
        //     document.body.classList.add("dark-mode");
        // } else { document.body.classList.remove("dark-mode") };

        //ternery version of if statement
        //const body = document.querySelector('body');
        // darkMode === true ? body.classList.add('dark-mode) : body.classList.remove('dark-mode);


    }, [purpleMode]);

    return [purpleMode, setPurpleMode]
}