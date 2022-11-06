// Use Attrs When Setting Data
// Variables
const dropDownsTogglers  = document.querySelectorAll('.my-drop-down-toggler');
const currencyChangerButtons = document.querySelectorAll('.currency-changer');
const htmlElement = document.querySelector('html');
const currencyHeaderPersian = document.getElementById('currency-header-per');
const currencyHeaderEnglish = document.getElementById('currency-header-en');
const togglers = document.querySelectorAll('.toggler');
const excelButtons = document.querySelectorAll('.excel-btn');
const buttonsInPagginations = document.querySelectorAll('.my-paggination > button:not(.next-prev-pagination-btn)');

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
        currencyHeaderPersian.textContent = persianNameByEnAbbrevationCurrency(currencyToSelectInLocalStoarge);
        currencyHeaderEnglish.textContent = currencyToSelectInLocalStoarge;
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

    toggler.addEventListener('click', () => dropDownHolderOfToggler.toggleAttribute('data-opened'))
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