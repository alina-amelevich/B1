'use strict'

function calcCentury(year) {
    return (Math.floor((year/100) + 1));
}
function calcCenturyPastEra(year) {
    return (Math.ceil(year/100));
}

function runB1() {
    try {
        let userYear = parseInt(prompt('Введите год целым числом'));
        try {
            1 / ((userYear / Math.abs(userYear) + 1) / 2);
            alert(calcCentury(userYear) + 'век');
        } catch(ex) {
            alert(Math.abs(calcCenturyPastEra(userYear)) + 'век до нашей эры');
            return;
        }
    } catch(ex) {
        alert('Что-то пошло не так, попробуйте еще раз!');
    }
}
