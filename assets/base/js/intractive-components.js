// Variables
const calenderIntractiveComponent = document.querySelectorAll('.intractive-component.calender');
const dropDownButtonsInIntractiveComponents = document.querySelectorAll('.intractive-component.dropdown ~ .my-drop-down button');

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
// From DropDown Holder
dropDownButtonsInIntractiveComponents.forEach(button => {
    button.addEventListener('click', () => {
        const parentOfGrandParentOfClickedButton = button.parentElement.parentElement.parentElement;
        const dropDownComponent = parentOfGrandParentOfClickedButton.previousElementSibling;
        const dropDownParentOfClickedItem = parentOfGrandParentOfClickedButton.parentElement;
        const valueOfDropDownComponentToShow = dropDownComponent.querySelector('h6');

        dropDownComponent.setAttribute('data-value', button.textContent)
        valueOfDropDownComponentToShow.textContent = button.textContent;
        dropDownParentOfClickedItem.removeAttribute('data-opened');
    })
})