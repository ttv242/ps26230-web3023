const container = document.querySelector('#container');
let list__cart = JSON.parse(localStorage.getItem('list__cart'));



function render__list__cart() {

    // let list__cart = localStorage.getItem('list__cart') ? [] : JSON.parse(localStorage.getItem('list__cart'));
    // if (list__cart.length === 0) return false;
    // console.log(list__cart.length);
    list__cart.forEach((cart, index) => {
        console.log(index);
        index++;
        console.log(index);

        var cart__box = document.createElement('div');
        cart__box.className = 'cart__box';

        var stt = document.createElement('div');
        stt.className = 'stt';
        stt.innerText = index;
        cart__box.appendChild(stt);

        var image = document.createElement('img');
        image.className = 'image';
        image.src = cart.image;
        cart__box.appendChild(image);

        var productName = document.createElement('div');
        productName.className = 'productName';
        productName.innerText = cart.productName;
        cart__box.appendChild(productName)

        var productPrice = document.createElement('div');
        productPrice.className = 'productPrice';
        productPrice.innerText = cart.productPrice;
        cart__box.appendChild(productPrice);

        var delete__box = document.createElement('button');
        delete__box.className = 'delete__box';
        delete__box.innerText = 'Xóa';
        cart__box.appendChild(delete__box)

        container.append(cart__box);

    });
}
render__list__cart();
var delete__box_All = document.querySelectorAll('.delete__box');
var delete__box = document.querySelector('.delete__box');

delete__box_All.forEach((delete__box, index) => {
    delete__box.addEventListener('click', function() {
        delete__box.parentElement.remove();
        localStorage.removeItem('list__cart', index);
        render__list__cart();
    })
})
