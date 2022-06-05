const post = JSON.parse(localStorage.getItem('post'));

const globalWrap = document.createElement('div');
globalWrap.classList.add('global');
document.body.appendChild(globalWrap);

const wrap = document.createElement('div');
wrap.classList.add('wrap');
globalWrap.appendChild(wrap);

const a = post.id
for (const key in post) {
    const div = document.createElement('div');
    div.classList.add('diiv');
    div.innerHTML = `${key}: ${post[key]}`;
    wrap.appendChild(div);
}

const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'show all comments this post';
btn.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/posts/${a}/comments`)
        .then(value => value.json())
        .then(comments => {
            const divWrap = document.createElement('div');
            divWrap.classList.add('comments');
            for (const comment of comments) {
                const a = document.createElement('div');
                a.classList.add('comment');
                for (const key in comment) {
                    const b = document.createElement('div');
                    b.classList.add('com');
                    b.innerHTML = `${key}: ${comment[key]}`;
                    a.appendChild(b);
                }
                divWrap.appendChild(a);
            }
            globalWrap.appendChild(divWrap);
        })
    btn.disabled = true;
}
globalWrap.appendChild(btn)