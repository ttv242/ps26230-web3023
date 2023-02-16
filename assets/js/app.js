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

var top__seller = document.querySelector('.top-seller'); 
var content__top__seller = top__seller.children[1];
var content__wrapper = content__top__seller.children[0];


// var content__wrapper = document.querySelector('.content__wrapper');

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
        'price__pb' : '550,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/i3.webp',
        'content__pb' : 'CPU Intel Core i3 12100F Box Chính Hãng',
        'price__pb' : '2,490,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/oc_6417a56a0b114a8399c78deb9a5aa17c_large.webp',
        'content__pb' : 'VGA Asus Gaming TUF OC 1660 Super 6G 2 Fan',
        'price__pb' : '4,890,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/m.webp',
        'content__pb' : 'Mainboard Asus H610M-K Prime DDR4',
        'price__pb' : '1,990,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/ss.webp',
        'content__pb' : 'SSD Kingston 500G NV2 M.2 2280 NVMe (SNV2S/500G)',
        'price__pb' : '950,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/l.webp',
        'content__pb' : 'Màn hình LCD 24” Gigabyte G24F-EK FHD IPS 165Hz 1ms Freesync Gaming',
        'price__pb' : '3,790,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/top-seller-img/1_95b3ec94eb8e47e0adc9cc12bcbe6341_large.webp',
        'content__pb' : 'Laptop MSI Modern 14 B11MOU 1030VN i3-1115G4 | 8GB | 256GB | Intel UHD | 14 inch FHD IPS | KBL | Win 11 (Gray)',
        'price__pb' : '10,490,000₫'
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
var j = products__arr.length-(products__arr.length-6);

console.log(j);

const handle__create__items = () => {
    var product__box__All = document.querySelectorAll('.product__box');
    var product__box = document.querySelector('.product__box');
    console.log(product__box__All);
    console.log(product__box);

    product__box__All.forEach(product__box => { 
        var btn_item = document.createElement('div');
        btn_item.className = 'btn_items';

        for (var i=0; i<4; i++) {
            var btn_item_pd = document.createElement('i');
            btn_item.appendChild(btn_item_pd);
        }
        
        for (var i=0; i<4; i++) {
            switch (i) {
                case 0:
                    btn_item.children[0].className = 'fa fa-compress';
                case 1: 
                    btn_item.children[1].className = 'fa fa-search-plus';
                case 2:
                    btn_item.children[2].className = 'fa fa-eye-slash';
                case 3:
                    btn_item.children[3].className = 'fa fa-shopping-bag';
            }
        }

        product__box.appendChild(btn_item);
        // console.log(document.querySelectorAll(btn_item_pd.length));
        // btn_item.className = 'fa fa-compress';
    });
    // var btn_items = document.querySelectorAll('.btn_items');
    // var btn_item = document.querySelector('.btn_items');
    // btn_items.forEach(function(btn_item) {
    // btn_item.children[0].className = 'fa fa-compress';
    // })
    // btn_item.children[0].className = 'fa fa-compress';
}

const handle__render__products = (i, j) => {
    var products__boxs = document.querySelectorAll('.product__box');
    products__boxs.forEach(product__box => product__box.remove());
    
    for (i; i<j; i++) {
        var products = products__arr[i];
        var productImg = products.pb__img;
        var productName = products.content__pb;
        var productPrice = products.price__pb;

        var product__box = document.createElement('div');
        product__box.className = 'product__box';
        content__wrapper.appendChild(product__box);

        var product__img = document.createElement('img');
        product__img.className = 'product__img';
        product__box.appendChild(product__img);
        product__img.src = productImg; 

        var content__product = document.createElement('a');
        content__product.className = 'content__product';
        product__box.appendChild(content__product);
        content__product.innerText = productName;
        
        var price__product = document.createElement('p');
        price__product.className = 'price__product';
        product__box.appendChild(price__product);
        price__product.innerText = productPrice;    
    };
    handle__create__items();
};

