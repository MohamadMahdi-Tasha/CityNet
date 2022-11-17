// Variables
const dropDownsTogglers  = document.querySelectorAll('.my-drop-down-toggler');
const currencyChangerButtons = document.querySelectorAll('.currency-changer');
const htmlElement = document.querySelector('html');
const currencyHeaderPersian = document.getElementById('currency-header-per');
const currencyHeaderEnglish = document.getElementById('currency-header-en');
const togglers = document.querySelectorAll('.toggler');
const excelButtons = document.querySelectorAll('.excel-btn');
const buttonsInPagginations = document.querySelectorAll('.my-paggination > button:not(.next-prev-pagination-btn)');
const intractiveButtons = document.querySelectorAll('.intractive-buttons-btn');
const intractiveButtonsBorder = document.querySelectorAll('.intractive-buttons-border');
const innerPageTogglers = document.querySelectorAll('.inner-page-toggler');
const collapseToggler = document.querySelectorAll('.my-collapse-toggler');
const switchButton = document.querySelectorAll('.switch-button');
const exitAccountItems = document.querySelectorAll('.exit-account');

// Functions
// A Function That Takes English Abbreviation Of Currency And Returns Persian Name Of It
function persianNameByEnAbbrevationCurrency(englishAbrevation) {
    let stringToReturn;

    switch (englishAbrevation) {
        case "IRR":stringToReturn = "ریال";break;
        case "USD":stringToReturn = "دلار";break;
        case "EUR":stringToReturn = "یورو";break;
        case "TRY":stringToReturn = "لیر ترکیه";break;
        case "IQD":stringToReturn = "دینار عراق";break;
    }

    return stringToReturn;
}

// Event Listeners
// Adding Event Listener Of Load To Window That Checks If Selected Currency Is Included (selected-currency : Name Of Setted Currency) If It Is Then Set It In Header
// Otherwise Create One In Local Storage And Set It
window.addEventListener('load', () => {
    const currencyToSelectInLocalStoarge = localStorage.getItem('selected-currency');

    if (currencyToSelectInLocalStoarge !== null) {
        currencyHeaderPersian.textContent = persianNameByEnAbbrevationCurrency(currencyToSelectInLocalStoarge);
        currencyHeaderEnglish.textContent = currencyToSelectInLocalStoarge;
    } else {
        localStorage.setItem('selected-currency', 'IRR');
        currencyHeaderPersian.textContent = persianNameByEnAbbrevationCurrency(localStorage.getItem('selected-currency'));
        currencyHeaderEnglish.textContent = localStorage.getItem('selected-currency');
    }
})

// Added Event Listener Of Keydown Which Is When Keyboard Key Is Pressed That Checks If Clicked Key Was Escape Key.
// If It Is Then Close Opened Modal And Drop Down By Removing 'data-opened' Attribute From Them
window.addEventListener('keydown', (event) => {
    const clickedKey = event.key.toLowerCase();
    if (clickedKey === 'escape') {
        const openedModals = document.querySelectorAll('.my-modal-holder[data-opened]');
        const openedDropDowns = document.querySelectorAll('.my-drop-down-holder[data-opened]')

        openedModals.forEach(modal =>  modal.removeAttribute('data-opened'))
        openedDropDowns.forEach(dropdown => {
            if (dropdown.parentElement.tagName.toLowerCase() !== 'intractive-component') {
                dropdown.removeAttribute('data-opened')
            } else {
                dropdown.removeAttribute('data-opened');
                dropdown.firstElementChild.classList.remove('focused')
            }
        })
    }
})

