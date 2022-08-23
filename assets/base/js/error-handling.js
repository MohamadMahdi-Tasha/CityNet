// Variables
const buyTicket = {
    submitBtn: document.getElementById('buy-ticket-submit-btn'),
    name: document.getElementById('name'),
    lastName: document.getElementById('last-name'),
    meliNumber: document.getElementById('meli-number'),
    birthDate: document.getElementById('first-date'),
    sex: document.getElementById('sex'),
    passNumber: document.getElementById('pass-num'),
    expirationDatePass: document.getElementById('second-date'),
}

// A Function That Checks If String Is English
const isEnglish = string => /^[a-zA-Z]+$/.test(string);

// A Function That Adds Class Of 'errored' To First Given Element And Class Of 'show' To Second Given Element And
// Sets Content Of third Given Element To Given Text
function handleError(element, element2, element3, text) {
    element.classList.add('errored');
    element2.classList.add('show')
    element3.textContent = text
}

// A Function That Checks If First Given Element ClassList Contains 'errored' Then Replace It With 'success' Otherwise
// Add 'success' To First Element And Then Remove Class Of 'show' From Second Given Element
function handleSuccses(element, element2) {
    if (element.classList.contains('errored')) {element.classList.replace('errored','success');}
    else {element.classList.add('success');}

    element2.classList.remove('show')
}

buyTicket.submitBtn.addEventListener('click', () => {
    if (!isEnglish(buyTicket.name.value)) {
        handleError(buyTicket.name.parentElement,
            buyTicket.name.parentElement.nextElementSibling,
            buyTicket.name.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با زبان انگلیسی پر کنید'
        )
    }
    else {handleSuccses(buyTicket.name.parentElement, buyTicket.name.parentElement.nextElementSibling)}

    if (!isEnglish(buyTicket.lastName.value)) {
        handleError(buyTicket.lastName.parentElement,
            buyTicket.lastName.parentElement.nextElementSibling,
            buyTicket.lastName.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با زبان انگلیسی پر کنید'
        )
    }
    else {handleSuccses(buyTicket.lastName.parentElement, buyTicket.lastName.parentElement.nextElementSibling)}

    if (buyTicket.meliNumber.value.length !== 10) {
        handleError(buyTicket.meliNumber.parentElement,
            buyTicket.meliNumber.parentElement.nextElementSibling,
            buyTicket.meliNumber.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با 10 رقم شماره ملی شخص پر کنید'
        )
    }
    else {handleSuccses(buyTicket.meliNumber.parentElement, buyTicket.meliNumber.parentElement.nextElementSibling)}

    if (buyTicket.birthDate.value === '') {
        handleError(buyTicket.birthDate.parentElement,
            buyTicket.birthDate.parentElement.nextElementSibling,
            buyTicket.birthDate.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را پر کنید'
        )
    }
    else {handleSuccses(buyTicket.birthDate.parentElement, buyTicket.birthDate.parentElement.nextElementSibling)}

    if (buyTicket.expirationDatePass.value === '') {
        handleError(buyTicket.expirationDatePass.parentElement,
            buyTicket.expirationDatePass.parentElement.nextElementSibling,
            buyTicket.expirationDatePass.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را پر کنید'
        )
    }
    else {handleSuccses(buyTicket.expirationDatePass.parentElement, buyTicket.expirationDatePass.parentElement.nextElementSibling)}

    if (buyTicket.passNumber.value.length !== 8) {
        handleError(buyTicket.passNumber.parentElement,
            buyTicket.passNumber.parentElement.nextElementSibling,
            buyTicket.passNumber.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با 8 رقم شماره پاسپورت شخص پر کنید'
        )
    }
    else {handleSuccses(buyTicket.passNumber.parentElement, buyTicket.passNumber.parentElement.nextElementSibling)}

    if (document.querySelectorAll('.intractive-input-component.errored').length === 0) {
        const link = document.createElement('a');
        link.href = 'buy-last-page.html';
        link.click();
    }
})