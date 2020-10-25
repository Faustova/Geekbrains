let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Fishnet Chair',
        price: '$ 36.7/sq',
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumber();
    })
}

function onLoadCartNumbers () {
    productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
       document.querySelector('.cart span').textContent = productNumbers; 
    }
}
function cartNumber () {
    let productNumbers = localStorage.getItem('cartNumbers')
    
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
         document.querySelector('.cart span').textContent = productNumbers + 1;}
        else {
            localStorage.setItem('cartNumbers',1);
             document.querySelector('.cart span').textContent = 1;
        }
    }

onLoadCartNumbers();

