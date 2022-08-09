const cartProducts = document.querySelector('.cart__products'),
      controlsArr = Array.from(document.querySelectorAll('.product__quantity-control')),
      productAdd = Array.from(document.querySelectorAll('.product__add')),
      cart = document.querySelector('.cart');

for (let item of controlsArr) {
    item.addEventListener('click', controlFunc);
}
for (let item of productAdd) {
    item.addEventListener('click', ()=> {
        addCart(item)
    });
}

// Меняем количество
 function controlFunc() {
    let quantity = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if (this.classList.contains('product__quantity-control_dec') && quantity.innerText > 1) {
            quantity.innerText--;
    } else if (this.classList.contains('product__quantity-control_inc')) {
            quantity.innerText++;
    }
     if (document.getElementsByClassName('cart__product') === 0) {
         cart.style.display = 'none';
     }
}

// Добавление нового товара
function addCart(element, quantity) {
    const dataId = element.closest('.product').dataset.id,
        prodImage = element.closest('.product').querySelector('.product__image'),
        cartProd = cartProducts.querySelector(`.cart__product[data-id="${dataId}"] .cart__product-count`);

    // если передано количество товара (для localStorage)
    const prodQnt = quantity ? quantity : element.closest('.product').querySelector('.product__quantity-value').innerText;

    // открываем корзину
     if (cart.style.display = 'none') {
         cart.style.display = 'block';
     }
    // если добавляемый товар уже есть
    if (cartProd) {
        cartProd.innerText = Number(cartProd.innerText) + Number(prodQnt);
        localStorage.setItem(dataId, Number(localStorage.getItem(dataId)) + Number(prodQnt)); // увеличиваем количество в localStorage
        transAnimate(prodImage, cartProd.closest('.cart__product').querySelector('.cart__product-image'));  // анимация

    } else {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart__product';
        cartItem.dataset.id = dataId;

        cartItem.innerHTML = `<img class="cart__product-image" src="${prodImage.src}">
                            <div class="cart__product-count">${prodQnt}</div>`;

        cartProducts.appendChild(cartItem);

        localStorage.setItem(dataId, prodQnt);    // заносим в localStorage
    }
}

// Анимация перемещения изображения
function transAnimate(imgStart, imgEnd) {
    const step = 20,
        coordX = (imgEnd.getBoundingClientRect().x - imgStart.getBoundingClientRect().x) / step,
        coordY = (imgEnd.getBoundingClientRect().y - imgStart.getBoundingClientRect().y) / step,
        imgMove = imgStart.cloneNode(true);

    imgStart.after(imgMove);
    imgMove.style.position = 'fixed';
    imgMove.style.left = imgStart.getBoundingClientRect().x + 'px';
    imgMove.style.top = imgStart.getBoundingClientRect().y + 'px';

    let count = 0;
    const transInterval = setInterval(() => {
        if (count < step) {
            imgMove.style.left = imgMove.getBoundingClientRect().x + coordX + 'px';
            imgMove.style.top = imgMove.getBoundingClientRect().y + coordY + 'px';
            count++;
        } else {
            clearInterval(transInterval);
            imgMove.remove();
        }
    }, 10);
}

// Очистка корзины
const cartClear = document.getElementById('cart__clear');
cartClear.addEventListener('click', () => {
    cartProducts.innerHTML = '';
    cartProducts.closest('.cart').style.display = 'none';
    localStorage.clear(); // очищаем localStorage
});

// Вывод товаров из localStorage
let products = Object.keys(localStorage);
for (let product of products) {
    addCart(document.querySelector(`.product[data-id="${product}"]`), localStorage.getItem(product));
}