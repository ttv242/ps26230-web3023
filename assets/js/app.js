var imgSlide = document.querySelector('.img-slide');

var arrImgSlides = [
    "/assets/images/slide-header/slide-header-1.webp",
    "/assets/images/slide-header/slide-header-2.webp",
    "/assets/images/slide-header/slide-header-3.webp",
    "/assets/images/slide-header/slide-header-4.webp",
    "/assets/images/slide-header/slide-header-5.webp",
    "/assets/images/slide-header/slide-header-6.webp",
    "/assets/images/slide-header/slide-header-7.webp",
    "/assets/images/slide-header/slide-header-8.jpg",
    "/assets/images/slide-header/slide-header-9.webp",
    "/assets/images/slide-header/slide-header-10.webp"
];

var index = 0;

function prev() {
    index--;
    if (index<-0)
        index = arrImgSlides.length-1;
        imgSlide.src = arrImgSlides[index];
}

function next() {
    index++;
    if (index==arrImgSlides.length)
        index = 0;
        imgSlide.src = arrImgSlides[index];
}

setInterval("next()", 3000);

var content__wrapper = document.querySelector('.content__wrapper');

console.log(content__wrapper);

const products__arr = [
    {
        'pb__img' : '/assets/images/product__img/top-seller-img/cpu_i3-12100f_tray-600x600_fdad11f961ce4ac0a178a62df5d0be03_large.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },
    
    {
        'pb__img' : '/assets/images/product__img/top-seller-img/r4_kt_fr_beast_8g3200_50c1b28040cb48309d93dccfbe1ab286_large.webp',
        'content__pb' : 'Ram DDR4 Kingston 8G/3200 Fury Beast (1x 8GB) (KF432C16BB/8)',
        'price__pb' : '570,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/ssd_pto_256g_p300_9cd5efc5be7c4fc69113f6b74b79d232_large.webp',
        'content__pb' : 'Ổ cứng SSD 256G Patriot P300 M.2 NVMe PCIe Gen3x4 (P300P256GM28)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/i3.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/oc_6417a56a0b114a8399c78deb9a5aa17c_large.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/m.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/ss.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/l.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/1_95b3ec94eb8e47e0adc9cc12bcbe6341_large.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/sp-hot_b27b199b4ec44fbfb3418fa6f2785190_large.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/1_95b3ec94eb8e47e0adc9cc12bcbe6341_large.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/sp-hot_b27b199b4ec44fbfb3418fa6f2785190_large.webp',
        'content__pb' : 'CPU Intel Core i3 12100F TRAY (3.30 Up to 4.30GHz)',
        'price__pb' : '2,150,000₫'
    }
];

var i = 0;
var ii = products__arr.length-(products__arr.length-6);

// console.log(products__arr.length);

const handle__render__products = (i, ii) => {
    var products__boxs = document.querySelectorAll('.product__box');
    products__boxs.forEach(products__box => products__box.remove())
    var products__boxs = document.querySelectorAll('.product__box');
    products__boxs.forEach(products__box => products__box.remove())
    for (i; i<ii; i++) {
        var products = products__arr[i];
        var productImg = products.pb__img;
        var productName = products.content__pb;
        var productPrice = products.price__pb;

        var products__box = document.createElement('div');
        products__box.className = 'product__box';
        content__wrapper.appendChild(products__box);

        var product__img = document.createElement('img');
        product__img.className = 'product__img';
        products__box.appendChild(product__img);
        product__img.src = productImg; 

        var content__product = document.createElement('a');
        content__product.className = 'content__product';
        products__box.appendChild(content__product);
        content__product.innerText = productName;
        
        var price__product = document.createElement('p');
        price__product.className = 'price__product';
        products__box.appendChild(price__product);
        price__product.innerText = productPrice;
        
    };
    return i, ii;
};

handle__render__products(i, ii);

function prev__control() {
    if (ii > 6) {
        i = i - 6;
        ii = ii - 6;
        handle__render__products(i, ii);
        console.log(i, ii);
        return i, ii;
    }
};

function next__control() {
    if (ii < products__arr.length) {
        i = i + 6;
        ii = ii + ii;
        handle__render__products(i, ii);
        console.log(i, ii);
        return i, ii;
    }
};


