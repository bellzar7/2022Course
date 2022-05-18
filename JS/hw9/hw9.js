// - є масив
/*let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];*/
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
/*for (const memberFamily of simpsons) {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    memberDiv.innerHTML =
        `
        <hr/>
        <h2 style="color: rgb(${red}, ${green},${blue}); margin: 0"> ${memberFamily.name} ${memberFamily.surname}</h2>
        <h3 style="color: rgb(${red}${green}${blue}); margin-bottom: 5px">Age - ${memberFamily.age} years</h3>
        <p style="font-weight: bold">${memberFamily.info}</p>
        <img src="${memberFamily.photo}" alt="imagine member of family">
        `
    document.body.appendChild(memberDiv)
}*/
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
/*for (const familyMember of simpsons) {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    const divka = document.createElement('div');
    divka.classList.add('member');
    document.body.appendChild(divka)
    const h2 = document.createElement('h2');
    h2.style.color = `rgb(${red}, ${green}, ${blue}`;
    h2.style.margin = 0;
    h2.innerHTML = `${familyMember.name} ${familyMember.surname}`;
    const brek = document.createElement('hr');
    divka.appendChild(brek);
    divka.appendChild(h2);
    const h3 = document.createElement('h3');
    h3.style.color = `rgb(${red} ${green} ${blue}`;
    h3.innerHTML = `Age - ${familyMember.age} years`;
    divka.appendChild(h3);
    const p = document.createElement('p');
    p.style.fontWeight = 'bold';
    p.innerHTML = `${familyMember.info}`;
    divka.appendChild(p);
    const img = document.createElement('img');
    img.setAttribute('src', `${familyMember.photo}`);
    divka.appendChild(img);
}*/

// - Є масив
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const cours of coursesArray) {
    const divka = document.createElement('div');
    divka.innerHTML = `
    <hr>
    <div>${cours.title}</div>
    
    <div style="display: flex"><div style="width: 30%">${cours.monthDuration}</div>
    
    <div style="width: 70%">${cours.hourDuration}</div></div>`

    const ul = document.createElement('ul')
    divka.appendChild(ul)

    for (const modul of cours.modules) {
        const lij = document.createElement('li');
        lij.innerHTML = `${modul}`;
        ul.appendChild(lij)
    }

    document.body.appendChild(divka)
}*/

// Все робити за допомоги js.

// - створити блок
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
/*const divka = document.createElement('div');
divka.classList.add('wrap','collapse','alpha','beta');
divka.style.width = '200px';
divka.style.height = '200px';
divka.style.background = 'cornflowerblue'
divka.innerText = 'Hellou'
divka.style.color = 'blackmail'
divka.style.marginBottom = '5px'
divka.style.display = 'block'
document.body.appendChild(divka);
const clon = divka.cloneNode(true);
document.body.appendChild(clon)*/
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
/*const a = ['Main','Products','About us','Contacts'];
const vstav = document.querySelector('.menu');
for (const string of a) {
    const li = document.createElement('li');
    li.innerText = string;
    vstav.appendChild(li);
}*/

//
// - Є масив
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerHTML = `${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}month`;
    document.body.appendChild(block)
}
*/

//
// - Є масив
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', `${i+1}`);
    divElement.innerHTML = `<h1 style="margin: 0" class="heading">${coursesAndDurationArray[i].title}</h1>
                            <p class="description">${coursesAndDurationArray[i].monthDuration}</p><hr>`
    document.body.appendChild(divElement)
}*/

/*
------------------------------------------------------------------------------------------------------------------------
                                            A D D I T I O N A L                                                       */

// - Є масив :

/*let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.
function create(arr) {
    for (const arrElement of arr) {

        const globalWrap = document.createElement('div');
        document.body.appendChild(globalWrap);

        const hr = document.createElement('hr')
        hr.style.height = '5px';
        hr.style.background = 'green';
        globalWrap.appendChild(hr);

        for (const key in arrElement) {
            const wrap = document.createElement('div');

            if (typeof arrElement[key] !== "object") {
                wrap.innerText = key + '-----' + arrElement[key];
            }

            globalWrap.appendChild(wrap);

            if (typeof arrElement[key] === "object") {
                for (const nObj in arrElement[key]) {
                    const wrapObj = document.createElement('div');

                    if (typeof arrElement[key][nObj] !== "object") {
                        wrapObj.innerText = key + '---' + nObj + '-----' + arrElement[key][nObj];
                    }
                        if (typeof arrElement[key][nObj] === "object" ){
                            for (const geoN in arrElement[key][nObj]) {
                                const wrapGeo = document.createElement('div');
                                wrapGeo.innerText = key + '---' + nObj + '---' + geoN + '-----' + arrElement[key][nObj][geoN];
                                wrapObj.appendChild(wrapGeo);
                            }
                        }

                    wrap.appendChild(wrapObj);
                }
            }
        }
    }
}

create(usersList);*/

