// Variables
const loggedInButtonHeader = document.getElementById('logged-in-button-header');

// Adding Event Listner On Logged In Button In Header That Opens It Drop Down
loggedInButtonHeader.addEventListener('click', () => loggedInButtonHeader.nextElementSibling.classList.toggle('show'))