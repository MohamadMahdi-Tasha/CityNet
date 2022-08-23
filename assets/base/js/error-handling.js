// Variables
const buyTicket = {
    submitBtn: document.getElementById('buy-ticket-submit-btn'),
}

// A Function That Checks If Given Date Is Before Today And Returns True Or False
const isDateBeforeToday = date => new Date(date.toDateString()) < new Date(new Date().toDateString());

// A Function That Adds Class Of 'errored' To First Given Element And Class Of 'show' To Second Given Element And
// Sets Content Of third Given Element To Given Text
function handleError(element, element2, element3, text) {
    element.classList.add('errored');
    element2.classList.add('show')
    element3.textContent = text
}

buyTicket.submitBtn.addEventListener('click', () => {})