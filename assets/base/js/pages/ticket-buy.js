// Variables
const addSecondPhoneEmailButton = document.getElementById('add-second-phone-email-btn');
const secondPhoneEmail = document.getElementById('second-phone-email');
const addSecondPhoneEmailRemoveButton = document.getElementById('second-phone-email-remove-btn');

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