// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
/*const f1 = document.createElement('form');
const nameInput = document.createElement('input');
nameInput.type = 'text';
const ageInput = document.createElement('input');
ageInput.type = 'text';
const but = document.createElement('button');
but.textContent = 'ok'
f1.append(ageInput,nameInput,but)
document.body.appendChild(f1)

but.onclick = function (ev) {

    localStorage.setItem('user',`name: ${nameInput.value} age: ${ageInput.value}`)
}*/

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
/*let {model,type,volume} = document.forms.f1
let key = 'auto';
const puth = (model,type,volume) => {
    const a = JSON.parse(localStorage.getItem(key)) || [];
    a.push({model,type,volume});
    localStorage.setItem(key,JSON.stringify(a))
}
const btn = document.getElementById('btn');
btn.addEventListener('click', function (ev) {
    puth(model.value, type.value, volume.value)
})*/

// є масив -
/*
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let kay = 'kay';
localStorage.setItem(kay, JSON.stringify([]));
users.forEach(value => {
    const divka = document.createElement('div');
    divka.innerHTML = `${value.name} ${value.age} ${value.status}`;
    const but = document.createElement('button');
    but.textContent = 'додати до улюблених';
    but.onclick = () => {
        const a = JSON.parse(localStorage.getItem(kay)) || [];
        a.push(value);
        localStorage.setItem(kay, JSON.stringify(a));
        but.disabled = true;
    }
    document.body.append(divka,but);
})


const button = document.createElement('button');
button.innerHTML = `<a href="favorites.html" >Favirites Collection</a>`;
button.style.display = 'block';
document.body.appendChild(button);
*/
