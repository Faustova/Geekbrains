const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem{
    constructor (product, img = 'https://placehold.it/200x150'){
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img class="product-image" src=${this.image}></img>
                <h3 class="product-text">${this.product_name}</h3>
                <p class="product-text">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render ();
list. calcSum();




class productBasket {
    constructor(cartContainer = '.cart-container'){
        this._getBasket()
            .then(data => { 
                this.amount = "amount";
                this.countGoods = "countGoods";
                this.contents = [..."contents"];
                this.render()
            });
       
     }    
        _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })  
}

    
    removeGoods() {
       

    }
    changeGoods() {

    }
    
  render(){
        const block = document.querySelector(this.cartContainer);
        for (let Basket of this.productBasket){
            const amountObj = new ProductAmount;
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        
        
} }

class ElemBasket {
    constructor (product) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.src = product.src;
        this.quantity = 1;
    }

}

let Basket = new productBasket ();
list.render ();
