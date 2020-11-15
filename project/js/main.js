const products = [
    {id: 1, title: 'Notebook', price: 2000, image: "js/img/notebook.jpeg"},
    {id: 2, title: 'Mouse', price: 20, image: "js/img/mouse.jpg"},
    {id: 3, title: 'Keyboard', price: 200, image: "js/img/keyboard.jpeg"},
    {id: 4, title: 'Gamepad', price: 50, image: "js/img/gamepad.jpg"},
];


//Функция для формирования верстки каждого товара
const renderProduct = (good) => {
    return `<div class="product-item">
                <img class="product-image" src=${good.image}></img>
                <h3 class="product-text">${good.title}</h3>
                <p class="product-text">${good.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);