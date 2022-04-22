// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*let a = 0;

if (a !== 0) {
    console.log('вірно')}
    else { console.log('невірно')}*/


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*
let time = +prompt('select minute')

if (time >= 0 && time <= 15) {
    console.log('1 chvert');
} else if (time >= 16 && time <= 30) {
    console.log('2 chvert');
} else if (time >= 31 && time <= 45) {
    console.log('3 chvert');
} else if (time >= 46 && time <= 59) {
    console.log('4 chvert');
}
*/


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
//

/*
let day = +prompt('select number with 1 to 31')

if (day >= 0 && day <= 10) {
    console.log('1 d');
} else if (day >= 11 && day <= 20) {
    console.log('2 d');
} else if (day >= 21 && day <= 31) {
    console.log('3 d');
}
*/

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
//


/*
let day = +prompt('choose day of week');

switch (day) {
    case (1):
        console.log('monday');
        break;
    case (2):
        console.log('thusday');
        break;
    case(3):
        console.log('wednesday');
        break;
    case(4):
        console.log('thursday');
        break;
    case(5):
        console.log('friday');
        break;
    case(6):
        console.log('sataday');
        break;
    case(7):
        console.log('sanday');
        break;
    default:
        console.log('try again');
}
*/


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

/*

let a = +prompt('choose first number');
let b = +prompt('choose second number');

if (a>b){
    console.log(a);
}
else if (a<b){
    console.log(b);
}
else if (a===b){
    console.log('odynakove');
}
else {console.log('try again');}
*/

