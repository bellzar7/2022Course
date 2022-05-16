// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
/*const a = document.getElementById('content')
const b = a.innerText
console.log(b);*/

// -- отримує текст з блоку з id "rules"
/*const a = document.getElementById('rules')
const b = a.innerText
console.log(b);*/

// -- замініть текст параграфа з id 'content' на будь-який інший
/*const a = document.getElementById('content')
a.innerText = 'qwerty123456'
a.innerHTML = 'qwerty123456'
a.textContent = 'qwerty123456'*/

// -- замініть текст параграфа з id 'rules' на будь-який інший
/*const a = document.getElementById('rules')
a.innerText = 'qwerty123456'
a.innerHTML = 'qwerty123456'
a.textContent = 'qwerty123456'*/

// -- змініть кожному елементу колір фону на червоний
/*const children = document.body.children
for (const child of children) {
    child.style.backgroundColor = 'red'
}*/

// -- змініть кожному елементу колір тексту на синій
/*const a = document.querySelectorAll('*')
for (const child of a) {
    child.style.color = 'blue'
}*/

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
/*let a = document.getElementById('rules')
console.log(a);*/

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
/*const a = document.getElementsByClassName('fc_rules')
for (const aElement of a) {
    aElement.style.color = 'red'
}*/
//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
/*const a = document.getElementById('main_header')
a.className = 'group2'
a.classList.add('group1')
a.setAttribute('class','group')
console.log(a);*/

// b) робить шириниу елементу ul 400px
/*const htmluListElement = document.querySelector('ul')
htmluListElement.style.width = '400px'*/

// c) робить шириниу всіх елементів з класом linkList шириною 50%
/*const elementsByClassName = document.getElementsByClassName('linkList');
for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.style.width = '50%'
}*/

// d) отримує текст який зберігається в елементі з класом listElement2
/*const element = document.querySelector('.listElement2');
console.log(element.innerText);*/

// e) отримує всі елементи li та змінює ім колір фону на сірий
/*const elementsLi = document.getElementsByTagName('li');
for (const elementsLiElement of elementsLi) {
    elementsLiElement.style.background = 'gray'
}*/

// f) отримує всі елементи 'a' та додає їм клас anchor
/*const elementsA = document.getElementsByTagName('a');
for (const elementsAElement of elementsA) {
    elementsAElement.classList.add('anchor')
}*/

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу// дорівнює link3, змінює йому розмір тексту на 40 пікселів
/*const AElements = document.getElementsByTagName('a');
for (const aElement of AElements) {
    if (aElement.innerText === 'link3'){
        aElement.style.fontSize = '40px'
    }
}*/

// h) отримує всі елементи 'a' та додає їм клас element_XXX.// Де XXX - текстовий контент елементу a
/*const Aelements = document.getElementsByTagName('a');
for (const aelement of Aelements) {
    aelement.classList.add(`element_${aelement.innerText}`)
}*/

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*const color = prompt('what color do you prefer?')
const elementNodeListOf = document.querySelectorAll('.sub-header');
for (const elementNodeListOfElement of elementNodeListOf) {
    elementNodeListOfElement.style.background = color
}*/

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*const colorOfText = prompt('choose your color')
const elementNodeListOf = document.querySelectorAll('.sub-header');
for (const elementNodeListOfElement of elementNodeListOf) {
    if (elementNodeListOfElement.innerText === 'content 2 segment'){
        elementNodeListOfElement.style.color = colorOfText
    }
}*/

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*const text = prompt('select text')
const elementsByClassName = document.getElementsByClassName('content_1')[0]
elementsByClassName.innerText = text*/

// l) отримати елементи p та змінити їм padding на 20px
/*const PElements = document.getElementsByTagName('p');
for (const pElement of PElements) {
    pElement.style.padding = '20px'
}*/

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
/*const elementsByClassName = document.getElementsByClassName('text2');
for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.innerText = 'march-2022'
}*/

/*
------------------------------------------------------------------------------------------------------------------------
                                            A D D I T I O N A L                                                         */
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let a = []
function foo(start) {
    let children = start.children;
    for (const child of children) {
        let value = child.classList.value;
        if (value !== '') {
            a.push(value)
        }
        foo(child)
    }

}
foo(document.body)
console.log(a);
