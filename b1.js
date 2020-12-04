'use strict'

function calcCentury(year) {
    return (Math.floor((year/100) + 1));
}

function runB1() {
    try {
        let userYear = parseInt(prompt('Введите год нашей эры целым числом'));
        alert(calcCentury(userYear) + 'век');
    } catch(ex) {
        alert('Что-то пошло не так, попробуйте еще раз!');
    }
}
