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

class ProductItem {
    constructor(product) {
    this.product = product;
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
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();

            prodList.append(prodEl);
        }

        renderHook.append(prodList);
    }
}

const productList = new ProductList();
    productList.render();



