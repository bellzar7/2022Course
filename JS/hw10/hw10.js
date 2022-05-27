// const divka = document.createElement('div');
// divka.style.width  = '200px';
// divka.style.height = '200px';
// divka.style.border  = 'solid 1px red';
// document.body.appendChild(divka);
//
//
//
// divka.onmousedown = function (omd) {
//     console.log('down');
//     this.onmousemove = function (omm) {
//         console.log('move');
//     }
// }
//
// divka.onmouseup = function (omu) {
//     console.log('up');
//     this.onmousemove = null
// }
//
//
//
// laa = function (event) {
//     console.log('move');
// }
// divka.addEventListener('mousedown',function (md) {
//     console.log('down');
//     this.addEventListener('mousemove',laa)
// })
//
// divka.addEventListener('mouseup',function (mu) {
//     console.log('up');
//     this.removeEventListener('mousemove',laa)
// })

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
/*const divka = document.createElement('div');
divka.setAttribute('id', 'text');
divka.innerText = 'asdqweasdqwe'
document.body.appendChild(divka);
const buton = document.getElementsByTagName('button')[0];
buton.onmousedown = function (ock) {
    divka.style.display = 'none'
}
buton.onmouseup = function (omu) {
    divka.style.display = 'block'
}

buton.onclick = function (omu) {
    divka.style.visibility = 'hidden'
}

buton.onclick = function (omu) {
    divka.remove()
}*/

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
/*const but = document.getElementsByTagName('button')[0];
const inp = document.querySelector('input');
but.onclick = function (ock) {
if (inp.value < 18){
    console.log('shchenok');
    inp.value = '';
}
else console.log('ebar`');
    inp.value = '';
}*/


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
/*const f2 = document.getElementsByName('f2')[0];
const f1 = document.forms.f1;
const but = document.getElementsByTagName('button')[0];
but.onclick = function (ock) {
    let f1tel = f1.inputTelephone;
    console.log(f1tel.name + ' - ' + f1tel.value);
    f1tel.value = '';

    let f1text = f1.inputText;
    console.log(f1text.name + ' - ' + f1text.value);
    f1text.value = '';

    let f2tel = f2.inputTelephone2;
    console.log(f2tel.name + ' - ' + f2tel.value);
    f2tel.value = '';

    let f2text = f2.inputText2;
    console.log(f2text.name + ' - ' + f2text.value);
    f2text.value = '';

}*/


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
/*
let but = document.getElementsByName('clickButton')[0];
let inpX = document.getElementsByName('xxx')[0];
let inpY = document.getElementsByName('yyy')[0];
let inpT = document.getElementsByName('inptext')[0];

let globalWrap = document.createElement('div');
document.body.appendChild(globalWrap)


but.onclick = function () {
    let valueX = inpX.value;
    let valueY = inpY.value;
    let valueT = inpT.value;

    function create(va, val, text) {


    for (let i = 0; i < va; i++) {
        let divka = document.createElement('div');
        divka.style.display = 'flex';
        divka.style.justifyContent = 'space-around';
        divka.style.marginTop = '5px';
        globalWrap.appendChild(divka)
        for (let j = 0; j < val; j++) {
            let indiv = document.createElement('div');
            indiv.style.border = 'solid 2px red';
            indiv.innerHTML = `${text}`
            divka.appendChild(indiv)
        }

    }

}
create(valueX,valueY,valueT)
}*/

// TOGGLE ПРИКЛАД !!! нижче + style in head

/*
let divka = document.createElement('div');
document.body.appendChild(divka);
let h2 = document.createElement('h2');
divka.appendChild(h2);
let ul = document.createElement('ul');
divka.appendChild(ul);
ul.innerHTML = `<li>qwe</li><li>qweqwe</li><li>qwewre</li>`;
h2.innerText = 'qweqweqwe';
h2.onclick = function (ev) {
    divka.classList.toggle('on')
}*/

/*
------------------------------------------------------------------------------------------------------------------------
                                                    A D I T I O N A L                                                 */

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
/*let a = ['Putin', 'PUTIN', 'putin'];
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'write - putin';
const button = document.createElement('button');
button.innerText = 'CLICK';
document.body.append(input,button);
button.addEventListener('click', function (ck) {
    for (const aEl of a) {
        if (aEl == input.value){
            alert('xyilo');
            input.value = '';
        }
    }
})*/



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
/*let a = ['путін', 'Путін','ПУТІН'];
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'write a sentence';
const but = document.createElement('button');
but.innerText = 'CLICK';
document.body.append(input,but);
but.addEventListener('click', function (ev) {
    let arrSent = input.value.split(' ');
    for (let i = 0; i < arrSent.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (arrSent[i] == a[j]) {
                alert('are you know putin? he is faking ass! ')
            }

        }


    }
}
);*/



