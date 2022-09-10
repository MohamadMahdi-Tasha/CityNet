// Variables
const modalLoginMobilePage = document.getElementById('modal-login-mobile-page');

modalLoginMobilePage.addEventListener('submit', (event) => {
  event.preventDefault();
  const spinner = document.createElement('span');

  modalLoginMobilePage.lastElementChild.textContent = '';
  spinner.className = 'spinner-border text-white';
  modalLoginMobilePage.lastElementChild.appendChild(spinner)
})