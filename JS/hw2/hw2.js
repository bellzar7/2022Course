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


/*------------------------------------------------------------------------------------------------------------------
                                    A D D I T I O N A L*/

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
/*let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('it is a big mas');}
else{
    console.log('its a small mas');
    }*/

//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
/*let a = +prompt('choose a num1');
let b = +prompt('choose a num2');
let c = +prompt('choose a num3');
if ((a < b && a > c) || (a > b && a < c)){
    console.log(a);
}
else if ((b < a && b > c) || (b > a && b < c)){
    console.log(b);
}
else if ((c < a && c > b) || (c > a && c < b)){
    console.log(c);
}
else {console.log('wtf???');}*/

//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
/*let result = (+prompt('choose a num') + +prompt('choose a num') < 4)? 'malo' : 'bagato';
console.log(result);*/

//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
/*let how = (+prompt('choose a num with -100 to 100')>=0)? 'positiv' : 'negative';
console.log(how);*/


//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
/*let test = !!' ';
if (test){
    console.log('virno');
}
else {console.log('nepravylno');}

test = !!'';
if (test){
    console.log('virno');
}
else {console.log('nepravylno');}

test = (!!' ')? console.log('virno') : console.log('nevirno');
test = (!!'')? console.log('virno') : console.log('nevirno');*/

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

/*let qw = prompt('Яка «офіційна» назва JavaScript?');
if (qw === 'ECMAScript'){
    console.log('right');
}
else {console.log('Не знаєте? ECMAScript!');}*/
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

/*let q = +prompt('choose a num of your flat')
if (q>=1 && q<=20){console.log('1 entrance');}
else if (q>=21 && q<=48){console.log('2 entrance');}
else if (q>=49 && q<=90){console.log('3 entrance');}
else {console.log(NaN);};*/

//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
/*let n = +prompt('choos a n')
if (n===10){console.log('virno');}
else {console.log('nevirno');}*/
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
/*let q = prompt('what a temp?')
if (q >= '+10' && q <= '+22') {
    console.log('ми йдемо ВЧИТИСЯ');
}
else {console.log('сидимо вдома і вчимося ОНЛАЙН');}*/
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
/*switch (+prompt('choose your n')) {
    case 1: console.log('avto');
    break;
    case 2: console.log('moto');
    break;
    case 3: console.log('velo');
    break;
    case 4: console.log('telefone');
    break;
    case 5: console.log('sopilka');
    break
    default: console.log('????');
}*/




























