// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*function pram(a , b) {
    let res = a * b;
    return res
}
console.log(pram(10, 2));*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*function kolo(r) {
    let res = (3.14 * r) ** 2
    return res
}
console.log(kolo(3));*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*function cyl(h, r) {
    let res = (2 * 3.14 * h * r);
    return res
}

console.log(cyl(1,2));*/

// - створити функцію яка приймає масив та виводить кожен його елемент
/*function arr(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*
function text(text) {
    document.write(`<p>${text}</p>`);
}
text('asdasdasdasd');
*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function ulcreator(textofli) {
    document.write(`<ul>
<li>${textofli}</li>
<li>${textofli}</li>
<li>${textofli}</li>
</ul>`)
}
ulcreator('qwe');*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*function ulcrea(li, nth) {
    document.write('<ul>')
    for (let i = 0; i < nth; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write('</ul>')
}

ulcrea('qwasdasde', 3);*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let users = [
    {id: 1, name: 'Vasya', status: true},
    {id: 2, name: 'olya', status: false},
    {id: 3, name: 'maksim', status: true},
    {id: 4, name: 'andrey', status: false},
    {id: 5, name: 'valera', status: true}
];
function arr(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
arr(users);*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*let users = [
    {id: 1, name: 'Vasya', status: true},
    {id: 2, name: 'olya', status: false},
    {id: 3, name: 'maksim', status: true},
    {id: 4, name: 'andrey', status: false},
    {id: 5, name: 'valera', status: true}
];
function arr(arr) {
    for (let obj of arr) {
        document.write(`<div>${obj.id} ${obj.name} ${obj.status}</div>`)
    }
}
arr(users);*/

// - створити функцію яка повертає найменьше число з масиву
/*let arrs = [1, 2, 21, 2121, 11, 0.5];
function minnth(nth) {
    let nin = nth[0];
    for (const arr of nth) {
        if (arr < nin){
            nin = arr;
            console.log(nin);
        }
    }
}
minnth(arrs);*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад c->13
/*
let arr = [1,2,10];
function plus(nth) {
    let s = 0;
    for (const nthElement of nth) {
        s += nthElement;
    }
    return s;
}
console.log(plus(arr));*/
