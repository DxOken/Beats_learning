/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 230:
/***/ (() => {

var open = document.querySelector('.header__btn_open'),
    close = document.querySelector('.header__btn_close'),
    menu = document.querySelector('.header__menu'),
    btns = document.querySelector('.header__btns');

if (window.location.hash === '' || window.location.hash === '#home') {
  menu.firstElementChild.classList.add('selected');
} else {
  menu.childNodes.forEach(function (item) {
    if (item.firstChild.href === window.location.href) {
      item.classList.add('selected');
    }
  });
}

menu.childNodes.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    menu.childNodes.forEach(function (item) {
      item.classList.remove('selected');
    });
    menuItem.classList.add('selected');
    window.location.replace(menuItem.firstChild.href);

    if (window.innerWidth <= 1170) {
      close.click();
    }
  });
});
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1170 && close.hidden === false) {
    open.hidden = !open.hidden;
    close.hidden = !close.hidden;
    menu.classList.remove('opened');
    btns.classList.remove('opened');
  }
});
open.addEventListener('click', function () {
  open.hidden = !open.hidden;
  close.hidden = !close.hidden;
  menu.classList.add('opened');
  btns.classList.add('opened');
});
close.addEventListener('click', function () {
  open.hidden = !open.hidden;
  close.hidden = !close.hidden;
  menu.classList.remove('opened');
  btns.classList.remove('opened');
});

/***/ }),

/***/ 306:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/components/sections/header/header.js
var header = __webpack_require__(230);
;// CONCATENATED MODULE: ./src/layout/main/main.js

;// CONCATENATED MODULE: ./src/pages/index/index.js


/***/ }),

