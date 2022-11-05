// Use Attrs When Setting Data
// Variables
const dropDownsTogglers  = document.querySelectorAll('.my-drop-down-toggler');
const currencyChangerButtons = document.querySelectorAll('.currency-changer');
const htmlElement = document.querySelector('html');
const currencyHeaderPersian = document.getElementById('currency-header-per');
const currencyHeaderEnglish = document.getElementById('currency-header-en');
const togglers = document.querySelectorAll('.toggler');

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

// Event Listeners Adding Event Listener Of Load To Window That Checks If Selected Currency Is Included (selected-currency : Name Of Setted Currency) If It Is Then Set It In Header
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