// Variables
const loggedInButtonHeader = document.getElementById('logged-in-button-header');
const dataToSend = JSON.stringify({"mobile": "9109181033"});
const xhr = new XMLHttpRequest();
const htmlElement = document.querySelector('html');

// Adding Event Listener On Logged In Button In Header That Opens It Drop Down
loggedInButtonHeader.addEventListener('click', () => loggedInButtonHeader.nextElementSibling.classList.toggle('show'))

// Adding Event Listener On When xml Request Is Ready . It Checks If It Has Successful Load Then If It Has It
// Parses Text Returned From Call To Object Type And Checks If Its Returned Data Shows "There Is No User With This Number" And Adds Class Of
// 'not-logged-in' To Html Element Of Page. Otherwise If Returned Data Was Returns "success", Adds Class Of 'logged-in' To Html Element
xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        const convertedData = JSON.parse(this.responseText);
        if (convertedData.data.msg === "لم یتم العثور علی مستخدم برقم الهاتف هذا") {
            htmlElement.classList.add('not-logged-in');
        } else if (convertedData.data.status === "success") {
            htmlElement.classList.add('logged-in');
        }
    }
});

// Some XMLRequest Settings
xhr.withCredentials = true;
xhr.open("GET", "https://www.newcash.me/api/v1/airfare-web/login");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("debug", "true");
xhr.setRequestHeader("Content-Type", "application/json");

// Sends Given Data To XHR
xhr.send(dataToSend);