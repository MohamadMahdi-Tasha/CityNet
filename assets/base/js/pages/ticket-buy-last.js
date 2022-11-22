// Variables
const acceptRulesInput = document.getElementById('accept-rules');
const submitButton = document.getElementById('submit-btn');

// Adding Event Listener On Accept Rules Input That Listenes To Click And Checks If Its Checked Then Remove Attribute Of 'disabled' From
// Submit Button Otherwise Toggle The Attribute On It
acceptRulesInput.addEventListener('click', () => (acceptRulesInput.check) ? submitButton.removeAttribute('disabled') : submitButton.toggleAttribute('disabled'))

window.addEventListener('load', () => {
    const selectedTicket = JSON.parse(localStorage.getItem('selected-ticket'));

    htmlElement.setAttribute('data-contract-number', '279836')
    htmlElement.setAttribute('data-selected-ticket-icon', selectedTicket.icon)
    htmlElement.setAttribute('data-selected-ticket-name', selectedTicket.name)
    htmlElement.setAttribute('data-selected-ticket-flight-number', selectedTicket.flightNumber)
    htmlElement.setAttribute('data-selected-ticket-start-time', selectedTicket.startTime)
    htmlElement.setAttribute('data-selected-ticket-end-time', selectedTicket.endTime)
    htmlElement.setAttribute('data-selected-ticket-price', selectedTicket.price)
    htmlElement.setAttribute('data-selected-ticket-start-loaction', selectedTicket.startLocation)
    htmlElement.setAttribute('data-selected-ticket-end-loaction', selectedTicket.endLocation)
    htmlElement.setAttribute('data-selected-ticket-date', selectedTicket.date)
    htmlElement.setAttribute('data-selected-ticket-plane-model', selectedTicket.planeModel)
    document.getElementById('contract-number').textContent = htmlElement.getAttribute('data-contract-number');
    document.querySelectorAll('.start-location-abbr').forEach(element => element.textContent = `(${htmlElement.getAttribute('data-selected-ticket-start-loaction')}) ${persianNameFromAbbrevation(htmlElement.getAttribute('data-selected-ticket-start-loaction'))}`)
    document.querySelectorAll('.end-location-abbr').forEach(element => element.textContent = `(${htmlElement.getAttribute('data-selected-ticket-end-loaction')}) ${persianNameFromAbbrevation(htmlElement.getAttribute('data-selected-ticket-end-loaction'))}`)
})