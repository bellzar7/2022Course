let kay = 'kay'
usersObj = JSON.parse(localStorage.getItem(kay)) || [];
usersObj.forEach(value => {
    const div = document.createElement('div');
    div.innerHTML = `${value.name} ${value.age} ${value.status}`
    document.body.appendChild(div)
})
