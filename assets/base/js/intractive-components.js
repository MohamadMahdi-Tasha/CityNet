// Variables
const calenderIntractiveComponent = document.querySelectorAll('.intractive-component.calender');
const dropDownButtonsInIntractiveComponents = document.querySelectorAll('.intractive-component.dropdown ~ .my-drop-down button');
const cityComponentDropDownButtons = document.querySelectorAll('.city-component-drop-down-button');
const intractiveComponents = document.querySelectorAll('.intractive-component:not(.calender, .dropdown)');
const plusMinusButton = document.querySelectorAll('.plus-minus-button');
const passengerClassSelectButton = document.querySelectorAll('.passenger-class-select-button');
const inputIntractiveComponent = document.querySelectorAll('.intractive-component.input');

// Adding Event Listener On Each Calendar Interactive Component That Focus To Input Init And Adds Event Listener Of 'focus' And 'blur' To It
// That Adds Or Removes Class Name Of 'focused' From It
calenderIntractiveComponent.forEach(component => {
    const contentOfClickedComponent = component.nextElementSibling;
    const inputOfClickedComponentInItsContents = contentOfClickedComponent.querySelector('.pdp-input');

    component.addEventListener('click', () => inputOfClickedComponentInItsContents.focus())
    inputOfClickedComponentInItsContents.addEventListener('focus', () => component.classList.add('focused'))
    inputOfClickedComponentInItsContents.addEventListener('blur', () => component.classList.remove('focused'))
})

// Adding Event Listener Of Click To Each Button In DropDown Intractive Component That Sets Attribute Of 'data-value' In Component To
// Text Content Of Clicked Button And Sets Content Of In Component To Text Content Of Clicked Button Again And Removes Attribute Of 'data-opened'
// From DropDown Holder And Adds Class Of 'active' To Clicked Button And Removes It From Element That Haves It In DropDown
dropDownButtonsInIntractiveComponents.forEach(button => {
    button.addEventListener('click', () => {
        const parentOfGrandParentOfClickedButton = button.parentElement.parentElement.parentElement;
        const dropDownComponent = parentOfGrandParentOfClickedButton.previousElementSibling;
        const dropDownParentOfClickedItem = parentOfGrandParentOfClickedButton.parentElement;
        const valueOfDropDownComponentToShow = dropDownComponent.querySelector('h6');
        const activeButtonInDropDown = parentOfGrandParentOfClickedButton.querySelector('.my-drop-down button.active')

        dropDownComponent.setAttribute('data-value', button.textContent)
        valueOfDropDownComponentToShow.textContent = button.textContent;
        dropDownParentOfClickedItem.removeAttribute('data-opened');
        button.classList.add('active');
        activeButtonInDropDown.classList.remove('active');
    })
})

// Adding Event Listeners On Each Interactive Component That Toggles Class Of 'focused' To Clicked Component
intractiveComponents.forEach(component => {
    component.addEventListener('click', () => {
        component.classList.toggle('focused')
    })
})

// Adding Event Listener On Each DropDown Component That Sets abbreviation And title And If Its Primary On Clicked Buttons Text Content
// Then Creates 'selected-city' Component And Sets Attributes Of brand, title Based On Returned Data From Switch Statement And Checks
// If Last Child Of Component Is 'selected-city' Remove Old One And Replace New One In It Otherwise Append It To Component And At The Last
// Closes Drop Down Of Component And Replaces 'focused' With 'will-not-close' In Class List Of Component And Sets Attribute 'data-selected-city'
// In Component To Abbreviation
cityComponentDropDownButtons.forEach(button => {
    button.addEventListener('click', () => {
        const grandparentOfGrandparentOfClickedButton = button.parentElement.parentElement.parentElement.parentElement
        const dropDownHolderOfClickedButton = grandparentOfGrandparentOfClickedButton.parentElement;
        const componentOfClickedButton = grandparentOfGrandparentOfClickedButton.previousElementSibling;

        const createdSelectedCityElement = document.createElement('selected-city');
        let brandToShow;
        let nameToShow;
        let isPrimary;

        switch (button.textContent) {
            case "تهران":brandToShow = "THR";nameToShow = "تهران, ایران (Tehran)";isPrimary = true;break;
            case "کیش":brandToShow = "KIH";nameToShow = "کیش, ایران (Kish Island)";break;
            case "استانبول":brandToShow = "IST";nameToShow = "استانبول, ترکیه (Istanbul)";break;
            case "دبی":brandToShow = "DXD";nameToShow = "دبی, عمارات (Dubai)";break;
            case "مشهد":brandToShow = "MHD";nameToShow = "مشهد, ایران (Mashhad)";break;
            case "اهواز":brandToShow = "AWZ";nameToShow = "اهواز, ایران (Ahvaz)";break;
            case "انکارا":brandToShow = "ESB";nameToShow = "انکارا, ترکیه (Ankara)";break;
            case "لندن":brandToShow = "LHR";nameToShow = "لندن, بریتانیا (London)";break;
            case "تبریز":brandToShow = "TBZ";nameToShow = "تبریز, ایران (Tabriz)";break;
            case "قشم":brandToShow = "GSM";nameToShow = "قشم, ایران (Qeshm Island)";break;
            case "تورنتو":brandToShow = "YYZ";nameToShow = "تورنتو, کانادا (Torento)";break;
            case "ایروان":brandToShow = "ENV";nameToShow = "ایروان, ارمنستان (Yerevan)";break;
            case "بندر عباس":brandToShow = "BND";nameToShow = "بندر عباس, ایران (Bandar Abbas)";break;
            case "شیراز":brandToShow = "SYZ";nameToShow = "شیراز, ایران (Shiraz)";break;
            case "مسقط":brandToShow = "MCT";nameToShow = "مسقط, عمان (Muscat)";break;
            case "پکن":brandToShow = "PEK";nameToShow = "پکن, چین (Beijing)";break;
            case "رشت":brandToShow = "RAS";nameToShow = "رشت, ایران (Rasht)";break;
            case "اصفهان":brandToShow = "IFN";nameToShow = "اصفهان, ایران (Isfahan)";isPrimary = true;break;
            case "نجف":brandToShow = "NJF";nameToShow = "نجف, عراق (Najaf)";break;
            case "باکو":brandToShow = "GYD";nameToShow = "باکو, اذربایجان (Baku)";break;
        }

        createdSelectedCityElement.setAttribute('brand', brandToShow)
        createdSelectedCityElement.setAttribute('title', nameToShow)
        if (isPrimary) {createdSelectedCityElement.setAttribute('primary', 'true')}

        if (componentOfClickedButton.lastElementChild.tagName.toLowerCase() === 'selected-city') {
            componentOfClickedButton.lastElementChild.remove()
            componentOfClickedButton.appendChild(createdSelectedCityElement);
        } else {
            componentOfClickedButton.appendChild(createdSelectedCityElement);
        }

        dropDownHolderOfClickedButton.removeAttribute('data-opened')
        componentOfClickedButton.classList.replace('focused', 'will-not-close')
        componentOfClickedButton.setAttribute('data-selected-city', brandToShow)
    })
})

