// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.length);
console.log(b.length);
console.log(c.length);*/

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());*/

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*let a = 'HELLO WORLD';
let b = 'LOREM IPSUM';
let c = 'JAVASCRIPT IS COOL';
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str = ' dirty string   '
console.log(str.trim());*/


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
/*let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));*/


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
/*let a =[10,8,-7,55,987,-1011,0,1050,0];
console.log(a.map(value => value.toString()));
console.log(a.map(value => value + ''));*/

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
/*let q = [11,21,3];
function sortNums(nums, wtf) {
if (wtf === 'ascending'){
    nums.sort((a, b) => a - b)
}
if (wtf ==='descending'){
   nums.sort((a, b) => b - a)
}
return nums
};
console.log(sortNums(q, 'ascending'));*/


// - є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
/*// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));*/


//
// описати колоду карт
/*
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

/!*let coloda = [
    {cardSuit:'spade', value: '6', color: 'black'},
    {cardSuit:'spade', value: '7', color: 'black'},
    {cardSuit:'spade', value: '8', color: 'black'},
    {cardSuit:'spade', value: '9', color: 'black'},
    {cardSuit:'spade', value: '10', color: 'black'},
    {cardSuit:'spade', value: 'jack', color: 'black'},
    {cardSuit:'spade', value: 'queen', color: 'black'},
    {cardSuit:'spade', value: 'king', color: 'black'},
    {cardSuit:'spade', value: 'ace', color: 'black'},
    {cardSuit:'diamond', value: '6', color: 'red'},
    {cardSuit:'diamond', value: '7', color: 'red'},
    {cardSuit:'diamond', value: '8', color: 'red'},
    {cardSuit:'diamond', value: '9', color: 'red'},
    {cardSuit:'diamond', value: '10', color: 'red'},
    {cardSuit:'diamond', value: 'jack', color: 'red'},
    {cardSuit:'diamond', value: 'queen', color: 'red'},
    {cardSuit:'diamond', value: 'king', color: 'red'},
    {cardSuit:'diamond', value: 'ace', color: 'red'},
    {cardSuit:'heart', value: '6', color: 'red'},
    {cardSuit:'heart', value: '7', color: 'red'},
    {cardSuit:'heart', value: '8', color: 'red'},
    {cardSuit:'heart', value: '9', color: 'red'},
    {cardSuit:'heart', value: '10', color: 'red'},
    {cardSuit:'heart', value: 'jack', color: 'red'},
    {cardSuit:'heart', value: 'queen', color: 'red'},
    {cardSuit:'heart', value: 'king', color: 'red'},
    {cardSuit:'heart', value: 'ace', color: 'red'},
    {cardSuit:'clubs', value: '6', color: 'black'},
    {cardSuit:'clubs', value: '7', color: 'black'},
    {cardSuit:'clubs', value: '8', color: 'black'},
    {cardSuit:'clubs', value: '9', color: 'black'},
    {cardSuit:'clubs', value: '10', color: 'black'},
    {cardSuit:'clubs', value: 'jack', color: 'black'},
    {cardSuit:'clubs', value: 'queen', color: 'black'},
    {cardSuit:'clubs', value: 'king', color: 'black'},
    {cardSuit:'clubs', value: 'ace', color: 'black'},
    {cardSuit:null, value: 'joker', color: 'black'},
    {cardSuit:null, value: 'joker', color: 'red'}
];*!/

// - знайти піковий туз
// console.log(coloda.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
// - всі шістки
// console.log(coloda.filter(a => a.value === '6'));
// - всі червоні карти
// console.log(coloda.filter(value => value.color === 'red'));
// - всі буби
// console.log(coloda.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
// console.log(coloda.filter(value => value.cardSuit === 'clubs' && value.value > '8' || value.value === '10' && value.cardSuit === 'clubs'));*/

