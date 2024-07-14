const productsContainer = document.querySelector('.products-container');

const products = [{
        id: 1,
        name: 'Gold Ring',
        image: 'images/Rings/evia papadatos.jpeg',
        description: '#############',
        price: 99.99
    },
    {
        id: 2,
        name: 'Gold Ring',
        image: 'images/Rings/evia papadatos.jpeg',
        description: '#############',
        price: 149.99
    },
    {
        id: 3,
        name: 'Gold Necklace',
        image: 'images/Necklace/gold jewellery 🧸💫.jpeg',
        description: '#############',
        price: 149.99
    },
    {
        id: 4,
        name: 'Gold Necklace',
        image: 'images/Necklace/gold jewellery 🧸💫.jpeg',
        description: '#############',
        price: 149.99
    },
    {
        id: 5,
        name: 'Gold Necklace',
        image: 'images/Necklace/gold jewellery 🧸💫.jpeg',
        description: '#############',
        price: 149.99
    },
    {
        id: 6,
        name: 'Gold Ring',
        image: 'images/Rings/evia papadatos.jpeg',
        description: '#############',
        price: 149.99
    }, {
        id: 7,
        name: 'Gold Ring',
        image: 'images/Rings/evia papadatos.jpeg',
        description: '#############',
        price: 149.99
    }, {
        id: 8,
        name: 'Gold Ring',
        image: 'images/Rings/evia papadatos.jpeg',
        description: '#############',
        price: 149.99
    },
];

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
    productsContainer.appendChild(productCard);
}

products.forEach(product => createProductCard(product));