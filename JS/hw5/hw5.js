// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*let arr = (arrr) => {
    let s = 0;
    for (const arrElement of arrr) {
        s +=arrElement
    }
    return s / arrr.length
}
a = [1,2,3,4,5,6,7]
console.log(arr(a));*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*let a = (...num) => {
    let s = num[0];
    let d = num[0];
    for (const item of num) {
        if (item < s){
            s = item
        }
        else if (item > s){
            d = item
        }
    }
    console.log(d);
    return s
}
a(1,2,3,4,5,6,7)*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*let a = () => {
    let b = [];
    for (let i = 0; i < 10; i++) {
        b[i] = Math.round(Math.random()*100)
    }
    return console.log(b);
}
a()*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*let a = (limit) => {
    let d = [];
    for (let i = 0; i < limit; i++) {
        d[i] = (Math.round(Math.random()*100))
    }
    return console.log(d);
}
a(10)*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*let a = (arr) => {
    let b = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        b.push(arr[i])
    }
    return console.log(b);
}
b = [1,2,3,4,5,6,7]
a(b);*/
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*let a = (a, b) => a * b;
console.log(a(10,2));*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*let a = (radius) => 3.14 * (radius * radius);
console.log(a(3));*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*let a = (h,r) => 2 * 3.14 * r * h;
console.log(a(1,2));*/

// - створити функцію яка приймає масив та виводить кожен його елемент
/*let a = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
b = [1,2,3,4,5,6,7];
a(b)*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*let a = (text) => document.write(`<p>${text}</p>`);
a('asddasddsa');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*let a = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
a('qwerty');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*let a = (text, nth) => {
    document.write(`<ul>`)
    for (let i = 0; i < nth; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
a('qweewq', 7)*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let a = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
};
let users = [1,'qweqwr',true,12,false,'qwerew'];
a(users);*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*let a = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.status}</div>`)
    }
};
let users = [
    {id: 1, name: 'Vasya', status: true},
    {id: 2, name: 'olya', status: false},
    {id: 3, name: 'maksim', status: true},
    {id: 4, name: 'andrey', status: false},
    {id: 5, name: 'valera', status: true}
];
a(users);*/

// - створити функцію яка повертає найменьше число з масиву
/*let a = (arr) => {
    let s = arr[0]
    for (let arrElement of arr) {
        if (arrElement < s){
            s = arrElement
        }
    }
    return console.log(s);
}
d = [3,5,2,1,7];
a(d);*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let a = (arr) => {
    let s = 0;
    for (let item of arr) {
        s += item
    }
    return console.log(s);
};
let d = [1,2,3,4,5,6,7];
a(d);*/
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
/*let a = (arr) => {
    let s = arr[0];
    arr[0] = arr[1];
    arr[1] = s
    return arr
};

let r = [
    {id:1, name: 'qwe'},
    {id:2, name:'rty'}
];
console.log(a(r));*/

/*let r = [
    {id:1, name: 'qwe'},
    {id:2, name:'rty'},
    {id:3, name:'wert'}
    ];
let a = (arr) => [arr[0], arr[1], arr[2]] = [arr[2], arr[1], arr[0]];
console.log(a(r));*/


/*
------------------------------------------------------------------------------------------------------------------------------------------
                                                      A D D I T I O N A L                                                                 */

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*let f = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else if (num3 < num1 && num3 < num2){
        console.log(num3);
    }
    else {NaN}
        }
        f(7,3,12)*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*let f = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if (num3 > num1 && num3 > num2){
        console.log(num3);
    }
    else {NaN}
        }
        f(7,3,12)*/

// - створити функцію яка повертає найбільше число з масиву
/*let f = (arr) => {
    let s = arr[0];
    for (const item of arr) {
        if (item>s){
            s = item
        }
    }
    return console.log(s);
}
f([1,2,3,4])*/

// - створити функцію яка повертає найменьше число з масиву
/*let f = (arr) => {
    let s = arr[0];
    for (const item of arr) {
        if (item<s){
            s = item
        }
    }
    return console.log(s);
}
f([1,2,3,4])*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let f = (arr) => {
    let s = 0;
    for (let arrElement of arr) {
        s += arrElement
    }
    return console.log(s);
}
f([1,2,3,1])*/
//

// - Дано натуральное число n. Выведите все числа от 1 до n.
/*let f = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};
f(7);*/

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
/*let a = 12;
let b = 7;
let f = (a,b) => {
    if (a<b){
        for (let i = 1; i <= b; i++) {
            console.log(i);
        }
    }
    else if (a>b){
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
};
f(a,b);*/
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

/*let f = (arr,i) => {
    if (i>arr.length){
        console.log('error');
    }
    else {
        let num = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = num
console.log(arr);
    }
}
f([9,8,0,4], 0)*/
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
/*
let s = (arr) => {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            a.push(arr[i])
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            a.push(arr[i])
        }

    }
    return a
}
console.log(s([0,1,2,3,4]));
*/





















