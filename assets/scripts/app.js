class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
        this.render();
    }

    render() {}
    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
    document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items =[];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
    get totalAmount() {
        const sum =  this.items.reduce(
            (prevValue, curItem) => prevValue + curItem.price
            , 0
        );
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;

    }
    render() {
        const cartEl = this.createRootElement('section', 'cart', );
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
    this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }
    render() {
        const prodEl = this.createRootElement('li', 'product-item');
        prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
        const addCartBtn = prodEl.querySelector('button');
        addCartBtn.addEventListener('click', this.addToCart.bind(this));

    }
}

class ProductList extends Component {
    products = [
        new Product(
            'A Pillow',
            'https://cdn.sleepnumber.com/image/upload/f_auto,q_auto:eco/v1666283228/workarea/catalog/product_images/pillow-pcp/Pillow-PCP_PDP_Postcard_Variant_classic',
            'A soft pillow',
            129.99
        ),
        new Product(
            'A carpet',
            'https://secure.img1-fg.wfcdn.com/im/09651980/resize-h445%5Ecompr-r85/1922/192265957/Nisar+Performance+Beige%2FYellow+Machine+Washable+Rug.jpg',
            'A soft carpet',
            179.99
        )
    ];
    constructor(renderHookId) {
        super(renderHookId);
    }
    render() {

        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        for (const prod of this.products) {
            new ProductItem(prod, 'prod-list');
        }
    }
}

class Shop extends Component {
    constructor() {
        super();
    }
    render() {
        this.cart = new ShoppingCart('app');

        new ProductList('app');

    }
}

class App {
    static cart;
    static init() {
        const shop = new Shop();
        this.cart = shop.cart;

    }

    static addProductToCart(product) {
        this.cart.addProduct(product)
    }
}

App.init();



