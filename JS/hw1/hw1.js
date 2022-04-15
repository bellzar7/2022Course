/*
1
let a = 'hello';
console.log(a);
alert(a);
document.write(a);

let b = 'owu'
console.log(b);
alert(b);
document.write(b);

let c = 'com';
console.log(c);
alert(c);
document.write(c);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);

let e = 1;
console.log(e);
alert(e);
document.write(e);

let f = 10;
console.log(f);
alert(f);
document.write(f);

let g = -999;
console.log(g);
alert(g);
document.write(g);

let h = 123;
console.log(h);
alert(h);
document.write(h);

let i = 3.14;
console.log(i);
alert(i);
document.write(i);

let j = 2.7;
console.log(j);
alert(j);
document.write(j);

let k = 16;
console.log(k);
alert(k);
document.write(k);

let l = 5 < 6;
console.log(l);
alert(l);
document.write(l);

let m = 5 > 6;
console.log(m);
alert(m);
document.write(m);
*/
/*

2
let book = {
    name: 'namebook',
    pages: 328,
    ganre: 'horror'
}

console.log(book);*/

/*
3
let book = {
    name: 'atlant',
    pages: 1200,
    ganre: 'literature',
    autor: ['roy', 'jones', 'jr']
}

console.log(book.autor[0]);
*/

/*
4
let firstName = 'Nazariy';
let lastName = 'Belelya';
let middleName = 'Ivanovych';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);
*/

/*
5
let name = prompt('what is your first name?');
let sname = prompt('what is your last name?');
let age = prompt('how old are you?');
let person = `${name} ${sname} ${age}`
let person = (name + sname + age);
console.log(person);
*/

/*
6
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
*/

/*7
let book = [
    {name:'name',pages:123,ganre:'ganre',autors:'autors'},
    {name:'name1',pages:1234,ganre:'ganre1',autors:'autors1'},
    {name:'name2',pages:12345,ganre:'ganre2',autors:'autors2'},
];
console.log(book[0]);
console.log(book[1]);
console.log(book[2]);*/

// additional

/*8
let h = 23;
let w = 10;
let s = w * h;
console.log(s);*/

/*9
let hC = 10;
let dC = 4;
let rC = dC / 2;
let P = 3.14;
let v = P*rC**rC*hC;
console.log(v);*/

/*10
let n = 3;
let m = 4;
let k = Math.sqrt((Math.pow(n,2) + m**2));
console.log(k);*/

/*11
console.log(5<6);
console.log(5>6);
console.log(5==6);
console.log(5===6);
console.log(10==10);
console.log(10===10);
console.log(10<10);
console.log(10>10);
console.log(10!=10);
console.log(123==='123');
console.log(123=='123');*/


let a = 100;
let b = 500;
let c = "hello";
let d = "okten";
const x = 'constant value';
{
    console.log(a);
    /*x = 'new value';*/ /*константу не можна змінювати*/
}
b = 'new value';  /*b вже визначене, не писати лет, а просто б=*/

let result = 100 + 'y'; /*тут у зробити стрінгом або дати значення*/

console.log(result); /*тут добавити log*/
