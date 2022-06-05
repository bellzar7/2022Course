fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const divWrap = document.createElement('div');
        divWrap.classList.add('wrap');
        document.body.appendChild(divWrap);
        users.forEach(user => {
            const wrap = document.createElement('div');
            wrap.classList.add('vrap');
            wrap.innerHTML = `<h2>${user.id}</h2><h3>${user.name}</h3>`;
            // const btn = document.createElement('a');
            // btn.setAttribute('href', 'user-details.html');
            // btn.innerHTML = `<input type="button" value="User details">`;
            const btn = document.createElement('button')
            btn.innerHTML = `<a href="../userDetails/user-details.html" style="text-decoration: none">User details</a>`
            btn.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user))
            }
            wrap.appendChild(btn);
            divWrap.appendChild(wrap)

        })
    })