// - Создайте меню, которое раскрывается/сворачивается при клике
/*const wrap = document.createElement('div');
wrap.innerText ='MENU:'
document.body.appendChild(wrap)
const ul = document.createElement('ul');
wrap.appendChild(ul);
const li = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.append(li,li1,li2);
li.innerText = 'Fishes';
li1.innerText = 'Vegetables';
li2.innerText = 'Fruits';
wrap.addEventListener('click', function (ck) {
    wrap.classList.toggle('on')
})*/



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
/*let a = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'qwe', body:'lorem ipsum dolo sit'},
    {title : 'rty', body:'lorem ipsum dolo'},
    {title : 'asd', body:'lorem ipsum'},
    {title : 'fgh', body:'lorem ipsum dolo sit ameti qweewq'},
    {title : 'zxccxz', body:'lorem  dolo sit ameti asd123'},
    {title : 'edcvfr', body:'lorem ipsum dolo zxcvvrty32190'}
];
const globalWrap = document.createElement('div');
document.body.appendChild(globalWrap);
for (let i = 0; i < a.length; i++) {

    wrap = document.createElement('div')
    wrap.innerHTML = `<hr><h2>${a[i].title}</h2><br><p>${a[i].body}</p>`;

    button = document.createElement('button');
    button.innerText = 'CLICK';

    pshka = document.getElementsByTagName('p');

    button.onclick = function (ev) {
        pshka[i].classList.toggle('add')
    }

    wrap.appendChild(button)
    globalWrap.append(wrap)

}*/



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
/*const bur = document.createElement('button');
bur.innerText = 'CLICK';
bur.onclick = function (ck) {
    bur.style.visibility = 'hidden'
};
document.body.appendChild(bur);*/



// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
/*const wrap = document.createElement('div');
wrap.classList.add('korova')
wrap.classList.add('korova1')
const h2 = document.createElement('h2');
h2.innerText = 'qweqweqw';
const pshka = document.createElement('p');
pshka.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequatur!';
wrap.append(h2,pshka);
document.body.appendChild(wrap);
const divka = document.createElement('div');
divka.style.height = '200px';
divka.style.width = '200px';
divka.style.backgroundColor = 'darkgreen';
divka.id = 'telyatko'
document.body.appendChild(divka)

addEventListener('click', function (ck) {
    console.log(ck);
    console.log(ck.target.localName , ck.target.className , ck.target.id, ck.target.offsetHeight , ck.target.offsetWidth );
})*/



// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
/*const wrap = document.createElement('div');
wrap.classList.add('korova');
wrap.classList.add('korova1');
const h2 = document.createElement('h2');
h2.innerText = 'qweqweqw';
const pshka = document.createElement('p');
pshka.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequatur!';
wrap.append(h2,pshka);
document.body.appendChild(wrap);
const divka = document.createElement('div');
divka.style.height = '200px';
divka.style.width = '200px';
divka.style.backgroundColor = 'darkgreen';
divka.id = 'telyatko';
document.body.appendChild(divka);

addEventListener('click', function (ck) {
    alert( `name - ${ck.target.localName} , class - ${ck.target.className} , id - ${ck.target.id}, height - ${ck.target.offsetHeight} , width - ${ck.target.offsetWidth}`);
})*/