// Adding Event Listener Of 'click' To Each DropDown Toggler That Toggles Attribute Of 'data-opened' And Adds Event Listener Of Click To Each Button In
// Its Dropdown That Closes DropDown
dropDownsTogglers.forEach(toggler => {
    const dropDown = toggler.nextElementSibling;
    const dropDownHolderOfToggler = toggler.parentElement;
    const buttonsInClickedDropDown = dropDown.querySelectorAll('button:not(.my-drop-down-toggler)');

    toggler.addEventListener('click', () => {
        const openedDropDownHolder = document.querySelector('.my-drop-down-holder[data-opened]');
        const openedDropDownToggler = document.querySelector('.my-drop-down-toggler[data-opened]');

        dropDownHolderOfToggler.toggleAttribute('data-opened')
        toggler.toggleAttribute('data-opened');

        if (openedDropDownToggler !== null) {
            if (openedDropDownToggler.classList.contains('intractive-component')) {
              openedDropDownToggler.classList.remove('focused')
            }

            openedDropDownHolder.removeAttribute('data-opened');
            openedDropDownToggler.removeAttribute('data-opened');

        }
    })

    buttonsInClickedDropDown.forEach(button => button.addEventListener('click', () => {
        const dropDownHolderOfButton = button.parentElement.parentElement;
        dropDownHolderOfButton.removeAttribute('data-opened')
    }))
})

// Adding Event Listener On Each Currency Changer That Listens To Click And Sets Attribute Of 'data-currency' In Html Element To
// Value Of Click Item And Also Sets 'selected-currency' Item In Local Storage To Click Item And Shows THe Contents In Header
currencyChangerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const valueToBeSetByButton = button.getAttribute('data-item-currency');

        htmlElement.setAttribute('data-currency', valueToBeSetByButton);
        localStorage.setItem('selected-currency', valueToBeSetByButton);

        currencyHeaderPersian.textContent = persianNameByEnAbbrevationCurrency(valueToBeSetByButton);
        currencyHeaderEnglish.textContent = valueToBeSetByButton;
    })
})

// Adding Event Listener On Each Toggle Item That Listens To Click And Toggles 'data-opened' Attribute To Target Of Clicked Item
togglers.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetOfClickedToggle = toggle.getAttribute('data-target');
        const targetElementOfClickedToggle = document.getElementById(targetOfClickedToggle);

        targetElementOfClickedToggle.toggleAttribute('data-opened')
        if (targetElementOfClickedToggle.parentElement.tagName.toLowerCase() === 'my-modal') {
            const firstInputInModal = targetElementOfClickedToggle.querySelector('input:first-of-type');
            firstInputInModal.focus();
        }
    })
})

// Adding Event Listener On Each Excel Button That Gets Target Element Of Clicked Element And Requests To Download Excel (.xlsx) File Of Target
excelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const excelTarget = button.getAttribute('data-exel-target');
        const excelTargetElement = document.getElementById(excelTarget);
        const excel = XLSX.utils.table_to_book(excelTargetElement);

        XLSX.writeFile(excel, `${excelTarget}-CityNet.xlsx`);
    })
})

// Adding Event Listener On Each Button In Pagination That Removes Class Of Active From The Paggination Button That Haves It And Adds It
// To Clicked Item
buttonsInPagginations.forEach(item => {
    item.addEventListener('click', () => {
        const activeButtonsInPagginations = document.querySelector('.my-paggination > button.active');

        activeButtonsInPagginations.classList.remove('active');
        item.classList.add('active')
    })
})

// Adding Event Listener On Each Intractive Button That Listenes To Click And Sets Right Style Of Border To Relative Right Position Of
// Parent OF Clicked Button And ITs Parent And Removes Class Of 'active' From Sibling Button That Haves It And Adds Class 'active' To Clicked Button
intractiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentOfClickedButton = button.parentElement;
        const borderToChange = parentOfClickedButton.querySelector('.intractive-buttons-border');
        const activeIntractiveButtons = parentOfClickedButton.querySelector('.intractive-buttons-btn.active');
        const rightPosOfParentOfClickedButton = parentOfClickedButton.getBoundingClientRect().right;
        const rightPosOfClickedButton = button.getBoundingClientRect().right;
        const reltivePositionToUse = rightPosOfParentOfClickedButton - rightPosOfClickedButton;

        borderToChange.style.right = `${reltivePositionToUse}px`
        activeIntractiveButtons.classList.remove('active');
        button.classList.add('active');
    })
})