//
//
//
// --------
//     за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику
//     headings,всі параграфи покласти в характеристику (масив) paragraphs
//     !!!!!!!!!!!перебираю структуру сторінки additional.html!!!!!!!!!!!
/*let a = {headings: [], paragraphs: []};

function rec(start) {
    const child = start.children;
    for (const childElement of child) {
        if (childElement.tagName.toLowerCase() === 'h1') {  /!*чому якщо тут вписати if (childElement.tagName.toLowerCase() === 'h1'||'h2'||'h3'), то воно буде сприймати лише h1?*!/
            a["headings"].push(childElement.innerText)
        } else if (childElement.tagName.toLowerCase() === 'h2') {
            a["headings"].push(childElement.innerText)
        } else if (childElement.tagName.toLowerCase() === 'h3') {
            a["headings"].push(childElement.innerText)
        }
        if (childElement.tagName.toLowerCase() === 'p') {
            a["paragraphs"].push(childElement.innerText)
        }
        rec(childElement)
    }
}

rec(document.body)
console.log(a);*/
// ------




//     зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd> . !!!!ПОЯСНІТЬ, ПЛИС, УМОВУ!!!!!! створити дів з класом контентедітабле і коли наживати на ТАБ, то його клас ділиться наполовину??????







// - Є масив :
/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];*/
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*let a = [];
for (const user of users) {
    for (const userKey in user) {
        if (typeof user[userKey] === 'object'){
            a.push(user[userKey])
        }
    }
}
console.log(a);*/
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
/*const a = document.createElement("div");
document.body.appendChild(a);
for (const user of users) {
    const b = document.createElement('div');
    b.innerText = user.name;
    a.appendChild(b);
}*/
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
/*const a = document.createElement('div')
a.style.display = 'flex';
a.style.flexWrap = 'wrap'
a.style.boxSizing = 'border-box'
document.body.appendChild(a)
for (const user of users) {
    const globalWrap = document.createElement('div');
    globalWrap.style.margin = '20px'
    a.appendChild(globalWrap);
    for (const key in user) {
        const wrap = document.createElement('div');

        if (typeof user[key] !== 'object') {
            wrap.innerHTML = `${key} --- ${user[key]}`
            globalWrap.appendChild(wrap)
        }

        if (typeof user[key] === 'object') {
            for (const inUserKey in user[key]) {
                const wrapForWrap = document.createElement('div');
                wrapForWrap.innerText = key + '---' + inUserKey + '-----' + user[key][inUserKey]
                globalWrap.appendChild(wrapForWrap)

            }
        }

    }
}*/
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*const a = document.createElement('div')
a.style.display = 'flex';
a.style.flexWrap = 'wrap'
a.style.boxSizing = 'border-box'
document.body.appendChild(a)
for (const user of users) {
    const globalWrap = document.createElement('div');
    globalWrap.style.margin = '20px'
    a.appendChild(globalWrap);
    const wrapForWrap = document.createElement('div');
    globalWrap.appendChild(wrapForWrap)
    for (const key in user) {
        const wrap = document.createElement('div');

        if (typeof user[key] !== 'object') {
            wrap.innerHTML = `${key} --- ${user[key]}`
            globalWrap.appendChild(wrap)
        }

        if (typeof user[key] === 'object') {
            for (const inUserKey in user[key]) {
                const f = document.createElement('div');
                f.innerText = key + '---' + inUserKey + '-----' + user[key][inUserKey]
                wrapForWrap.appendChild(f)
            }
        }

    }
}*/






// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
/*const vstav = document.getElementById('content');
const ulka = document.createElement('ul');
vstav.appendChild(ulka);
function f(start) {
    const child = start.children;
    for (const childElement of child) {
        if (childElement.tagName.toLowerCase() === 'h2'){
            const lish = document.createElement('li');
            lish.innerText = childElement.innerText;
            ulka.appendChild(lish)
        }
        f(childElement)
    }
}
f(document.body)*/




// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
/*let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
const globalWrap = document.createElement("div")
document.body.appendChild(globalWrap)
for (const rule of rules) {
    let wrap = document.createElement('div');
    globalWrap.appendChild(wrap);
        const hka = document.createElement('h2');
        const pka = document.createElement('p');
        hka.innerText = rule["title"];
        wrap.appendChild(hka);
        pka.innerText = rule["body"];
        wrap.appendChild(pka);
}*/





















