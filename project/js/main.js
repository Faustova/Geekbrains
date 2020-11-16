
class ProductsList{
    constructor (container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    
    _fetchProducts() {
        this.goods = [
    {id: 1, title: 'Notebook', price: 2000, image: "js/img/notebook.jpeg", count: 1},
    {id: 2, title: 'Mouse', price: 20, image: "js/img/mouse.jpg", count:1},
    {id: 3, title: 'Keyboard', price: 200, image: "js/img/keyboard.jpeg, count: 1"},
    {id: 4, title: 'Gamepad', price: 50, image: "js/img/gamepad.jpg, count: 1"},
];   
    }

render(){
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
        const productObject = new ProductItem (product);
        block.insertAdjacentHTML('beforeend',productObject.render());
    }
}
}

class ProductItem{
    constructor (product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.image = product.image;
        this.count = product.count;
    }
    render(){
        return `<div class="product-item">
                <img class="product-image" src=${this.image}></img>
                <h3 class="product-text">${this.title}</h3>
                <p class="product-text">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}


let list = new ProductsList();
list.render ();


class Cart extends ProductsList{
    
    constructor(ProductItem) {
    
        super(ProductItem) 
        
    for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumber();
    })
        
       
           
}

function cartNumber () {
    let productNumbers = localStorage.getItem('cartNumbers')
    
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1) }
        else {
            localStorage.setItem('cartNumbers', 1);
        }
    }
    localStorage.setItem('cartNumbers', 1);
} 
 render () {

    const placeToRender = document.querySelector('.cart-counter')
    
        } 
  } 

  
    