// Setting Right Position Of Each Border Of Intractive Buttons To Relative Position Of Inner Button That Is Active And Its Parent
intractiveButtonsBorder.forEach(border => {
    const parentOfBorder = border.parentElement;
    const activeButtonInParentOfBorder = parentOfBorder.querySelector('.intractive-buttons-btn.active')
    const rightPositionOfActiveButton = activeButtonInParentOfBorder.getBoundingClientRect().right;
    const rightPositionOfParentOfBorder = parentOfBorder.getBoundingClientRect().right;
    const relativePositionOfParentAndActiveButton = rightPositionOfParentOfBorder - rightPositionOfActiveButton;

    border.style.right = `${relativePositionOfParentAndActiveButton}px`
})

// Adding Event Listener Of Click To Each Inner Page Togglers That Removes Class Of 'active' From Inner Page That Haves It And Class Of 'active'
// To Target Inner Page Of Clicked Button
innerPageTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const targetPageOfClickedButton = toggler.getAttribute('data-target-page');
        const targetPageOfClickedButtonElement = document.getElementById(targetPageOfClickedButton);
        const activeInnerPage = document.querySelector('.inner-page.active');

        activeInnerPage.classList.remove('active');
        targetPageOfClickedButtonElement.classList.add('active')
    })
})

// Adding Event Listener On Each Collapse Toggler That Toggles Attribute Of 'data-opened' To Its Parent Element
collapseToggler.forEach(toggler => toggler.addEventListener('click', () => {
    toggler.parentElement.toggleAttribute('data-opened')
    toggler.toggleAttribute('data-opened')
}))

// Adding Event Listener On Each Switch Button That Listens To Click And Checks If Tag Name Of Last Child Of Previous And Next Select City Components
// Are 'selected-city' Which Is Custom Element Then It Toggles Class Of 'rotated' To Clicked Button Then Replaces Last Child And Attribute Of 'data-selected-city' Of Previous And
// Next Last Child Together
switchButton.forEach(button => {
    button.addEventListener('click', () => {
        const previousCityIntractiveComponent = button.previousElementSibling.firstElementChild.firstElementChild;
        const nextCityIntractiveComponent = button.nextElementSibling.firstElementChild.firstElementChild;
        const lastChildOfPreviousCityIntractiveComponent = previousCityIntractiveComponent.lastElementChild;
        const lastChildOfNextCityIntractiveComponent = nextCityIntractiveComponent.lastElementChild;
        const tagNameOfLastChildOfPreviousCityIntractiveComponent = lastChildOfPreviousCityIntractiveComponent.tagName;
        const tagNameOfLastChildOfNextCityIntractiveComponent = lastChildOfNextCityIntractiveComponent.tagName;

        if (
            tagNameOfLastChildOfPreviousCityIntractiveComponent.toLowerCase() === 'selected-city' &&
            tagNameOfLastChildOfNextCityIntractiveComponent.toLowerCase() === 'selected-city'
        ) {
            const cloneOfLastChildOfPreviousCityIntractiveComponent = lastChildOfPreviousCityIntractiveComponent.cloneNode(true)
            const cloneOfLastChildOfNextCityIntractiveComponent = lastChildOfNextCityIntractiveComponent.cloneNode(true)
            const selectedCityOfPreviousCityIntractiveComponent = previousCityIntractiveComponent.getAttribute('data-selected-city');
            const selectedCityOfNextCityIntractiveComponent = nextCityIntractiveComponent.getAttribute('data-selected-city');

            button.classList.toggle('rotated')
            lastChildOfNextCityIntractiveComponent.replaceWith(cloneOfLastChildOfPreviousCityIntractiveComponent)
            lastChildOfPreviousCityIntractiveComponent.replaceWith(cloneOfLastChildOfNextCityIntractiveComponent)
            previousCityIntractiveComponent.setAttribute('data-selected-city', selectedCityOfNextCityIntractiveComponent)
            nextCityIntractiveComponent.setAttribute('data-selected-city', selectedCityOfPreviousCityIntractiveComponent)
        }
    })
})

// Adding Event Listener On Each Exit From Account Buttons That Listens To Click That Removes 'logged-in', 'login-token' Local Storage Items
exitAccountItems.forEach(item => {
    item.addEventListener('click', () => {
        localStorage.removeItem('logged-in')
        localStorage.removeItem('login-token')
        document.location.reload();
    })
})