handle__render__products(i, j);

// console.log(product__box__All.length);

// product__box__All.forEach(function (div) {
//     div.addEventListener('mouseover', function(event) {
//         var event__target = event.target;
//         console.log(event__target);
//         console.log(product__box);
//             event__target.appendChild(btn_item);
//     });
// });

// product__box__All.forEach(function (div) {
//     div.addEventListener('mouseout', function(event) {
//         var event__target = event.target;
//         event__target.remove(btn_item);
//     });
// });

function prev__control() {
    if (j > 6) {
        i = i-1;
        j = j-1;
        handle__render__products(i, j);
        console.log(i, j);
        return i, j;
    }
};

function next__control() {
    if (j < products__arr.length) {
        i = i+1;
        j = j+1;
        handle__render__products(i, j);
        console.log(i, j);
        return i, j;
    }
};

var main = document.querySelector('.main');
console.log(main);

var office__pc = document.createElement('div');
office__pc.className = 'office-pc';
main.appendChild(office__pc);

    var title = document.createElement('div');
    title.className = 'title';
    office__pc.appendChild(title);

        var content__title = document.createElement('p');
        content__title.className = 'content-title';
        title.appendChild(content__title);
        content__title.innerText = 'PC VĂN PHÒNG';

        var faws = document.createElement('i');
        faws.className = 'fa-solid fa-play';
        title.appendChild(faws);

        var ul__title__pc = document.createElement('ul');
        title.appendChild(ul__title__pc);

            for (var creates=0; creates<3; creates++) {
                var li__title__pc = document.createElement('li');
                    var a__title__pc = document.createElement('a');
                    a__title__pc.href = '';
                    li__title__pc.appendChild(a__title__pc);
                    ul__title__pc.appendChild(li__title__pc);
            }

            ul__title__pc.firstChild.children[0].innerText = 'Bộ máy để bàn';
            ul__title__pc.children[1].children[0].innerText = 'Bộ mini';
            ul__title__pc.lastChild.children[0].innerText = 'Xem tất cả';

        var office__pc__banner = document.createElement('img');
        office__pc__banner.className = 'office__pc__banner';
        office__pc.appendChild(office__pc__banner);
        office__pc__banner.src = '/assets/images/banner_product_home_2.webp';

        var content = document.createElement('div');
        content.className = 'content';
        office__pc.appendChild(content);

            var content__wrapper__pc = document.createElement('div');
            content__wrapper__pc.className = 'content__wrapper__pc';
            content.appendChild(content__wrapper__pc);

                var list__product__btn__pc = document.createElement('div');
                list__product__btn__pc.className = 'list__product__btn__pc';
                content__wrapper__pc.appendChild(list__product__btn__pc);

                    var prev__control__btn__pc = document.createElement('i');
                    prev__control__btn__pc.className = 'fa-solid fa-arrow-left-long prev__control__btn__pc';
                    list__product__btn__pc.appendChild(prev__control__btn__pc);

                    var next__control__btn__pc = document.createElement('i');
                    next__control__btn__pc.className = 'fa-solid fa-arrow-right-long next__control__btn__pc';
                    list__product__btn__pc.appendChild(next__control__btn__pc);

