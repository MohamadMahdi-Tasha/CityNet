// Variables
const dropDownToggler = document.querySelectorAll('.my-drop-down-holder > .my-drop-down-toggler');
const togglers = document.querySelectorAll('.toggler');
const currencyChanger = document.querySelectorAll('.currency-changer');
const htmlElement = document.querySelector('html');
const intractiveButtonsBtn = document.querySelectorAll('.intractive-buttons-btn');


// Adding Event Listener On Each Drop Down Toggler That Toggles Attribute Of 'data-opened' To Clicked Items Parent Element
dropDownToggler.forEach(item => item.addEventListener('click', () => item.parentElement.toggleAttribute('data-opened')))

// Adding Event Listener On Each Item With Class Of 'toggler' Item That Listens To CLick And Gets Target Element Of It By Its Attribute
// And Toggles Attribute Of 'data-opened' To It
togglers.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        const targetElement = document.getElementById(target);

        targetElement.toggleAttribute('data-opened');
    })
})

// Adding Event Listener On Each Item With Class Of 'currency-changer' That Listens To Click And Sets Attribute Of 'data-currency' In Html Element
// To Value Of 'data-item-currency' Attribute Of Clicked Item
currencyChanger.forEach(item => {
    item.addEventListener('click', () => {
        const itemsCurrency  = item.getAttribute('data-item-currency');
        htmlElement.setAttribute('data-currency', itemsCurrency);
    })
})

intractiveButtonsBtn.forEach(item => {
    item.addEventListener('click', () => {
        const bgBorder = item.parentElement.firstElementChild;
        const parentPos = item.parentElement.getBoundingClientRect()
        const childPos = item.getBoundingClientRect()
        const activeButton = document.querySelector('.intractive-buttons-btn[active]');
        const rightToSet = (childPos.right - parentPos.right) / -1

        activeButton.removeAttribute('active');
        item.setAttribute('active', 'true');
        bgBorder.style.right = `${rightToSet}px`
    })
})