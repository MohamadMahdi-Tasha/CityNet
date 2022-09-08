// Variables
const loggedInButtonHeader = document.getElementById('logged-in-button-header');
const htmlElement = document.querySelector('html');

// Adding Event Listener On Logged In Button In Header That Opens It Drop Down
loggedInButtonHeader.addEventListener('click', () => loggedInButtonHeader.nextElementSibling.classList.toggle('show'))

// A Function That Checks If First Status Is True Then Adds Class Of 'not-logged-in' To Html Element Of Page, Else If Second Given
// Status Is True Then It Adds Class Of 'logged-in' To Html Element Of Page.
const setLoggedInByStatus = (status1, status2) => {if (status1) {htmlElement.classList.add('not-logged-in');} else if (status2) {htmlElement.classList.add('logged-in');}};