// -------------------------------------------------------------------------------------------------------------------------
//                                   A D D I T I O N A L


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
/*function cutString(str , n) {
    let a = [];
    for (let i = 0; i < str.length; i+= n) {
        a.push(str.substring(i,i+n))

    }
    return a
}
console.log(cutString('наслаждение', 3));*/

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
/*let delete_characters = (str, length) => str.slice(0,length);

let a = 'Каждый охотник желает знать'
console.log(delete_characters(a, 12));*/
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
/*let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');

let a = "HTML JavaScript PHP"
document.write(insert_dash(a));*/
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
/*let a = "html";
let f = (str) => str.replace(str[0], str[0].toUpperCase());

console.log(f(a));*/


// - Дано список імен.
/*   let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normalize = function (str) {
   let q = str.replaceAll('.', ' ')
       .replaceAll('-',' ')
       .replaceAll('_', ' ')
       .replace(' ', '')
   if (q.includes('  ')){
      q = q.replace('  ', ' ')
   }
   return q
}
console.log(normalize(n2));*/

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
/*let a = () => {
    let b = [];
    for (let i = 0; i < 7; i++) {
        b.push(Math.round(Math.random()*100))
    }
    return b
}
console.log(a());*/

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
/*let a = () => {
    let b = [];
    for (let i = 0; i < 7; i++) {
        b.push(Math.round(Math.random()*100))
    }
    b.sort((a1, b1) => a1-b1)
    return b
}
console.log(a())*/

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
/*let a = () => {
    let b = [];
    for (let i = 0; i < 7; i++) {
        b.push(Math.round(Math.random() * 100))
    }
    let q = b.filter(value => (value % 2 === 0) && value !== 0)
    return q
}
console.log(a())*/
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
/*let s = 'Каждый охотник желает знать'
let capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
console.log(capitalize(s));*/


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
/*let a = 'someemail@gmail.com'
let b = 'someeMAIL@gmail.com'
let c = 'someeMAIL@i.ua'
let d = 'some.email@gmail.com'

let validator = (str) => {
    let s = str
    if (s.indexOf('@') > 3 && s.includes('@')) {
        s = s.split('@')
        if (s[1].indexOf('.') >= 2) {
            s = s.join('@').toLowerCase()
        } else {
            s = console.log('mail is not true');
        }
    }
    return s
}
console.log(validator(c));*/
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
/*let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));*/
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
/*    let symb = "о", q = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str, stringsearch) => {
    let a = []
    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase()[i] === stringsearch){
            a.push(str.toLowerCase()[i])
        }
    }
    b = a.length
    return b
}
console.log(count(q, symb));*/
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
/*let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString = (str, n) => str.split(' ').slice(0,n).join(' ');

document.writeln(cutString(str, 5))*/
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
/*let books = [
    {name: 'q', pages: 123, autors: 'Mc.Calcin', ganre: 'Horror'},
    {name: 'qw', pages: 2231, autors: 'Mc.Calcin1, Mc.Calcin2', ganre: 'Horror'},
    {name: 'qwerty', pages: 322, autors: 'Mc.Calcin3', ganre: 'Horror, detective'},
    {name: 'qwer', pages: 421, autors: 'Mc.Calcin4', ganre: 'Horror'},
    {name: 'qwert', pages: 52, autors: 'Mc.Calcin5', ganre: 'Horror'}
]
// -знайти наібльшу книжку. не зовсім розумію найбільшу книжку за чим? за довжиною об'єкта?
console.log(books.sort((a, b) => a.pages - b.pages));
// - знайти книжку/ки з найбільшою кількістю жанрів. Теж не зовсім зрозуміло, повинно бути жанр1:мщоамуам жанр2:моам і т.д. чи жанр: 'і в одній стрінзі всіх авторів перечислити?'
console.log(books.sort((a, b) => b.ganre - a.ganre));
// - знайти книжку/ки з найдовшою назвою
console.log(books.sort((a, b) => b.name.length - a.name.length));
// - знайти книжку/ки які писали 2 автори. Те саме що з жанрами питання, просто в один кей вписати і за довжиною визначати??

// - знайти книжку/ки які писав 1 автор Те саме питанння що і в вищому
// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a, b) => a.pages - b.pages));*/
