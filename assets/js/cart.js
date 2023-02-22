const main = document.querySelector('#main');

const content__cart = document.querySelector('.content__cart');

// localStorage.getItem('list__cart') ? [] : JSON.parse(localStorage.getItem('list__cart'));
// console.log(list__cart);

function render__list__cart() {

    let list__cart = JSON.parse(localStorage.getItem('list__cart'));

    if (list__cart.length < 1) {
        var option__box__cart = document.querySelector('.option__box__cart');
        option__box__cart.remove();
        console.log(1);
        var empty__cart = document.createElement('img');
        empty__cart.className = 'empty__cart'
        empty__cart.src = '/assets/images/empty_cart.webp';
        main.children[1].appendChild(empty__cart);

        var content_empty = document.createElement('p');
        content_empty.className = 'content__empty';
        content_empty.innerText = 'Không có sản phẩm nào trong giỏ hàng của bạn';
        main.children[1].appendChild(content_empty);

        var btn_empty = document.createElement('button');
        btn_empty.className = 'btn_empty';
        btn_empty.innerText = 'TIẾP TỤC MUA HÀNG';
        btn_empty.addEventListener('click', function() {
            window.location = '/index.html'
        });
        main.children[1].appendChild(btn_empty);
    } else {
        main.children[1].remove();
        var content__cart = document.createElement('div');
        content__cart.className = 'content__cart';
        main.append(content__cart);

        var header_list_cart = document.createElement('div');
        header_list_cart.className = 'header_list_cart';
        content__cart.appendChild(header_list_cart);
            for (var i=0; i<7; i++) {
                var span = document.createElement('span');
                header_list_cart.appendChild(span);
            };
            header_list_cart.children[0].className = 'cart__product';
            header_list_cart.children[0].innerText = 'SẢN PHẨM';
            header_list_cart.children[1].className = 'cart__productName';
            header_list_cart.children[1].innerText = 'TÊN SẢN PHẨM';
            header_list_cart.children[2].className = 'cart__productPrice';
            header_list_cart.children[2].innerText = 'GIÁ';
            header_list_cart.children[3].className = 'cart__productAmount';
            header_list_cart.children[3].innerText = 'SỐ LƯỢNG';
            header_list_cart.children[4].className = 'cart__productTotal';
            header_list_cart.children[4].innerText = 'TỔNG';
            header_list_cart.children[5].className = 'cart__productRemove';
            header_list_cart.children[5].innerText = 'XÓA';

        list__cart.forEach((cart) => {
            var cart__box = document.createElement('div');
            cart__box.className = 'cart__box';

            var image = document.createElement('img');
            image.className = 'image__cart';
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

            var productAmount = document.createElement('input');
            productAmount.className = 'productAmount';
            productAmount.value = 1;
            productAmount.setAttribute("type", "number");
            // productTotal.innerText = cart.productPrice;
            cart__box.appendChild(productAmount);

            var productTotal = document.createElement('div');
            productTotal.className = 'productTotal';
            productTotal.innerText = cart.productPrice;
            cart__box.appendChild(productTotal);
    
            var delete__box = document.createElement('button');
            delete__box.className = 'delete__box fa-solid fa-trash-can';
            // delete__box.innerText = 'Xóa';
            cart__box.appendChild(delete__box)
    
            content__cart.append(cart__box);
        });
    }
    
}

render__list__cart();

const remove__box_cart = () => {
    var cart__box__All = document.querySelectorAll('cart__box');

    cart__box__All.forEach(cart__box => {
        console.log(cart__box);
        cart__box.remove();
    });
};

// remove__box_cart();


let list__cart = JSON.parse(localStorage.getItem('list__cart'));
var delete__box_All = document.querySelectorAll('.delete__box');
var delete__box = document.querySelector('.delete__box');

delete__box_All.forEach((delete__box, index) => {
    delete__box.addEventListener('click', function() {
        
        list__cart.splice(index, 1);

        localStorage.setItem('list__cart', JSON.stringify(list__cart));

        location.reload();
        render__list__cart();
    });
});

const render__count__cart = () => {
    // localStorage.getItem('list__cart') ? [] : JSON.parse(localStorage.getItem('list__cart'));
    var cart__btn = document.querySelector('.header-action__cart');
    let a = JSON.parse(localStorage.getItem('list__cart'));
    cart__btn.children[1].innerHTML = a.length;
};

render__count__cart();

var logo__img = document.querySelector('.header-page__wrapper').children[0];
logo__img.addEventListener('click', function() {
    window.location = '../../index.html';
});

function comeback() {
    window.location = '../../index.html';
};

delete__box_All.forEach(function(delete__box) {
    delete__box.addEventListener('mousedown', function() {
        delete__box.style = "color: red; transition: 0s";
    });
});