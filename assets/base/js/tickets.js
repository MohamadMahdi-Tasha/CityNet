// Variables
const ticketPageAsideMobileTopSideToggle = document.querySelector('.ticket-page-aside-mobile-top-side-toggle');
const ticketPageAside = document.querySelector('.ticket-page-aside');
const ticketComponentBottomAccardionToggler = document.querySelectorAll('.ticket-component-bottom-accardion-toggler');

ticketPageAsideMobileTopSideToggle.addEventListener('mousedown', () => ticketPageAside.classList.toggle('top'))
window.onscroll = () => (window.scrollY !== 0) ? ticketPageAside.classList.add('scrolled') : ticketPageAside.classList.remove('scrolled');

ticketComponentBottomAccardionToggler.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-accardion-target');
        const targetElement = document.getElementById(target);
        const openedAccardionItem = document.querySelector('.ticket-component-bottom-accardion[data-opened]');
        const openedAccardionToggler = document.querySelector('.ticket-component-bottom-accardion-toggler[data-opened]');

        item.toggleAttribute('data-opened');
        targetElement.toggleAttribute('data-opened');
        openedAccardionItem.removeAttribute('data-opened');
        openedAccardionToggler.removeAttribute('data-opened');
    })
})

// Setting Slider Range
$( function() {
    $( `.slider-range` ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 0, 24 ],
    });
} );