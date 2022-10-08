// Variables
const dropDownToggler = document.querySelectorAll('.my-drop-down-holder > .my-drop-down-toggler');

// Adding Event Listener On Each Drop Down Toggler That Toggles Attribute Of 'data-opened' To Clicked Items Parent Element
dropDownToggler.forEach(item => item.addEventListener('click', () => item.parentElement.toggleAttribute('data-opened')))