/***/ 227:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(55);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["section-main"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"main\" id=\"home\"\u003E\u003Cdiv class=\"main__content\"\u003E\u003Cdiv class=\"main__content-info\"\u003E\u003Cdiv class=\"main__content-info-desc\"\u003E" + (pug.escape(null == (pug_interp = 'TRAINING TO SUCCEED') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-info-title\"\u003E" + (pug.escape(null == (pug_interp = 'Believe and you can achieve') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-info-text\"\u003E" + (pug.escape(null == (pug_interp = 'Learn any skill from comfort of your home') ? "" : pug_interp)) + "\u003Cbr\u003EAnywhere and Anytime for only $10\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-info-btn\"\u003E";
pug_mixins["button"]('fill-text-arrow', 'Apply Now');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fillustration.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-img-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-2.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-img-3\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-3.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-img-4\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-4.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-img-5\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-5.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-img-6\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-6.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-text-arrow\"\u003E\u003Cp class=\"btn__fill-text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-arrow\"\u003E\u003Cp class=\"btn__fill-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text':
pug_html = pug_html + "\u003Cbutton class=\"btn__text\"\u003E\u003Cp class=\"btn__text-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__text-arrow\"\u003E\u003Cp class=\"btn__text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-blog"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"blog\" id=\"blog\"\u003E\u003Cdiv class=\"blog__content\"\u003E\u003Cdiv class=\"blog__content-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fcards.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"blog__content-info\"\u003E\u003Cdiv class=\"blog__content-info-title\"\u003E" + (pug.escape(null == (pug_interp = 'Get the Best Class by the Best Teachers') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"blog__content-info-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Get your best class and gain the great thing from the best and well qualified experienced teachers all over the world and get shinny. We are a unique training provider willing to give you all the skills and experience you need to fulfil your future career') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"blog__content-info-btn\"\u003E";
pug_mixins["button"]('text-arrow', 'Read more');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"blog__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-2-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"blog__dec-img-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-2-2.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-features"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"features\"\u003E\u003Cdiv class=\"features__content\"\u003E\u003Cdiv class=\"features__content-features\"\u003E\u003Cdiv class=\"features__content-features-card\"\u003E\u003Cdiv class=\"ico\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fteachers-ico.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Experienced Teacher') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'We teach in small groups with experienced, supportive staff who are trained to understand some of the problems our students face.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"features__content-features-card\"\u003E\u003Cdiv class=\"ico\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fprogress-ico.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Progressive Learning') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'Our mission is to use our knowledge, skills, and networks to equip people with multiple disadvantages with the skills to gain and sustain employment') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"features__content-features-card\"\u003E\u003Cdiv class=\"ico\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Flearn-ico.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Graduate and  job ready') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'We are a unique training provider willing to give you all the skills and experience you need to fulfil your future career') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"features__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-3-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"features__dec-img-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-3-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-course"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"course\" id=\"course\"\u003E\u003Cdiv class=\"course__content\"\u003E\u003Cdiv class=\"course__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'Featured Course') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"course__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Everything you need to  when you\'re looking') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"course__content-cards\"\u003E\u003Cdiv class=\"course__content-cards-item\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fimg-4-1.jpg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'A Complete Web development') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"scope\"\u003E" + (pug.escape(null == (pug_interp = 'Technology > Web development') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"info__price\"\u003E" + (pug.escape(null == (pug_interp = '$450') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__hours\"\u003E" + (pug.escape(null == (pug_interp = '23.5 hours') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__articles\"\u003E" + (pug.escape(null == (pug_interp = '52 Articles') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"course__content-cards-item\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fimg-4-2.jpg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Music Production Courses') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"scope\"\u003E" + (pug.escape(null == (pug_interp = 'Music & Sounding') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"info__price\"\u003E" + (pug.escape(null == (pug_interp = '$320') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__hours\"\u003E" + (pug.escape(null == (pug_interp = '18.5 hours') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__articles\"\u003E" + (pug.escape(null == (pug_interp = '27 Articles') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"course__content-cards-item\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fimg-4-3.jpg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Personality development course') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"scope\"\u003E" + (pug.escape(null == (pug_interp = 'Personal development') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"info__price\"\u003E" + (pug.escape(null == (pug_interp = '$620') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__hours\"\u003E" + (pug.escape(null == (pug_interp = '32.3 hours') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__articles\"\u003E" + (pug.escape(null == (pug_interp = '37 Articles') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"course__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-3.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"course__dec-img-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-1-6.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-text-arrow\"\u003E\u003Cp class=\"btn__fill-text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-arrow\"\u003E\u003Cp class=\"btn__fill-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text':
pug_html = pug_html + "\u003Cbutton class=\"btn__text\"\u003E\u003Cp class=\"btn__text-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__text-arrow\"\u003E\u003Cp class=\"btn__text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-trial"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"trial\"\u003E\u003Cdiv class=\"trial__content\"\u003E\u003Cdiv class=\"trial__content-info\"\u003E\u003Cp class=\"trial__content-info-desc\"\u003E" + (pug.escape(null == (pug_interp = 'SIMPLE LEARNING PLATFORM') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"trial__content-info-title\"\u003E" + (pug.escape(null == (pug_interp = 'A quality place for distance learning') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"trial__content-info-text\"\u003E" + (pug.escape(null == (pug_interp = 'A best and cheapest way of getting know learning to make a better tomorrow ') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"trial__content-info-btn\"\u003E";
pug_mixins["button"]('fill', 'Start Free Trial');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"trial__content-img\"\u003E\u003Cimg class=\"trial__content-img-main\" src=\"assets\u002Fimg\u002Ftrial-img.jpg\"\u003E\u003Cdiv class=\"trial__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-5-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"trial__dec-img-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-5-2.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"trial__dec-img-3\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-5-3.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-text-arrow\"\u003E\u003Cp class=\"btn__fill-text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-arrow\"\u003E\u003Cp class=\"btn__fill-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text':
pug_html = pug_html + "\u003Cbutton class=\"btn__text\"\u003E\u003Cp class=\"btn__text-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__text-arrow\"\u003E\u003Cp class=\"btn__text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-subscribe"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"subscribe\"\u003E\u003Cdiv class=\"subscribe__content\"\u003E\u003Cdiv class=\"subscribe__content-form\"\u003E\u003Cdiv class=\"subscribe__content-form-desc\"\u003E" + (pug.escape(null == (pug_interp = 'newsletter') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"subscribe__content-form-title\"\u003E" + (pug.escape(null == (pug_interp = 'Subscribe Our Newsletter') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"subscribe__content-form-input\"\u003E\u003Cinput placeholder=\"Enter your mail ...\"\u003E";
pug_mixins["button"]('fill-arrow');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"subscribe__content-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsubscribe-img.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"subscribe__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-6-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"subscribe__dec-img-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-6-2.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"subscribe__dec-img-3\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdec-6-3.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-text-arrow\"\u003E\u003Cp class=\"btn__fill-text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-arrow\"\u003E\u003Cp class=\"btn__fill-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text':
pug_html = pug_html + "\u003Cbutton class=\"btn__text\"\u003E\u003Cp class=\"btn__text-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'text-arrow':
pug_html = pug_html + "\u003Cbutton class=\"btn__text-arrow\"\u003E\u003Cp class=\"btn__text-arrow-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-header"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"header__content\"\u003E\u003Cdiv class=\"header__logo\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Flogo.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"header__menu\"\u003E\u003Cli class=\"header__menu-item\"\u003E\u003Ca href=\"#home\"\u003E" + (pug.escape(null == (pug_interp = 'Home') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__menu-item\"\u003E\u003Ca href=\"#blog\"\u003E" + (pug.escape(null == (pug_interp = 'About Us') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__menu-item\"\u003E\u003Ca href=\"#course\"\u003E" + (pug.escape(null == (pug_interp = 'Courses') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__menu-item\"\u003E\u003Ca href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Apparentiships') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__menu-item\"\u003E\u003Ca href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'More') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"header__btn_open\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fmenu-ico.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__btn_close\" hidden\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fclose.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__btns\"\u003E\u003Cdiv class=\"header__btns-sign-up\"\u003E";
pug_mixins["button"]('text', 'Sign up');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__btns-sign-in\"\u003E";
pug_mixins["button"]('fill', 'Login');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-footer"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cdiv class=\"footer__content\"\u003E\u003Cdiv class=\"footer__content-sitemap\"\u003E\u003Cdiv class=\"footer__content-sitemap-section\"\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Pages') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"links\"\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Home') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'About Us') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Courses') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Blog') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__content-sitemap-section\"\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Resources') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"links\"\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Our Homes') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Member Stories') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Video') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Free trial') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__content-sitemap-section\"\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Company') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"links\"\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Patnerships') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Terms of use') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Privacy') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca class=\"item\" href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Sitemap') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__content-contact\"\u003E\u003Cdiv class=\"footer__content-contact-social\"\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'Find us at') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"social-list\"\u003E\u003Ca class=\"item facebook\" href=\"\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Ffacebook-ico.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"item twitter\" href=\"\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Ftwitter-ico.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"item linkedin\" href=\"\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Flinkedin-ico.svg\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__content-contact-map\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fmap.jpg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = 'Beats Learning') ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["section-header"]();
pug_mixins["section-main"]();
pug_mixins["section-blog"]();
pug_mixins["section-features"]();
pug_mixins["section-course"]();
pug_mixins["section-trial"]();
pug_mixins["section-subscribe"]();
pug_mixins["section-footer"]();
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(835).readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ 835:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(227);
/******/ 	__webpack_require__(306);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(259);
/******/ 	
/******/ })()
;