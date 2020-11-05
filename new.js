class GoodItem{
    
    name = ''
    price = 0
    img = ''
    count = 1
 
    constructor (name, price) {
        this.name = name
        this.price = price

    }

    inc () {
        this.count++
    }

    getAddInCartBtn (){
        const btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = 'Buy'

        btn.addEventListener("click", () => {
            const CartInstance = new Cart ()
            CartInstance.add(this)
        })

        return btn
    }

    getMainTemplate () {
        const {name, price, img} = this
        const wrapper = document.createElement('div')
        wrapper.classList.add('good')
        wrapper.innerHTML = `
        <div>
    <div class = "good_image">
    <img src="${img}"/> </div>
    <div class= "good_meta"> Product: <span>${name}</span> </div>
    <div class= "good_meta"> Price: <span>${price}</span> </div>
        </div>`

        wrapper.appendChild(this.getAddInCartBtn())

        return wrapper
    }

    getCartTemplate () {
        const {name, price, img, count } =this
        const wrapper = document.createElement('div')
        wrapper.classList.add('cart_item')
        wrapper.innerHTML = `
        <div>
    <div class = "good_image">
    <img src="${img}" /> </div>
    <div class= "good_meta"> Product: <span>${name}</span> </div>
    <div class= "good_meta"> Price: <span>${price}</span> </div>
    <div class= "good_meta"> Qty: <span>${count}</span> </div>
    <div class= "good_meta"> Total: <span>${price*count}</span> </div>
        </div>`


        return wrapper
    }

}

class List {
    items = []

    constructor (items = []) {
        this.items = items
    }

    findGood (good) {
       return this.items.filter( item => item.name === good.name) [0] 
    }

    add (item) {
        const exists = this.findGood(item)
        if (exists) {
            exists.inc()
        } else {
            this.items.push(item)
        }

        this.render ()
    }

    render () {

    }

}

class Cart extends List{
    
    constructor(items) {
        if (Cart._instance) {
            return Cart._instance
        }
        
        super(items)
        this.init()
        
        Cart._instance = this
    }
    
    init () {
        const block = document.createElement('div')
        block.classList.add('cart')
        
        const btn = document.createElement('div')
        btn.innerHTML = 'Shopping cart'
        btn.classList.add('btn')
        

        
        const list = document.createElement('div')
        list.innerHTML = 'The cart is empty'
        list.classList.add('cart_list')
        
        btn.addEventListener('click', () => {
            list.classList.toggle('shown')
        })
        
       
        
        block.appendChild(btn)
         block.appendChild(list)
        
        const placeToRender = document.querySelector('header')
        if (placeToRender) {
            placeToRender.appendChild(block)
        }
    }
        
    render () {
        let obj = { name: 'lydia' }
        const { name } = obj
        console.log(name)
        const placeToRender = document.querySelector('.cart_list')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = `
            <div>
                <div id="total"></div>
                <div id="cart_items"></div>
            </div>
        `
        
        let total = 0
    
        this.items.forEach(item => {
            total += item.price * item.count
            const template = item.getCartTemplate()
            placeToRender.querySelector('#cart_items').appendChild(template)
        })
        
        placeToRender.querySelector('#total').innerHTML = total
    }
    
}
    
class GoodsList extends List{
    constructor(items) {
        super (items)
    }
    
    render () {
        const placeToRender = document.querySelector('.goods_list')
        if (!placeToRender) {
            return
        }
        
        placeToRender.innerHTML = ''
        
        this.items.forEach(item => {
            const template = item.getMainTemplate()
            placeToRender.appendChild(template)
        })
    }
}

const Good1 = new GoodItem('1',1)
const Good2 = new GoodItem('2',2)
const Good3 = new GoodItem('3',3)

const GoodsListInstance = new GoodsList()
GoodsListInstance.add(Good1)
GoodsListInstance.add(Good2)
GoodsListInstance.add(Good3)

GoodsListInstance.render()

const CartInstance = new Cart()