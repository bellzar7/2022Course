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
}

let a = [1, 2, 3, 4, 5, 6]
arr(a)*/
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
/*let users = [1,'qweqwr',true,12,false,'qwerew'];
function arr(arr) {

        document.write(`<ul>`);
        for (const item of arr) {
            document.write(`<li>${item}</li>`)
        }
        document.write(`</ul>`);

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
/*let arrs = [1, 2, 21, 2121, 11, 0.5, -3];
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
let arr = [1,2,10,4];
function plus(nth) {
    let s = 0;
    for (const nthElement of nth) {
        s += nthElement;
    }
    return s;
}
console.log(plus(arr));
*/

/*
------------------------------------------------------------------------------------------------------------------------
                                           A D D I T I O N A L 1                                                        */

//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*function minnum(num1, num2, num3) {
    if (num1<num2 && num1<num3){return num1}
    else if (num2<num1 && num2<num3){return num2}
    else if (num3<num1 && num3<num2){return num3}
    else {return NaN}
}

console.log(minnum(11, 3, 2));*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function minnum(num1, num2, num3) {
    if (num1>num2 && num1>num3){return num1}
    else if (num2>num1 && num2>num3){return num2}
    else if (num3>num1 && num3>num2){return num3}
    else {return NaN}
}

console.log(minnum(7, 11, 2));*/

// - створити функцію яка повертає найбільше число з масиву
/*function minnum(arr) {
    let s = arr[0]
    for (const item of arr) {
        if (item<s){
            s=item
        }
    }
    return s;
}
a= [10,3,1]
console.log(minnum(a))*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*function serznach(arrnum){
    let s = 0
    for (const arrnumElement of arrnum) {
        s+=arrnumElement
    }
    return (s / arrnum.length)
}
let a = [1,2,3,4,5,6,7]
console.log(serznach(a));*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*function f(...num) {
    let s = num[0]
    let a = num[0]
    for (const numElement of num) {
        if (numElement > a) {
            a = numElement
        }
       else if (numElement < s) {
            s = numElement
        }
    }
    console.log(a);
    return s;
}

 f(3, 7, 4, 2, 3);*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*function f(...num) {
   let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random()*100)
    }
    return arr
}
console.log(f());*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*function rand(limit) {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random()*limit)
    }
    return arr
}
console.log(rand(27));*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*function f(arrs) {
    let a = []
    for (let i = arrs.length - 1; i >= 0; i--) {
        a.push(arrs[i])
    }
    return a
}
let d = [1,2,3,4,5,6,7]
console.log(f(d));*/
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*function f() {
    let s = 0
    if (arguments.length === 1) {
        return arguments;
    } else {
        for (const argumentElement of arguments) {

            s += argumentElement
        }
        return s
    }
}
console.log(f(12 , 11, 12));*/
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
/*function arrs(arr1,arr2) {
    let narr = [];
    for (let i = 0; i < arr1.length; i++) {
        narr.push(arr1[i]+arr2[i])
        }
    return narr
}

let a = [1,2,3,4];
let b = [2,3,4,5];
console.log(arrs(a,b));*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

/*function f(arr){
    let a = [];
    for (const item of arr) {
        for (const itemKey in item) {
            a.push(itemKey)
        }
    }
    return a;
}
let b = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(f(b));*/
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

/*
function f(arr) {
    let a = [];
    for (const item of arr) {
        for (const itemKey in item) {
            a.push(item[itemKey])
        }
    }
    return a;
}
let b = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(f(b));*/
