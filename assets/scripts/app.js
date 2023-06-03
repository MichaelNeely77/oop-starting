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

class ShoppingCart {
    items =[];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput = `<h2>Total: \$${1}</h2>`;
    }
    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
    this.product = product;
    }

    addToCart() {
    console.log('Adding product to cart...');
    console.log(this.product);
    }
    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
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
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://cdn.sleepnumber.com/image/upload/f_auto,q_auto:eco/v1666283228/workarea/catalog/product_images/pillow-pcp/Pillow-PCP_PDP_Postcard_Variant_classic',
            'A soft pilllow',
            129.99
        ),
        new Product(
            'A carpet',
            'https://secure.img1-fg.wfcdn.com/im/09651980/resize-h445%5Ecompr-r85/1922/192265957/Nisar+Performance+Beige%2FYellow+Machine+Washable+Rug.jpg',
            'A soft carpet',
            179.99
        )
    ];
    constructor() {

    }
    render() {

        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();

            prodList.append(prodEl);
        }

        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

const shop = new Shop();
shop.render();



