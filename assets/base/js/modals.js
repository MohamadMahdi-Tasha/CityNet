// Variables
const loginModalToggler = document.getElementById('login-modal-toggler');
const loginModal = document.getElementById('login-modal');
const modalsDarkBg = document.querySelectorAll('.my-modal-holder:not(#loader-modal, #verify-modal) > .my-bg-dark');
const modalCloseBtn = document.querySelectorAll('.my-modal-close-btn');
const mobileLoginModalToggler = document.getElementById('mobile-login-modal-toggler');

// Adding Event Listener On Login Modal Togglers That Opens Login Modal
loginModalToggler.addEventListener('click', () => {loginModal.setAttribute('data-opened', 'true');document.body.style.overflowY = 'hidden';numberInput.focus();})
mobileLoginModalToggler.addEventListener('click', () => {loginModal.setAttribute('data-opened', 'true');document.body.style.overflowY = 'hidden';numberInput.focus();})

// adding Event Listenr On Each Dark Bg Of Modals That Closes Init Modal
modalsDarkBg.forEach(item => item.addEventListener('click', () => {item.parentElement.setAttribute('data-opened', 'false');document.body.style.overflowY = 'visible';}))

// Adding Event Listener On Modal Close Button That Listens To Click And Closes Its Holder Modal
modalCloseBtn.forEach(item => item.addEventListener('click', () => {item.parentElement.parentElement.parentElement.setAttribute('data-opened', 'false');document.body.style.overflowY = 'visible'}))

// Adding Event Listener Of 'Keydown' Which Is When A Key Is Pressed On Keyboard And Then It Just Checks If Clicked ITem Is 'esc' Key
// If It Is Then Closes All Modal Holders That  Are Showing
window.addEventListener('keydown', (key) => {
    const clickedKey = key.key.toLowerCase();
    if (clickedKey === 'escape') {
        const openedModalHolder = document.querySelector('.my-modal-holder[data-opened="true"]');
        if (openedModalHolder.id === 'loader-modal' || openedModalHolder.id === 'verify-modal') {
            document.body.style.overflowY = 'hidden';
            openedModalHolder.setAttribute('data-opened', 'true')
        } else {
            document.body.style.overflowY = 'visible';
            openedModalHolder.setAttribute('data-opened', 'false')
        }
    }
})