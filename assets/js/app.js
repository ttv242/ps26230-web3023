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
