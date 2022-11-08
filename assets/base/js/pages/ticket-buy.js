// Variables
const selectPersonFromListBtn = document.getElementById('select-person-from-list-btn');
const addSecondPhoneEmailButton = document.getElementById('add-second-phone-email-btn');
const secondPhoneEmail = document.getElementById('second-phone-email');
const addSecondPhoneEmailRemoveButton = document.getElementById('second-phone-email-remove-btn');

// Adding Event Listener On Select Person From List That Listenes To Click And Checks If User Is Logged In. If It Is Then Show The Select Person Modal Otherwise Show
// Login Modal
selectPersonFromListBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-logged-in') === 'false') {
        const loginModal = document.getElementById('login-modal');
        loginModal.toggleAttribute('data-opened')
    } else {
        const selectPersonModal = document.getElementById('select-person-modal');
        selectPersonModal.toggleAttribute('data-opened')
    }
})

// Adding Event Listener On Add Second Phone Number Or Email Button That Listenes To Click And Shows Second Phone And Email Section And Hides
// Clicked Button
addSecondPhoneEmailButton.addEventListener('click', () => {
    secondPhoneEmail.classList.remove('d-none')
    addSecondPhoneEmailButton.classList.add('d-none');
})

// Adding Event Listener On Remove Button Of Add Second Phone Number Or Email Section That Listenes To Click And Shows addSecondPhoneEmailButton Button
// And Hides secondPhoneEmail Section
addSecondPhoneEmailRemoveButton.addEventListener('click', () => {
    secondPhoneEmail.classList.add('d-none')
    addSecondPhoneEmailButton.classList.remove('d-none');
})