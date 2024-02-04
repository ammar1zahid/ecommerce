// // import 'vendor/animsition/js/animsition.min.js';
// // import Animsition from 'vendor/animsition/js/animsition.js';

// // public\vendor\animsition\js\animsition.js
// export default function initializeScript() {
//     "use strict";

//     // /[ Load page ]/
//     var animsition = document.querySelector(".animsition");
//     if (animsition) {
//         var animsitionInstance = new Animsition(animsition, {
//             inClass: 'fade-in',
//             outClass: 'fade-out',
//             inDuration: 1500,
//             outDuration: 800,
//             linkElement: '.animsition-link',
//             loading: true,
//             loadingParentElement: 'html',
//             loadingClass: 'animsition-loading-1',
//             loadingInner: '<div class="loader05"></div>',
//             timeout: false,
//             timeoutCountdown: 5000,
//             onLoadEvent: true,
//             browser: ['animation-duration', '-webkit-animation-duration'],
//             overlay: false,
//             overlayClass: 'animsition-overlay-slide',
//             overlayParentElement: 'html',
//             transition: function (url) {
//                 window.location.href = url;
//             }
//         });
//     }

//     // /[ Back to top ]/
//     var windowH = window.innerHeight / 2;

//     window.addEventListener('scroll', function () {
//         var myBtn = document.getElementById('myBtn');
//         if (myBtn) {
//             if (window.scrollY > windowH) {
//                 myBtn.style.display = 'flex';
//             } else {
//                 myBtn.style.display = 'none';
//             }
//         }
//     });

//     var myBtnElement = document.getElementById('myBtn');
//     if (myBtnElement) {
//         myBtnElement.addEventListener("click", function () {
//             document.documentElement.scrollTop = 0;
//             document.body.scrollTop = 0;
//         });
//     }

//     // /[ Fixed Header ]/
//     var headerDesktop = document.querySelector('.container-menu-desktop');
//     var wrapMenu = document.querySelector('.wrap-menu-desktop');
//     var topBar = document.querySelector('.top-bar');

//     var posWrapHeader = topBar ? topBar.clientHeight : 0;

//     function handleScroll() {
//         if (window.scrollY > posWrapHeader) {
//             headerDesktop.classList.add('fix-menu-desktop');
//             wrapMenu.style.top = '0';
//         } else {
//             headerDesktop.classList.remove('fix-menu-desktop');
//             wrapMenu.style.top = posWrapHeader - window.scrollY + 'px';
//         }
//     }

//     window.addEventListener('scroll', handleScroll);

//     // /[ Menu mobile ]/
//     var btnShowMenuMobile = document.querySelector('.btn-show-menu-mobile');
//     var menuMobile = document.querySelector('.menu-mobile');
//     var arrowMainMenu = document.querySelectorAll('.arrow-main-menu-m');

//     if (btnShowMenuMobile) {
//         btnShowMenuMobile.addEventListener('click', function () {
//             this.classList.toggle('is-active');
//             menuMobile.style.display = menuMobile.style.display === 'block' ? 'none' : 'block';
//         });
//     }

//     for (var i = 0; i < arrowMainMenu.length; i++) {
//         arrowMainMenu[i].addEventListener('click', function () {
//             var subMenu = this.parentElement.querySelector('.sub-menu-m');
//             subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
//             this.classList.toggle('turn-arrow-main-menu-m');
//         });
//     }

//     window.addEventListener('resize', function () {
//         if (window.innerWidth >= 992) {
//             if (menuMobile.style.display === 'block') {
//                 menuMobile.style.display = 'none';
//                 btnShowMenuMobile.classList.toggle('is-active');
//             }

//             document.querySelectorAll('.sub-menu-m').forEach(function (subMenu) {
//                 if (subMenu.style.display === 'block') {
//                     subMenu.style.display = 'none';
//                     arrowMainMenu.forEach(function (arrow) {
//                         arrow.classList.remove('turn-arrow-main-menu-m');
//                     });
//                 }
//             });
//         }
//     });

//     // /[ Show / hide modal search ]/
//     var showModalSearch = document.querySelector('.js-show-modal-search');
//     var hideModalSearch = document.querySelector('.js-hide-modal-search');
//     var modalSearchHeader = document.querySelector('.modal-search-header');

//     if (showModalSearch && hideModalSearch && modalSearchHeader) {
//         showModalSearch.addEventListener('click', function () {
//             modalSearchHeader.classList.add('show-modal-search');
//             this.style.opacity = '0';
//         });

//         hideModalSearch.addEventListener('click', function () {
//             modalSearchHeader.classList.remove('show-modal-search');
//             showModalSearch.style.opacity = '1';
//         });

//         modalSearchHeader.addEventListener('click', function (e) {
//             e.stopPropagation();
//         });
//     }

//     // /[ Isotope ]/
//     var topeContainer = document.querySelector('.isotope-grid');
//     var filterButtons = document.querySelectorAll('.filter-tope-group button');

//     if (topeContainer && filterButtons.length > 0) {
//         var isotope = new isotope(topeContainer, {
//             itemSelector: '.isotope-item',
//             layoutMode: 'fitRows',
//             percentPosition: true,
//             animationEngine: 'best-available',
//             masonry: {
//                 columnWidth: '.isotope-item'
//             }
//         });

