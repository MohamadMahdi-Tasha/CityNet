// Variables
const oneWaySubmitBtn = document.getElementById('one-way-submit-btn');
const startPlace = document.getElementById('start-place');
const endPlace = document.getElementById('end-place');
const flightDate = document.getElementById('first-date');

// A Function That Checks Given Sign And Returns Citys Name
function returnCityName(condition) {
    let returnableCity;
    switch (condition) {
        case 'THR':returnableCity = "Tehran";break;
        case 'KIH':returnableCity = "Kish";break;
        case 'IST':returnableCity = "Istanbul";break;
        case 'DXD':returnableCity = "Dubai";break;
        case 'MHD':returnableCity = "Mashhad";break;
        case 'AWZ':returnableCity = "Ahvaz";break;
        case 'ESB':returnableCity = "Ankara";break;
        case 'LHR':returnableCity = "London";break;
        case 'TBZ':returnableCity = "Tabriz";break;
        case 'GSM':returnableCity = "Qeshm";break;
        case 'YYZ':returnableCity = "Torento";break;
        case 'ENV':returnableCity = "Yerevan";break;
        case 'BND':returnableCity = "Bandar Abbas";break;
        case 'SYZ':returnableCity = "Shiraz";break;
        case 'MCT':returnableCity = "Muscat";break;
        case 'PEK':returnableCity = "Beijing";break;
        case 'RAS':returnableCity = "Rasht";break;
        case 'IFN':returnableCity = "Isfahan";break;
        case 'NJF':returnableCity = "Najaf";break;
        case 'GYD':returnableCity = "Baku";break;
    }

    return returnableCity
}

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

    // If There Is No Problem Then Set Local Storage Item
    if (document.querySelectorAll('.intractive-input-component.errored').length === 0) {
        const newLink = document.createElement('a');
        newLink.href = 'flight.html';

        localStorage.setItem('data-ticket', JSON.stringify({
            'startCity': returnCityName(startPlace.lastElementChild.firstElementChild.lastElementChild.textContent),
            'endCity': returnCityName(endPlace.lastElementChild.firstElementChild.lastElementChild.textContent),
            'flightDate': flightDate.value,
            'adultNumber': Number(document.querySelector('.adult-number').textContent),
            'kidNumber': Number(document.querySelector('.kid-number').textContent),
            'newBornNumber': Number(document.querySelector('.new-born-number').textContent),
        }))

        newLink.click();
    }
})