const products__arr__pc = [
    {
        'pb__img' : '/assets/images/product__img/office-pc-img/star-vp-05-600x600_297d2792191e44c6a6b7151b83c263f8_large.webp',
        'content__pb' : 'Cấu Hình Văn Phòng STAR_VP05',
        'price__pb' : '5,200,000₫'
    },
    
    {
        'pb__img' : '/assets/images/product__img/office-pc-img/mays-bo-7-600x600_1d071d96daf24187af4b8ce4b3f7ba8f_large.webp',
        'content__pb' : 'Cấu Hình Văn Phòng STAR_VP07',
        'price__pb' : '8,210,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/office-pc-img/vp8.webp',
        'content__pb' : 'Cấu Hình Văn Phòng STAR_VP08',
        'price__pb' : '7,565,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/office-pc-img/vp9-600x600_235cd05427e14a9fac3d6b49d4d7df05_large.webp',
        'content__pb' : 'Cấu Hình Văn Phòng STAR_VP09',
        'price__pb' : '5,105,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/office-pc-img/vp10-600x600_78a1052a36124622b566a130c10aea82_large.webp',
        'content__pb' : 'Cấu Hình Văn Phòng STAR_VP10',
        'price__pb' : '6,990,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/office-pc-img/vp11-600x600_13ab797d591d440995de0139565908aa_large.webp',
        'content__pb' : 'Cấu Hình Văn Phòng STAR_VP11',
        'price__pb' : '8,155,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/office-pc-img/combo1_909c4e19d1fd41668a432f92064aea0d_large.webp',
        'content__pb' : 'Combo máy bộ Lenovo V50S',
        'price__pb' : '9,990,000₫'
    },

    {
        'pb__img' : '/assets/images/product__img/office-pc-img/combo2_a7c706ecfd4945d2b99994d3a24864da_large.webp',
        'content__pb' : 'Combo máy bộ Lenovo G5',
        'price__pb' : '14,990,000₫'
    }
];

console.log(content__wrapper__pc);

var e = 0;
var s = products__arr__pc.length-(products__arr__pc.length-6);

const handle__create__items__pc = () => {
    var product__box__pc__All = document.querySelectorAll('.product__box__pc');
    var product__box = document.querySelector('.product__box__pc');
    console.log(product__box__pc__All);
    // console.log(products__box__pc);

    product__box__pc__All.forEach(product__box => { 
        var btn_item__pc = document.createElement('div');
        btn_item__pc.className = 'btn_items__pc';

        for (var i=0; i<4; i++) {
            var btn_item_pd__pc = document.createElement('i');
            btn_item__pc.appendChild(btn_item_pd__pc);
        }
        
        for (var i=0; i<4; i++) {
            switch (i) {
                case 0:
                    btn_item__pc.children[0].className = 'fa fa-compress';
                case 1: 
                    btn_item__pc.children[1].className = 'fa fa-search-plus';
                case 2:
                    btn_item__pc.children[2].className = 'fa fa-eye-slash';
                case 3:
                    btn_item__pc.children[3].className = 'fa fa-shopping-bag';
            }
        }

        product__box.appendChild(btn_item__pc);
    });
}

const handle__render__products__pc = (e, s) => {
    var product__box__pc = document.querySelectorAll('.product__box__pc');
    product__box__pc.forEach(product__box__pc => product__box__pc.remove());
    
    for (e; e<s; e++) {
        var products = products__arr__pc[e];
        var productImg = products.pb__img;
        var productName = products.content__pb;
        var productPrice = products.price__pb;

        var products__box__pc = document.createElement('div');
        products__box__pc.className = 'product__box__pc';
        content__wrapper__pc.appendChild(products__box__pc);

        var product__img = document.createElement('img');
        product__img.className = 'product__img';
        products__box__pc.appendChild(product__img);
        product__img.src = productImg; 

        var content__product = document.createElement('a');
        content__product.className = 'content__product';
        products__box__pc.appendChild(content__product);
        content__product.innerText = productName;
        
        var price__product = document.createElement('p');
        price__product.className = 'price__product';
        products__box__pc.appendChild(price__product);
        price__product.innerText = productPrice;
        
    };
    handle__create__items__pc();
};

handle__render__products__pc(e, s);

prev__control__btn__pc.addEventListener('click', function() {
    if (s > 6) {
        e = e-1;
        s = s-1;
        handle__render__products__pc(e, s);
        console.log(e, s);
        return e, s;
    }
});

next__control__btn__pc.addEventListener('click', function() {
    if (s < products__arr__pc.length) {
        e = e+1;
        s = s+1;
        handle__render__products__pc(e, s);
        console.log(e, s);
        return e, s;
    }
});




