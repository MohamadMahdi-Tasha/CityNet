const selectPersonFromListBtn = document.getElementById('select-person-from-list-btn');
const addSecondPhoneEmailButton = document.getElementById('add-second-phone-email-btn');
const secondPhoneEmail = document.getElementById('second-phone-email');
const addSecondPhoneEmailRemoveButton = document.getElementById('second-phone-email-remove-btn');

selectPersonFromListBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-logged-in') === 'false') {
        const loginModal = document.getElementById('login-modal');
        loginModal.toggleAttribute('data-opened')
    } else {
        const selectPersonModal = document.getElementById('select-person-modal');
        selectPersonModal.toggleAttribute('data-opened')
    }
})
addSecondPhoneEmailButton.addEventListener('click', () => {
    secondPhoneEmail.classList.remove('d-none')
    addSecondPhoneEmailButton.classList.add('d-none');
})
addSecondPhoneEmailRemoveButton.addEventListener('click', () => {
    secondPhoneEmail.classList.add('d-none')
    addSecondPhoneEmailButton.classList.remove('d-none');
})