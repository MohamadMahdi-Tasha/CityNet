// Variables
const myHeaders = new Headers();
const loggedInButtonHeader = document.getElementById('logged-in-button-header');

myHeaders.append("Accept", "application/json");
myHeaders.append("debug", "true");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// Adding Event Listner On Logged In Button In Header That Opens It Drop Down
loggedInButtonHeader.addEventListener('click', () => loggedInButtonHeader.nextElementSibling.classList.toggle('show'))

// Fetching Login Api That Checks If Massage Of Returned Data Is "لم یتم العثور علی مستخدم برقم الهاتف هذا"
// Which Means "User With This Number Not Found". If It Is Adds Class Of 'not-logged-in' To Html ELement
// Other Wise Adds 'logged-in' Class Name To It And Closes Loader Modal Which Shows At First And gets Console.log Of errors For Debuging Purposes
fetch("https://www.newcash.me/api/v1/airfare-web/login", requestOptions)
    .then(data => data.json())
    .then(data => {
        const massage = data[0];
        (massage === "لم یتم العثور علی مستخدم برقم الهاتف هذا")
            ? document.querySelector('html').classList.add('not-logged-in')
            : document.querySelector('html').classList.add('logged-in');
    })
    .catch(error => console.log('error', error));