// Adding Event Listener On Each Plus And Minus Buttons In Passenger Select Component That Checks If Number Is Less Than 9 Or More Than 0 Add 1 To It Or
// Remove 1 From It And Then Gets All Those Numbers And Pushes Converted Text Content Of Them To Number Into 'arrayOfCalculatedNumbers' Array
// And Sets Attribute Of 'data-passenger-count' And Text Content Of Passengers Count Text In Component To Sum Of Elements In 'arrayOfCalculatedNumbers' Variable
plusMinusButton.forEach(button => {
    button.addEventListener('click', () => {
        const parentOfGrandParentOfClickedButton = button.parentElement.parentElement.parentElement
        const numberTarget = button.parentElement.firstElementChild.nextElementSibling;
        const componentOfClickedButton = parentOfGrandParentOfClickedButton.previousElementSibling
        const convertedToNumberValueOfTarget = Number(numberTarget.textContent)
        const allCalculatedNumbersInComponentOfClickedButton = parentOfGrandParentOfClickedButton.querySelectorAll('.calculated-numbers');
        const arrayOfCalculatedNumbers = [];
        const passengersCountInComponentOfCLickedItem = componentOfClickedButton.querySelector('.passengers-count');

        if (button.textContent === '+') {
            if (convertedToNumberValueOfTarget < 9) {numberTarget.textContent =  convertedToNumberValueOfTarget + 1;}
        } else {
            if (convertedToNumberValueOfTarget > 0) {numberTarget.textContent =  convertedToNumberValueOfTarget - 1;}
        }

        allCalculatedNumbersInComponentOfClickedButton.forEach(number => arrayOfCalculatedNumbers.push(Number(number.textContent)))
        componentOfClickedButton.setAttribute('data-passenger-count', arrayOfCalculatedNumbers.reduce((a, b) => a + b))
        passengersCountInComponentOfCLickedItem.textContent = arrayOfCalculatedNumbers.reduce((a, b) => a + b)
    })
})

// Adding Event Listener On Each Class Select Button In  Passenger Select Component That Closes DropDown And Then Sets Text Content Of
// Text In Component And DropDown Toggler To Text Content Of Selected Button And Also Sets Attribute Of 'data-passenger-class' Of Component
// To Text Content Of Selected Button And Adds Class Of 'active' To Clicked Button And Removes It From Button That Haves It
passengerClassSelectButton.forEach(button => {
    button.addEventListener('click', () => {
        const holderOfDropDownOfClickedButton = button.parentElement.parentElement.parentElement.parentElement;
        const selectedClassInInnerDropDown = holderOfDropDownOfClickedButton.querySelector('.selected-class-inner-drop-down')
        const componentOfClickedButton = holderOfDropDownOfClickedButton.parentElement.previousElementSibling;
        const classTextElementInComponent = componentOfClickedButton.querySelector('.passengers-class');
        const activeButton = document.querySelector('.passenger-class-select-button.active');

        holderOfDropDownOfClickedButton.removeAttribute('data-opened')
        selectedClassInInnerDropDown.textContent = button.textContent;
        classTextElementInComponent.textContent = button.textContent;
        componentOfClickedButton.setAttribute('data-passenger-class', button.textContent)
        button.classList.add('active');
        activeButton.classList.remove('active')
    })
})

inputIntractiveComponent.forEach(component => {
    const inputInComponent = component.querySelector('input');

    component.addEventListener('click', () => inputInComponent.focus())
    inputInComponent.addEventListener('focus', () => component.classList.add('focused'))
    inputInComponent.addEventListener('input', () => component.setAttribute('data-value', inputInComponent.value))
    inputInComponent.addEventListener('blur', () => {if (inputInComponent.value === '') {component.classList.remove('focused')}})
})