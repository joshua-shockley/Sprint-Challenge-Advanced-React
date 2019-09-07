import React from 'react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
//stored value is coming from useLocalStorage... can be call whatever i want though as long as its the same in each spot.previously called it initialValue
export const usePurpleMode = (storedValue) => {
    const [purpleMode, setPurpleMode] = useLocalStorage('purpleMode', storedValue);


    useEffect(() => {
        var thepurp = document.querySelector("section");
        console.log(thepurp);
        purpleMode === true ? thepurp.classList.add('purple-mode') : thepurp.classList.remove('purple-mode');

    }, [purpleMode]);

    return [purpleMode, setPurpleMode]
}