let kay = 'kay';
const products = JSON.parse(localStorage.getItem(kay));
products.forEach(value => {
    const div = document.createElement('div');
    div.innerHTML = `<h2>${value.name}</h2><h2>${value.numbers}</h2><h2>${value.coin}</h2><img style="width: 300px; height: 300px" src="${value.img}" alt="imagine of product">`;
    const btn = document.createElement('button');
    btn.innerText = 'Видалити з лс цей товар';
    btn.onclick = function (ck) {
        let a = JSON.parse(localStorage.getItem(kay))
        a.splice(products.indexOf(value),1)
        localStorage.setItem(kay, JSON.stringify(a))
    }
    document.body.append(div, btn);
})

const btn1 = document.getElementsByName('btn1')[0];
btn1.onclick = function (ck) {
    localStorage.clear()
    document.body.style.display = 'none'
}
