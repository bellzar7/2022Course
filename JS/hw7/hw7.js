// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

/*function Users(id, username, surname, email, phone) {
    this.id = id;
    this.username = username
    this.surname = surname
    this.email = email
    this.phone = phone
}

let user1 = new Users(23, 'qwe', 'rty', '@don', 1233);
let user2 = new Users(27, 'qwer', 'rtyq', '@don1', 21);
let user3 = new Users(353, 'qwert', 'rtyqw', '@don2', 13);
let user4 = new Users(54, 'qq', 'rew', '@don3', 16);
let user5 = new Users(532, 'ree', 'RAW', '@don4', 123);
let user6 = new Users(64, 'cvb', 'SmackDawn', '@don5', 122123);
let user7 = new Users(712, 'cveewb', 'wsx', '@don6', 11);
let user8 = new Users(83, 'vb', 'wsxfg', '@don7', 12);
let user9 = new Users(72, 'p2p', 'bin', '@don8', 7);
let user10 = new Users(10, 'b2b', 'banan', '@don9', 17);
let a = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
console.log(a);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(a.filter(value => value.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(a.sort((a, b) => a.id - b.id));*/
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
/*class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.clientName = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let a = []
a.push(new Client(1, 'q', 'q', '@q', 1, 12))
a.push(new Client(2, 'qw', 'qw', '@qw', 2, 6))
a.push(new Client(3, 'qwe', 'qwe', '@qwe', 3, 23))
a.push(new Client(4, 'qwer', 'qwer', '@qwer', 4, 11))
a.push(new Client(5, 'qwert', 'qwert', '@qwert', 5, 4))
a.push(new Client(6, 'qwerty', 'qwerty', '@qwerty', 6, 41))
a.push(new Client(7, 'a', 'a', '@a', 7, 1))
a.push(new Client(8, 'as', 'as', '@as', 8, 7))
a.push(new Client(9, 'asd', 'asd', '@asd', 9, 14))
a.push(new Client(10, 'asdr', 'asdr', '@asdr', 10, 10))
console.log(a);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(a.sort((a, b) => a.order - b.order));*/
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
/*function carCreator(model, producer, year, maxSpeed, Vdv) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.vdv = Vdv
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const item in this) {
            console.log(`${item} - ${this[item]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;

    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }

}

let a = new carCreator('tesla','mask',2022,200,'3,3')
console.log(a);
a.drive();
a.info();
a.increaseMaxSpeed(50)
a.changeYear(2023)
a.addDriver('Petya')
console.log(a);*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*class carCreator {
    constructor(model, producer, year, maxSpeed, Vdv) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.vdv = Vdv
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const item in this) {
            console.log(`${item} - ${this[item]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;

    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let a = new carCreator('tesla', 'mask', 2022, 200, '3,3')
console.log(a);
a.drive();
a.info();
a.increaseMaxSpeed(50)
a.changeYear(2023)
a.addDriver('Petya')
console.log(a)*/

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

/*
class popel {
    constructor(name, age, footN) {
        this.popelname = name;
        this.age = age;
        this.footN = footN;
    }
}

popel1 = new popel('anna', 19, 35)
popel2 = new popel('lana', 20, 36)
popel3 = new popel('olga', 21, 37)
popel4 = new popel('valentyna', 20, 38)
popel5 = new popel('galyna', 20, 39)
popel6 = new popel('ivanka', 21, 40)
popel7 = new popel('emma', 21, 41)
popel8 = new popel('alina', 20, 42)
popel9 = new popel('karyna', 20, 43)
popel10 = new popel('svitlana', 21, 44)

let popelushki = [popel1, popel2, popel3, popel4, popel5, popel6, popel7, popel8, popel9, popel10]

class prync extends popel{
    constructor(name, age, boots) {
        super(name, age);
        this.boots = boots;
        delete this.footN
    }
}
let Prync = new prync('Ivan', 27,41);

for (const popeliyshka of popelushki) {
    if (popeliyshka.footN === Prync.boots){
        console.log(popeliyshka);
    }
}
console.log(popelushki.find(value => value.footN === Prync.boots));*/

/*
------------------------------------------------------------------------------------------------------------------------
                                                   A D D I T I O N A L                                                */


// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
/*// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class obj {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs) {
        this.id = id
        this.namE = name
        this.username = username
        this.email = email
        this.adress = {}
        this.adress.street = street
        this.adress.suite = suite
        this.adress.city = city
        this.adress.zipcode = zipcode
        this.adress.geo = {}
        this.adress.geo.lat = lat
        this.adress.geo.lng = lng
        this.phone = phone
        this.website = website
        this.company = {}
        this.company.name = companyname
        this.company.catchPhrase = catchPhrase
        this.company.bs = bs
    }
}
let a = new obj(1,'qwe','qwerty','@qwe','gorodotska','dafbs','lviv','79053','qeweqe','24345-21',38097,'codehub.com','okten','gogogo','qwe')
console.log(a);*/
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
/*
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/!*some props and values*!/},
//     {/!*...*!/},
//     {/!*...*!/},
// ]
// }
class constTegs {
    constructor(name,action, nameofatribyts1, actionatrib1, nameofatribyts2, actionatrib2) {
        this.titleOfTag = name
        this.action = action
        this.attrs = []
        this.attrs[0] = {}
        this.attrs[0].nameofatribyts1 = nameofatribyts1
        this.attrs[0].actionatrib1 = actionatrib1
        this.attrs[1] = {}
        this.attrs[1].nameofatribyts2 = nameofatribyts2
        this.attrs[1].nameofatribyts2 = actionatrib2
    }
}
let a = new constTegs('a','предназначен для создания ссылок.','accesskey','Активация ссылки с помощью комбинации клавиш.','coords','Устанавливает координаты активной области.')
console.log(a);
let div = new constTegs('div','предназначен для выделения фрагмента документа с целью изменения вида содержимого','align','Задает выравнивание содержимого тега div','title','Добавляет всплывающую подсказку к содержимому')
console.log(div);
let h1 = new constTegs('h1','представляет собой наиболее важный заголовок первого уровня','align','Определяет выравнивание заголовка.')
console.log(h1);
let span = new constTegs('span','предназначен для определения строчных элементов документа','accesskey','Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.','class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
console.log(span);*/
