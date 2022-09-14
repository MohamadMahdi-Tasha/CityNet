// Variables
const oneWaySubmitBtn = document.getElementById('one-way-submit-btn');
const startPlace = document.getElementById('start-place');
const endPlace = document.getElementById('end-place');
const flightDate = document.getElementById('first-date');

// Handled Errors
oneWaySubmitBtn.addEventListener('click', () => {
    if (startPlace.lastElementChild.tagName.toLowerCase() !== 'div') {
        handleError(
            startPlace,
            startPlace.parentElement.nextElementSibling,
            startPlace.parentElement.nextElementSibling.firstElementChild,
            'لطفا شهر را وارد کنید'
        )
    }
    if (startPlace.lastElementChild.tagName.toLowerCase() === 'div') {handleSuccses(startPlace, startPlace.parentElement.nextElementSibling)}
    if (endPlace.lastElementChild.tagName.toLowerCase() !== 'div') {
        handleError(
            endPlace,
            endPlace.parentElement.nextElementSibling,
            endPlace.parentElement.nextElementSibling.firstElementChild,
            'لطفا شهر را وارد کنید'
        )
    }
    if (endPlace.lastElementChild.tagName.toLowerCase() === 'div') {handleSuccses(endPlace, endPlace.parentElement.nextElementSibling)}
    if (flightDate.value === '') {
        handleError(
            flightDate.parentElement,
            flightDate.parentElement.nextElementSibling,
            flightDate.parentElement.nextElementSibling.firstElementChild,
            'لطفا تاریخ را مشخص کنید'
        )
    }
    if (flightDate.value !== '') {handleSuccses(flightDate.parentElement, flightDate.parentElement.nextElementSibling)}
    if (new Date(flightDate.value) < new Date()) {
        handleError(
            flightDate.parentElement,
            flightDate.parentElement.nextElementSibling,
            flightDate.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را منطقی پر کنید'
        )
    }
    if (new Date(flightDate.value) > new Date()) {handleSuccses(flightDate.parentElement, flightDate.parentElement.nextElementSibling)}
})