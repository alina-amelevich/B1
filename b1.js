'use strict'

function calcCentury(year) {
    return (Math.floor((year/100) + 1));
}

function runB1() {
    let userYear = parseInt(prompt('Введите год целым числом'));
    alert(calcCentury(userYear) + 'век');
}
