// Variables
const modalLoginMobilePage = document.getElementById('modal-login-mobile-page');
const verifyModal = document.getElementById('verify-modal');

modalLoginMobilePage.addEventListener('submit', (event) => {
  // Preventing From Defualt action Of Form
  event.preventDefault();

  // Variables
  const spinner = document.createElement('span');
  const myHeaders = new Headers();
  const numberInput = modalLoginMobilePage.firstElementChild.firstElementChild.firstElementChild.lastElementChild;
  const phoneNumberInputValue = numberInput.value.trim();
  const dataToSend = JSON.stringify({"mobile": phoneNumberInputValue});
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: dataToSend,
    redirect: 'follow'
  };

  // Showing Spinner In Submit Button Of Form
  modalLoginMobilePage.lastElementChild.textContent = '';
  spinner.className = 'spinner-border text-white';
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
        }
      })
      .catch(error => console.log('error', error));
})