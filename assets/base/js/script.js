// Variables
const dropDownToggler = document.querySelectorAll('.my-drop-down-holder > .my-drop-down-toggler');

dropDownToggler.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.toggleAttribute('data-opened');
    })
})