// -- взять массив пользователей
/*let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// ---------------------------------------html this task in additional.html-------------------------------------------
const statusInput = document.querySelector('input[name=status]');
const ageInput = document.querySelector('input[name=age]');
const cityInput = document.querySelector('input[name=city]');
let a ;

function foo(users) {
    let box = document.getElementsByClassName('usersBox')[0];
    box.innerHTML = '';
    for (const user of users) {
        let divka = document.createElement('div');
        divka.innerHTML = `${user.age} ${user.status} ${user.address.city}`
        box.appendChild(divka)
        document.body.appendChild(box)
    }
}

statusInput.addEventListener('click', function (ck) {
    if (this.checked) {
        a = usersWithAddress.filter(value => !value.status)
        foo(a)
    }
    if (this.checked && ageInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.age >= 29)
        foo(a)
    }
    if (this.checked && cityInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.address.city === 'Kyiv')
        foo(a)
    }
    if (this.checked && ageInput.checked && cityInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.age >= 29 && value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && ageInput.checked && !cityInput.checked) {
        a = usersWithAddress.filter(value => value.age >= 29)
        foo(a)
    }
    if (!this.checked && ageInput.checked && cityInput.checked) {
        a = usersWithAddress.filter(value => value.age >= 29 && value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && cityInput.checked && !ageInput.checked) {
        a = usersWithAddress.filter(value => value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && !ageInput.checked && !cityInput.checked) {
        a = []
        foo(a)
    }
})
ageInput.addEventListener('click', function (ck) {
    if (this.checked){
        a= usersWithAddress.filter(value => value.age >= 29)
        foo(a)
    }
    if (this.checked && statusInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.age >= 29)
        foo(a)
    }
    if (this.checked && cityInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.address.city === 'Kyiv')
        foo(a)
    }
    if (this.checked && statusInput.checked && cityInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.age >= 29 && value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && statusInput.checked && !cityInput.checked) {
        a = usersWithAddress.filter(value => !value.status)
        foo(a)
    }
    if (!this.checked && statusInput.checked && cityInput.checked) {
        a = usersWithAddress.filter(value => !value.status && value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && cityInput.checked && !statusInput.checked) {
        a = usersWithAddress.filter(value => value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && !statusInput.checked && !cityInput.checked) {
        a = []
        foo(a)
    }
})
cityInput.addEventListener('click', function (ck) {
    if (this.checked){
        a= usersWithAddress.filter(value => value.address.city === 'Kyiv')
        foo(a)
    }
    if (this.checked && statusInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.age >= 29)
        foo(a)
    }
    if (this.checked && ageInput.checked){
        a = usersWithAddress.filter(value => value.age >= 29 && value.address.city === 'Kyiv')
        foo(a)
    }
    if (this.checked && statusInput.checked && cityInput.checked){
        a = usersWithAddress.filter(value => !value.status && value.age >= 29 && value.address.city === 'Kyiv')
        foo(a)
    }
    if (!this.checked && ageInput.checked && !statusInput.checked) {
        a = usersWithAddress.filter(value => value.age >= 29)
        foo(a)
    }
    if (!this.checked && ageInput.checked && statusInput.checked) {
        a = usersWithAddress.filter(value => value.age >= 29 && !value.status)
        foo(a)
    }
    if (!this.checked && statusInput.checked && !ageInput.checked) {
        a = usersWithAddress.filter(value => !value.status)
        foo(a)
    }
    if (!this.checked && !ageInput.checked && !statusInput.checked) {
        a = []
        foo(a)
    }
})*/



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
/*const wrap = document.createElement('div');
wrap.classList.add('korova');
wrap.classList.add('korova1');
const h2 = document.createElement('h2');
h2.innerText = 'qweqweqw';
const pshka = document.createElement('p');
pshka.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequatur!';
wrap.append(h2,pshka);
document.body.appendChild(wrap);
const divka = document.createElement('div');
divka.style.height = '200px';
divka.style.width = '200px';
divka.style.backgroundColor = 'darkgreen';
divka.id = 'telyatko';
document.body.appendChild(divka);


const but1 = document.createElement('button');
but1.innerText = 'BACK';
const but2 = document.createElement('button');
but2.innerText = 'NEXT';
document.body.append(but1,but2)

function foo(start) {
    let childs = start.children
    but2.addEventListener('click', function (ck) {
        for (let i = 0; i < childs.length; i++) {
            console.log(childs[i]);
        }
    })
}
foo(document.body)*/
// мозок вскипів після цієї рекурсії і баста, хз як записати перший елемент і щоб його вивело а інші ні


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
/*
const pshka = document.createElement('p');
pshka.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ut.';
document.body.appendChild(pshka)
pshka.addEventListener('click',function (ck) {
    console.log(ck);
})*/
// тут типу коли робить маусдаун потім веде мишою і остання подія маус ап, як тоді взяти виділений сегмент і зробити жирним.
// Чекаю дуже додатковий урок щоб розібрати ці завдання, бо дуже цікаві, а як робити хз, останні хз взагалі нема розуміння як