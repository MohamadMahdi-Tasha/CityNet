// Variables
const loggedInButtonHeader = document.getElementById('logged-in-button-header');
const htmlElement = document.querySelector('html');
const data = JSON.stringify({"mobile": "9109181033"});
const xhr = new XMLHttpRequest();

// Adding Event Listener On Logged In Button In Header That Opens It Drop Down
loggedInButtonHeader.addEventListener('click', () => loggedInButtonHeader.nextElementSibling.classList.toggle('show'))

// A Function That Checks If First Status Is True Then Adds Class Of 'not-logged-in' To Html Element Of Page, Else If Second Given
// Status Is True Then It Adds Class Of 'logged-in' To Html Element Of Page.
const setLoggedInByStatus = (status1, status2) => {if (status1) {htmlElement.classList.add('not-logged-in');} else if (status2) {htmlElement.classList.add('logged-in');}};


xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    const thereIsNoUserWithThisNumber = "لم یتم العثور علی مستخدم برقم الهاتف هذا";
    const returnedJson = JSON.parse(this.responseText);

    setLoggedInByStatus(returnedJson.data.msg === thereIsNoUserWithThisNumber, returnedJson.data.status === "success")
  }
});

xhr.open("GET", "https://www.newcash.me/api/v1/airfare-web/login");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("debug", "true");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);