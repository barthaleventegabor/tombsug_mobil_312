/*
* File: rhombus.js
* Author: Bartha Levente
* Copyright: 2026, Bartha Levente
* Group: IN
* Date: 2026-03-11
* Github: https://github.com/barthaleventegabor/
* Licenc: MIT
*/
function calcRadius(side, angle) {
    const rad = angle * (Math.PI / 180);

    return (side * Math.sin(rad)) / 2;
}

export { calcRadius };