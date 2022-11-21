// Variables
const acceptRulesInput = document.getElementById('accept-rules');
const submitButton = document.getElementById('submit-btn');

// Adding Event Listener On Accept Rules Input That Listenes To Click And Checks If Its Checked Then Remove Attribute Of 'disabled' From
// Submit Button Otherwise Toggle The Attribute On It
acceptRulesInput.addEventListener('click', () => (acceptRulesInput.check) ? submitButton.removeAttribute('disabled') : submitButton.toggleAttribute('disabled'))