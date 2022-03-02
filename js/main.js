class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    calculateProductsPrice() {
        return this.goods.reduce((prevValue, item) => {
            return prevValue + item.price;
        }, 0);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
        console.log(333);
        console.log(this.calculateProductsPrice());
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class cart {
    constructor() {
        this.cartItems = [];
    }
    
    // добавить товар в корзину
    addItem(cartItem) { }

    // удалить товар из корзины
    removeItem(cartItem) { }
    
    // посчитать количество товаров в корзине и их стоимость
    calculate() {}
    
    // очистить корзину
    _clear() { }
    
    // показать содержимое корзины
    showDetails() { }
    
    // скрыть содержимое корзины
    _closeDetails() { }

    // перейти к созданию заказа
    _createOrder() {}
}

class cartItem {
    constructor(product, count) {
        this.product = product;
        this.count = count;
    }

    // увеличить количество товара в корзине
    increaseCount() { }
    
    // уменьшить количество товара в корзине
    decreaseCount() {}

} 


let list = new ProductList();



//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);