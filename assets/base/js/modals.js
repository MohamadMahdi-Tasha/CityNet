// Variables
const modalInnerPageToggler = document.querySelectorAll('.modal-inner-page-toggler');
const loginCodeSModal = document.getElementById('login-code-s-modal');
const loginModalToggler = document.getElementById('login-modal-toggler');
const loginModal = document.getElementById('login-modal');
const modalsDarkBg = document.querySelectorAll('.my-modal-holder:not(#loader-modal) > .my-bg-dark');
const modalCloseBtn = document.querySelectorAll('.my-modal-close-btn');
const loginWSPasswordToggler = document.getElementById('login-w-s-password-toggler');
const prevPageLoginBtn = document.querySelectorAll('.prev-page-login-btn');
const loginSInnerPageToggle = document.querySelectorAll('.login-s-inner-page-toggle');
const signupPageToggler = document.querySelectorAll('.signup-page-toggler');
const signupModal = document.getElementById('signup-modal');
const signupInnerPageToggle = document.querySelectorAll('.signup-inner-page-toggle');
const hamkarOnly = document.querySelector('.hamkar-only');
const mobileLoginModalToggler = document.getElementById('mobile-login-modal-toggler');

// Adding Event Listener On CSS Selector Of (.signup-type-button-holders > .signup-type-button:last-of-type) That Listens To Click And
// Adds Class Of active To Last Of Type (signup-type-button) And Removes It From First Of Type And Also Removes class Of d-none From Hamkar Only Section.
document.querySelector('.signup-type-button-holders > .signup-type-button:last-of-type').addEventListener('click', () => {
    document.querySelector('.signup-type-button-holders > .signup-type-button:last-of-type').classList.add('active');
    document.querySelector('.signup-type-button-holders > .signup-type-button:first-of-type').classList.remove('active');
    hamkarOnly.classList.remove('d-none');
})

// Adding Event Listener On CSS Selector Of (.signup-type-button-holders > .signup-type-button:first-of-type) That Listens To Click And
// Adds Class Of active To first Of Type (signup-type-button) And Removes It From last Of Type And adds class Of d-none to Hamkar Only Section.
document.querySelector('.signup-type-button-holders > .signup-type-button:first-of-type').addEventListener('click', () => {
    document.querySelector('.signup-type-button-holders > .signup-type-button:first-of-type').classList.add('active');
    document.querySelector('.signup-type-button-holders > .signup-type-button:last-of-type').classList.remove('active');
    hamkarOnly.classList.add('d-none');
})

// Adding Event Listener On Each Signup Page Toggler That Listens To Click And Sets Value Of Attribute Of 'data-opened' To True In Signup Modal
// Then Checks If Item Icludes 'from-login' Class In Its Class List. If It Is Then Closes Holder Modal Of it
signupPageToggler.forEach(item => {
    item.addEventListener('click', () => {
        signupModal.setAttribute('data-opened', 'true');

        (item.classList.contains('from-login'))
            ? item.parentElement.parentElement.parentElement.setAttribute('data-opened', 'false')
            : item.parentElement.parentElement.setAttribute('data-opened', 'false');
    })
})

// Adding Event Listener Of CLick On Each Preview Button For Login Modal That Closes Modal Of Clicked Button And Opens Login Modal
prevPageLoginBtn.forEach(item => {
    item.addEventListener('click', () => {
        loginWSPasswordToggler.parentElement.parentElement.parentElement.setAttribute('data-opened', 'true');
        loginCodeSModal.setAttribute('data-opened', 'false');
    })
})

// A Function That Gets Attritube Of 'data-target' Of Given Element Then Gets Element By Id Of Value Of Taken Value Of 'data-target'
// Attr Then replaces Class Of 'd-none' With 'current' In Target And Replaces 'current' To 'd-none' For Element To Hide
function showInnerPage(element, elementToHide) {
    const targetId = element.getAttribute('data-target');
    const target = document.getElementById(targetId);
    target.classList.replace('d-none', 'current');
    elementToHide.classList.replace('current', 'd-none');
}

// Adding Event Listener On loginWSPasswordToggler That Listens To Click And closes Modal Of it And Opens Login With Code Modal
loginWSPasswordToggler.addEventListener('click', () => {
    loginWSPasswordToggler.parentElement.parentElement.parentElement.setAttribute('data-opened', 'false');
    loginCodeSModal.setAttribute('data-opened', 'true');
})

// Adding Event Listener Each signupInnerPageToggle, loginSInnerPageToggle And modalInnerPageToggler That Listens To Click And Calls  'showInnerPage' Function On Given Item
signupInnerPageToggle.forEach(item => item.addEventListener('click', () => showInnerPage(item, document.querySelector('.signup-inner-page.current'))))
loginSInnerPageToggle.forEach(item => item.addEventListener('click', () => showInnerPage(item, document.querySelector('.login-s-page.current'))))
modalInnerPageToggler.forEach(item => item.addEventListener('click', () => showInnerPage(item, document.querySelector('.modal-inner-page.current'))))

// Adding Event Listener On Login Modal Togglers That Opens Login Modal
loginModalToggler.addEventListener('click', () => {loginModal.setAttribute('data-opened', 'true');document.body.style.overflowY = 'hidden'})
mobileLoginModalToggler.addEventListener('click', () => {loginModal.setAttribute('data-opened', 'true');document.body.style.overflowY = 'hidden'})

// adding Event Listenr On Each Dark Bg Of Modals That Closes Init Modal
modalsDarkBg.forEach(item => item.addEventListener('click', () => {item.parentElement.setAttribute('data-opened', 'false');document.body.style.overflowY = 'visible';}))

// Adding Event Listener On Modal Close Button That Listens To Click And Closes Its Holder Modal
modalCloseBtn.forEach(item => item.addEventListener('click', () => {item.parentElement.parentElement.parentElement.setAttribute('data-opened', 'false');document.body.style.overflowY = 'visible'}))

// Adding Event Listener Of 'Keydown' Which Is When A Key Is Pressed On Keyboard And Then It Just Checks If Clicked ITem Is 'esc' Key
// If It Is Then Closes All Modal Holders That  Are Showing
window.addEventListener('keydown', (key) => {
    const clickedKey = key.key.toLowerCase();
    if (clickedKey === 'escape') {
        document.querySelectorAll('.my-modal-holder[data-opened="true"]').forEach(item => item.setAttribute('data-opened', 'false'))
    }
})