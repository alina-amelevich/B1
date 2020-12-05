'use strict'

function calcCentury(year) {
    return Math.floor(year/100 + 1);
}
function calcCenturyPastEra(year) {
    return Math.ceil(year/100 - 1);
}

function runB1() {
    try {
        let userYear = parseInt(prompt('Введите год целым числом'));
        try {
            let forCheck = {1:true}; //для проверки
            let key = userYear / Math.abs(userYear); //если user указал год как положит.число - key=1, если отриц. - key=(-1) 
            forCheck[key].toString(); //проверка - вызвать обработчик исключений или нет -продолжение ниже->
            //если key=1 ->forCheck[1]- по ключу найдется значение хэша и преобразуется в строку(просто так), ->
            //если key=-1 ->forCheck[-1]- такого ключа не найдется и при попытке преобразования в строку возникнет исключение, -> 
            //что запустит выполнение блока "catch", где будет рассчитан век до нашей эры
            console.log('Исключение не сработало');
            alert(calcCentury(userYear) + ' век');
        } catch(ex) {
            alert(Math.abs(calcCenturyPastEra(userYear)) + ' век до нашей эры');
            console.log('Исключение отработало');
        }
    } catch(ex) {
        alert('Что-то пошло не так, попробуйте еще раз!');
    }
}
