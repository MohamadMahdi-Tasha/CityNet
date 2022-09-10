// Variables
const modalLoginMobilePage = document.getElementById('modal-login-mobile-page');
const verifyModal = document.getElementById('verify-modal');
const verifyForm = document.getElementById('verify-form');
const numberInput = modalLoginMobilePage.firstElementChild.firstElementChild.firstElementChild.lastElementChild;
const htmlElement = document.querySelector('html');

// Event Of Submit On Login Form
modalLoginMobilePage.addEventListener('submit', (event) => {
  // Preventing From Defualt action Of Form
  event.preventDefault();

  // Variables
  const spinner = document.createElement('span');
  const myHeaders = new Headers();
  const phoneNumberInputValue = numberInput.value;
  const dataToSend = JSON.stringify({"mobile": phoneNumberInputValue});
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: dataToSend,
    redirect: 'follow'
  };

    // Showing Spinner In Submit Button Of Form
    spinner.className = 'spinner-border text-white';
    modalLoginMobilePage.lastElementChild.textContent = '';
    modalLoginMobilePage.lastElementChild.appendChild(spinner)

  // Setting Headers
  myHeaders.append("Accept", "application/json");
  myHeaders.append("debug", "true");
  myHeaders.append("Content-Type", "application/json");

  // Fetching Login Api
  fetch("https://www.newcash.me/api/v1/airfare-web/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        const thereIsNoUserWithThisNumber = "لم یتم العثور علی مستخدم برقم الهاتف هذا";

        modalLoginMobilePage.lastElementChild.textContent = 'ورود با رمز یکبار مصرف';
        spinner.remove();

        if (result.data.msg === thereIsNoUserWithThisNumber) {
          handleError(
              numberInput.parentElement,
              numberInput.parentElement.nextElementSibling,
              numberInput.parentElement.nextElementSibling.firstElementChild,
              'همچین شماره ای در سیستم ثبت نشده'
          )
        } else {
          handleSuccses(numberInput.parentElement, numberInput.parentElement.nextElementSibling)
          verifyModal.setAttribute('data-opened', 'true');
          loginModal.setAttribute('data-opened', 'false');
            verifyCodeInput.focus();
        }
      })
      .catch(error => console.log('error', error));
})

// Event Of Submit On Verify Form
verifyForm.addEventListener('submit', (event) => {
    // Preventing From Defualt action Of Form
    event.preventDefault();

    // variables
    const myHeaders = new Headers();
    const dataToSend = JSON.stringify({"mobile": numberInput.value, "verify_code": verifyCodeInput.value});
    const spinner = document.createElement('span');
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: dataToSend,
        redirect: 'follow'
    };

    // Showing Spinner In Submit Button Of Form
    spinner.className = 'spinner-border text-white';
    verifyForm.lastElementChild.textContent = '';
    verifyForm.lastElementChild.appendChild(spinner)

    // Setting Headers
    myHeaders.append("Accept", "application/json");
    myHeaders.append("debug", "true");
    myHeaders.append("Content-Type", "application/json");

    // Fetching Verify Api
    fetch("https://www.newcash.me/api/v1/airfare-web/verify", requestOptions)
        .then(response => response.json())
        .then(result => {
            const returnedToken = result.data.token;
            verifyForm.lastElementChild.textContent = 'ورود';
            spinner.remove();

            if (returnedToken === null) {
                handleError(
                    verifyCodeInput.parentElement,
                    verifyCodeInput.parentElement.nextElementSibling,
                    verifyCodeInput.parentElement.nextElementSibling.firstElementChild,
                    'کد اشتباه وارد شده'
                )
            } else {
                handleSuccses(verifyCodeInput.parentElement, verifyCodeInput.parentElement.nextElementSibling)
                localStorage.setItem('logged-in-token', result.data.token);
                verifyModal.setAttribute('data-opened', 'false');
                document.body.style.overflowY = 'visible'
            }
        })
        .catch(error => console.log('error', error));
})

verifyModal.setAttribute('data-opened', 'false');
htmlElement.setAttribute('logged-in', 'true');

if (localStorage.getItem('logged-in-token') !== null) {htmlElement.setAttribute('logged-in', 'true');}