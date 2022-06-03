// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
            const wrap = document.createElement('div')
        wrap.setAttribute('class', 'wrap');
            for (let i = 0; i < posts.length; i++) {
                const post = document.createElement('div');
                post.setAttribute('class', 'post');

                for (const wrapKey in posts[i]) {
                    divka = document.createElement('div')
                    divka.classList.add('divkaa')
                    divka.innerHTML = `${wrapKey}: ${posts[i][wrapKey]}`
                    post.appendChild(divka)

                }
                wrap.appendChild(post)
            }

            document.body.appendChild(wrap)


        }
    )*/


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
/*fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(objects => {
        for (const object of objects) {
            comment = document.createElement('div');
            for (const objectKey in object) {
                divka = document.createElement('div');
                divka.innerHTML = `${objectKey}: ${object[objectKey]}`
                comment.appendChild(divka)
            }
            document.body.appendChild(comment)
        }
    })*/


/*
------------------------------------------------------------------------------------------------------------------------
                                           A D D I T I O N A L                                                        */

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        function creatorOfObject(start) {
            const divOfObj = document.createElement('div');
            divOfObj.style.marginLeft = '15px';

            for (const startKey in start) {
                if (typeof start[startKey] !== 'object') {
                    divOfKay = document.createElement('div');
                    divOfKay.innerHTML = `${start[startKey]}`;
                    divOfObj.appendChild(divOfKay)
                }
                if (typeof start[startKey] === 'object') {
                    for (const Key in start[startKey]) {
                        if (typeof start[startKey][Key] !== 'object') {
                            const b = document.createElement('div');
                            b.innerHTML = `${start[startKey][Key]}`
                            divOfObj.appendChild(b)
                        }

                        if (typeof start[startKey][Key] === 'object') {
                            for (const bKey in start[startKey][Key]) {
                                const kk = document.createElement('div');
                                kk.innerHTML = `${start[startKey][Key][bKey]}`;
                                divOfObj.appendChild(kk)
                            }
                        }

                    }
                }
            }
            return divOfObj
        }

        const globalWrap = document.createElement('div');
        document.body.appendChild(globalWrap);

        for (const user of value) {
            let wrap = document.createElement('div');
            let a = creatorOfObject(user);

            btn1 = document.createElement('button');
            btn1.innerText = 'Show all posts of the user';
            btn1.style.marginBottom = '15px';
            wrap.appendChild(btn1)
            btn1.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value1 => value1.json())
                    .then(posts => {
                        for (const post of posts) {
                            const {userId, id, title, body} = post;
                            postDiv = document.createElement('div');
                            postDiv.innerHTML = `userId: ${userId} id: ${id} title: ${title} body: ${body}`;
                            wrap.appendChild(postDiv);
                            btn1.disabled = true;
                        }
                    })
            }

            btn2 = document.createElement('button');
            btn2.innerText = 'Show all comments of the user';
            btn2.style.marginBottom = '15px';
            btn2.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                    .then(value2 => value2.json())
                    .then(comments => {
                        for (const post of comments) {
                            const {postId, id, name, email, body} = post;
                            postDiv = document.createElement('div');
                            postDiv.innerHTML = `<strong>postId:</strong> ${postId} <strong>id:</strong> ${id} <strong>name:</strong> ${name} <strong>email:</strong> ${email} <strong>body:</strong> ${body}`;
                            wrap.appendChild(postDiv);
                            btn2.disabled = true;
                        }
                    })
            }
            wrap.append(a, btn1, btn2)
            globalWrap.appendChild(wrap);
        }
    })*/



// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
/*// мій спосіб:
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        const wrap = document.createElement('div');
        posts.forEach(post => {
            const divka = document.createElement('div');
            divka.innerHTML = `<h2>${post.userId}</h2> <h2>${post.id}</h2> <p>${post.title}</p> <p>${post.body}</p>`;
            const btn = document.createElement('button');
            btn.innerText = 'Coments';
            divka.appendChild(btn)
            btn.addEventListener('click', function (ck) {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`)
                    .then(value => value.json())
                    .then(comments => {

                        const comentsDiv = document.createElement('div');
                        for (const coment of comments) {
                            comDiv = document.createElement('div');
                            comDiv.innerHTML = `<h2>${coment.postId}</h2> <h2>${coment.id}</h2> <p>${coment.name}</p> <p>${coment.email}</p> <p>${coment.body}</p>`;
                            comentsDiv.appendChild(comDiv)
                        }
                        divka.appendChild(comentsDiv)
                    })
            })
            wrap.append(divka);
        })
        document.body.appendChild(wrap)
    })*/
/*// спосіб Саши
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        const htmlDivElement = document.createElement('div');
        document.body.appendChild(htmlDivElement)
        for (const post of value) {
            const divWrap = document.createElement('div');
            htmlDivElement.appendChild(divWrap);
            const {userId, id, title, body} = post;
            divWrap.innerHTML = `<h3>userId: ${userId}</h3>
                                 <h3>Id: ${id}</h3>
                                 <h3>Id: ${title}</h3>
                                 <h3>Id: ${body}</h3>`;

            const btn = document.createElement('button');
            btn.innerText = 'Click';
            divWrap.appendChild(btn);
            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(value1 => value1.json())
                    .then(value1 => {
                        const div = document.createElement('div');
                        divWrap.appendChild(div);
                        for (const post of value1) {
                            const diiv = document.createElement('div');
                            diiv.innerText = post.postId + ' ' + post.id + ' ' + post.name + ' ' + post.email + ' ' + post.body
                            diiv.style.marginBottom = '10px'
                            div.appendChild(diiv);
                            btn.disabled = true
                        }
                    })
            }
        }
    })*/



// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

/*const btn = document.getElementsByName('btn')[0];
const nameInput = document.getElementsByName('name')[0];
const numberInput = document.getElementsByName('number')[0];
const coinInput = document.getElementsByName('coin')[0];
const imgInput = document.getElementsByName('img')[0];
let kay = 'kay';
localStorage.setItem(kay,JSON.stringify([]))
btn.onclick = function (ck) {
    ck.preventDefault()
    a = JSON.parse(localStorage.getItem(kay)) || [];
    b = {name: nameInput.value , numbers: numberInput.value, coin: coinInput.value, img: imgInput.value};
    a.push(b)
    localStorage.setItem(kay, JSON.stringify(a))
}*/