//         filterButtons.forEach(function (button) {
//             button.addEventListener('click', function () {
//                 var filterValue = button.getAttribute('data-filter');
//                 isotope.arrange({ filter: filterValue });
//             });
//         });

//         var isotopeButtons = document.querySelectorAll('.filter-tope-group button');
//         isotopeButtons.forEach(function (button) {
//             button.addEventListener('click', function () {
//                 isotopeButtons.forEach(function (btn) {
//                     btn.classList.remove('how-active1');
//                 });
//                 button.classList.add('how-active1');
//             });
//         });
//     }

//     // /[ Filter / Search product ]/
//     var showFilter = document.querySelector('.js-show-filter');
//     var showSearch = document.querySelector('.js-show-search');
//     var panelFilter = document.querySelector('.panel-filter');
//     var panelSearch = document.querySelector('.panel-search');

//     if (showFilter && showSearch && panelFilter && panelSearch) {
//         showFilter.addEventListener('click', function () {
//             this.classList.toggle('show-filter');
//             panelFilter.style.display = panelFilter.style.display === 'block' ? 'none' : 'block';

//             if (showSearch.classList.contains('show-search')) {
//                 showSearch.classList.remove('show-search');
//                 panelSearch.style.display = 'none';
//             }
//         });

//         showSearch.addEventListener('click', function () {
//             this.classList.toggle('show-search');
//             panelSearch.style.display = panelSearch.style.display === 'block' ? 'none' : 'block';

//             if (showFilter.classList.contains('show-filter')) {
//                 showFilter.classList.remove('show-filter');
//                 panelFilter.style.display = 'none';
//             }
//         });
//     }

//     // /[ Cart ]/
//     var showCart = document.querySelector('.js-show-cart');
//     var panelCart = document.querySelector('.js-panel-cart');
//     var hideCart = document.querySelector('.js-hide-cart');

//     if (showCart && panelCart && hideCart) {
//         showCart.addEventListener('click', function () {
//             panelCart.classList.add('show-header-cart');
//         });

//         hideCart.addEventListener('click', function () {
//             panelCart.classList.remove('show-header-cart');
//         });
//     }

//     // /[ Sidebar ]/
//     var showSidebar = document.querySelector('.js-show-sidebar');
//     var sidebar = document.querySelector('.js-sidebar');
//     var hideSidebar = document.querySelector('.js-hide-sidebar');

//     if (showSidebar && sidebar && hideSidebar) {
//         showSidebar.addEventListener('click', function () {
//             sidebar.classList.add('show-sidebar');
//         });

//         hideSidebar.addEventListener('click', function () {
//             sidebar.classList.remove('show-sidebar');
//         });
//     }


// // /\[ \+\/- num product \]/;

//     var numProductDownButtons = document.querySelectorAll('.btn-num-product-down');
//     var numProductUpButtons = document.querySelectorAll('.btn-num-product-up');

//     numProductDownButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             var numProduct = Number(button.nextElementSibling.value);
//             if (numProduct > 0) button.nextElementSibling.value = numProduct - 1;
//         });
//     });

//     numProductUpButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             var numProduct = Number(button.previousElementSibling.value);
//             button.previousElementSibling.value = numProduct + 1;
//         });
//     });



//     // /[ Rating ]/
//     var wrapRatings = document.querySelectorAll('.wrap-rating');

//     wrapRatings.forEach(function (wrapRating) {
//         var items = wrapRating.querySelectorAll('.item-rating');
//         var input = wrapRating.querySelector('input');
//         var rated = -1;

//         items.forEach(function (item, index) {
//             item.addEventListener('mouseenter', function () {
//                 items.forEach(function (it, i) {
//                     if (i <= index) {
//                         it.classList.remove('zmdi-star-outline');
//                         it.classList.add('zmdi-star');
//                     } else {
//                         it.classList.add('zmdi-star-outline');
//                         it.classList.remove('zmdi-star');
//                     }
//                 });
//             });

//             item.addEventListener('click', function () {
//                 rated = index;
//                 input.value = index + 1;
//             });
//         });

//         wrapRating.addEventListener('mouseleave', function () {
//             items.forEach(function (it, i) {
//                 if (i <= rated) {
//                     it.classList.remove('zmdi-star-outline');
//                     it.classList.add('zmdi-star');
//                 } else {
//                     it.classList.add('zmdi-star-outline');
//                     it.classList.remove('zmdi-star');
//                 }
//             });
//         });
//     });

//     // /[ Show modal1 ]/
//     var showModal1 = document.querySelector('.js-show-modal1');
//     var hideModal1 = document.querySelector('.js-hide-modal1');
//     var modal1 = document.querySelector('.js-modal1');

//     if (showModal1 && hideModal1 && modal1) {
//         showModal1.addEventListener('click', function (e) {
//             e.preventDefault();
//             modal1.classList.add('show-modal1');
//         });

//         hideModal1.addEventListener('click', function () {
//             modal1.classList.remove('show-modal1');
//         });
//     }
// }

// // Call the initializeScript function when the DOM content is loaded
// document.addEventListener("DOMContentLoaded", function () {
//     initializeScript();
// });