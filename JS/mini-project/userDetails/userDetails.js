const user = JSON.parse(localStorage.getItem('user'));
const divka = document.createElement('div');
const globalWrap = document.createElement('div');
globalWrap.classList.add('global-wrap')
document.body.appendChild(globalWrap);
divka.classList.add('divka');
globalWrap.appendChild(divka);
let a = user.id

for (const userKey in user) {

    if (typeof user[userKey] !== 'object') {
        const div = document.createElement('div');
        div.innerHTML = `${userKey}: ${user[userKey]}`;
        div.classList.add('lil-div');
        divka.appendChild(div);
    }
    if (typeof user[userKey] === 'object') {
        for (const key in user[userKey]) {
            if (typeof user[userKey][key] !== 'object') {
                const divk = document.createElement('div');
                divk.innerHTML = `${key}: ${user[userKey][key]}`;
                divk.classList.add('lil-div');
                divka.appendChild(divk);
            }
            if (typeof user[userKey][key] === 'object') {
                for (const keyKey in user[userKey][key]) {
                    const div = document.createElement('div');
                    div.innerHTML = `${keyKey}: ${user[userKey][key][keyKey]}`;
                    div.classList.add('lil-div');
                    divka.appendChild(div);
                }
            }
        }
    }
}

const btn = document.createElement('button');
btn.innerText = 'posts of current user';
btn.classList.add('btn');
globalWrap.appendChild(btn);
btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${a}/posts`)
        .then(value => value.json())
        .then(posts => {
            const wrapForTitle = document.createElement('div');
            wrapForTitle.classList.add('title');
            globalWrap.appendChild(wrapForTitle);
            posts.forEach(post => {
                const titl = document.createElement('div');
                titl.classList.add('tit');
                titl.innerHTML = `Title: ${post.title}`;
                const btn1 = document.createElement('button');
                btn1.innerHTML = `<a href="../userPostDetails/post-details.html" style="text-decoration: none">Post Details</a>`;
                btn1.onclick = function (){
                    localStorage.setItem('post', JSON.stringify(post))
                }
                btn.disabled = true;
                titl.appendChild(btn1)
                wrapForTitle.appendChild(titl)
            })

        })
}