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

buyTicket.submitBtn.addEventListener('click', () => {
    if (!isEnglish(buyTicket.name.value)) {
        handleError(buyTicket.name.parentElement,
            buyTicket.name.parentElement.nextElementSibling,
            buyTicket.name.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با زبان انگلیسی پر کنید'
        )
    }
    if (!isEnglish(buyTicket.name.value)) {
        handleError(buyTicket.lastName.parentElement,
            buyTicket.lastName.parentElement.nextElementSibling,
            buyTicket.lastName.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با زبان انگلیسی پر کنید'
        )
    }
    if (buyTicket.meliNumber.value.length !== 10) {
        handleError(buyTicket.meliNumber.parentElement,
            buyTicket.meliNumber.parentElement.nextElementSibling,
            buyTicket.meliNumber.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با 10 رقم شماره ملی شخص پر کنید'
        )
    }
    if (buyTicket.birthDate.value === '') {
        handleError(buyTicket.birthDate.parentElement,
            buyTicket.birthDate.parentElement.nextElementSibling,
            buyTicket.birthDate.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را پر کنید'
        )
    }
    if (buyTicket.expirationDatePass.value === '') {
        handleError(buyTicket.expirationDatePass.parentElement,
            buyTicket.expirationDatePass.parentElement.nextElementSibling,
            buyTicket.expirationDatePass.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را پر کنید'
        )
    }
    if (buyTicket.passNumber.value.length !== 8) {
        handleError(buyTicket.passNumber.parentElement,
            buyTicket.passNumber.parentElement.nextElementSibling,
            buyTicket.passNumber.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را با 8 رقم شماره پاسپورت شخص پر کنید'
        )
    }
    if (new Date(buyTicket.birthDate.value) > new Date()) {
        handleError(buyTicket.birthDate.parentElement,
            buyTicket.birthDate.parentElement.nextElementSibling,
            buyTicket.birthDate.parentElement.nextElementSibling.firstElementChild,
            'لطفا تاریخ تولد را منطقی وارد کنید'
        )
    }
})