const post = JSON.parse(localStorage.getItem('post'));
const wrap = document.createElement('div');
document.body.appendChild(wrap);
const a = post.id
for (const key in post) {
    const div = document.createElement('div');
    div.innerHTML = `${key}: ${post[key]}`;
    wrap.appendChild(div);
}

const btn = document.createElement('button');
btn.innerText = 'show all comments this post';
btn.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/posts/${a}/comments`)
        .then(value => value.json())
        .then(comments => {
            const divWrap = document.createElement('div');
            for (const comment of comments) {
                const a = document.createElement('div');
                for (const key in comment) {
                    const b = document.createElement('div');
                    b.innerHTML = `${key}: ${comment[key]}`;
                    a.appendChild(b);
                }
                divWrap.appendChild(a);
            }
            document.body.appendChild(divWrap);
        })
    btn.disabled = true;
}
document.body.appendChild(btn)