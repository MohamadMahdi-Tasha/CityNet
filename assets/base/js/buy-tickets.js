// Variables
const addSecondMobileAndEmail = document.getElementById('add-second-mobile-and-email');
const removeSecondMobileAndEmail = document.getElementById('remove-second-mobile-and-email');
const secondMobileAndEmail = document.getElementById('second-mobile-and-email');
const ticketLeftTopBtn = document.querySelectorAll('.ticket-left-top-btn');
const ticketLeftTopBtnBorder = document.querySelector('.ticket-left-top-btn-border');

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

// Handling Errors
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
    if (buyTicket.birthDate.value !== '' && new Date(buyTicket.birthDate.value) > new Date()) {
        handleError(buyTicket.birthDate.parentElement,
            buyTicket.birthDate.parentElement.nextElementSibling,
            buyTicket.birthDate.parentElement.nextElementSibling.firstElementChild,
            'لطفا فیلد را منطقی پر کنید'
        )
    }
    else if (buyTicket.birthDate !== '' && new Date(buyTicket.birthDate.value) < new Date()) {handleSuccses(buyTicket.birthDate.parentElement, buyTicket.birthDate.parentElement.nextElementSibling)}

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

// Adding Event Listener On 'addSecondMobileAndEmail' That Listens to CLick And Removes 'd-none' Class Of
// secondMobileAndEmail Element And Adds Class  Of 'd-none' Again To 'addSecondMobileAndEmail' Element
addSecondMobileAndEmail.addEventListener('click', () => {
    secondMobileAndEmail.classList.remove('d-none')
    addSecondMobileAndEmail.classList.add('d-none')
})

// Adding Event Listener On 'addSecondMobileAndEmail' That Listens to CLick And Adds 'd-none' Class Of
// secondMobileAndEmail Element And Removes  Class Of 'd-none' Again To 'addSecondMobileAndEmail' Element
removeSecondMobileAndEmail.addEventListener('click', () => {
    secondMobileAndEmail.classList.add('d-none')
    addSecondMobileAndEmail.classList.remove('d-none')
})

// A Function That Gets Right Value And TranslateX Value As Parameter And Then Sets Property Of Right And TranslateX Of
// Border In Background Of Top Side Left Buttons To Given  Parameter
function setRightAndTranslateXTopLeftBorder(right, translateX) {
    ticketLeftTopBtnBorder.style.setProperty('right', right)
    ticketLeftTopBtnBorder.style.setProperty('transform', `translateX(${translateX}%)`)
}

// Adding Event Listener On Each Top Side Left Buttons That Listens To Click And First Gets Value Of 'data-value' Attribute And Then
// Removes 'active' Class Name From document.querySelector('.ticket-left-top-btn.active'), document.querySelector('.ticket-left-top-contents.active')
// After That Adds Class Of 'active' To 'data-Target' Of Clicked Item And Clicked item. After That Checks If Text Content Of Element Is What Then Calls 'setRightAndTranslateXTopLeftBorder'
// Function And Gives It Some Parameters.
ticketLeftTopBtn.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target')

        document.querySelector('.ticket-left-top-btn.active').classList.remove('active')
        document.querySelector('.ticket-left-top-contents.active').classList.remove('active')

        item.classList.add('active');
        document.getElementById(target).classList.add('active');

        if (item.textContent === "قوانین") {setRightAndTranslateXTopLeftBorder('33%', 0)}
        else if (item.textContent === "مقدار بار") {setRightAndTranslateXTopLeftBorder('100%', 100)}
        else if (item.textContent === "جزییات پرواز") {setRightAndTranslateXTopLeftBorder('0', 0)}
    })
})