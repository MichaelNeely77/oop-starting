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

console.log(new Product());


const productList = {
    products: [

        new Product(
            'A Pillow',
            'https://cdn.sleepnumber.com/image/upload/f_auto,q_auto:eco/v1666283228/workarea/catalog/product_images/pillow-pcp/Pillow-PCP_PDP_Postcard_Variant_classic',
            'A soft pilllow',
            129.99
            ),
        { title: 'A Pillow',
            imageUrl: 'https://cdn.sleepnumber.com/image/upload/f_auto,q_auto:eco/v1666283228/workarea/catalog/product_images/pillow-pcp/Pillow-PCP_PDP_Postcard_Variant_classic',
            price: 19.99,
            description: 'A soft pilllow'
        },
        { title: 'A carpet',
            imageUrl: 'https://secure.img1-fg.wfcdn.com/im/09651980/resize-h445%5Ecompr-r85/1922/192265957/Nisar+Performance+Beige%2FYellow+Machine+Washable+Rug.jpg',
            price: 179.99,
            description: 'A soft carpet'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;

            prodList.append(prodEl);
        }

        renderHook.append(prodList);
    }
};

productList.render();