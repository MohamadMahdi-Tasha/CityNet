// Variables
const inputsInIntractiveInputComponent = document.querySelectorAll('.intractive-input-component.input');
const intractiveInputComponentDate = document.querySelectorAll('.intractive-input-component.date');
const intractiveInputComponentCounterCounter = document.querySelector('.intractive-input-component.counter > .counter-select');

// Selecting Each Interactive Component In Form That Works With Inputs That
inputsInIntractiveInputComponent.forEach(item => {
    // Adding Event Listener Of Click That Focuses To Input In Component
    item.addEventListener('click', () => {item.firstElementChild.nextElementSibling.focus()})

    // Adding Event Listener On Input And Listens To Click And That Add Class Of 'focused' If Input Is Empty
    item.firstElementChild.nextElementSibling.addEventListener('focus', () => {
        if (item.firstElementChild.nextElementSibling.value === "") {
            item.classList.toggle('focused')
        }
    })

    // Adding Event Listener Of Blur On Input In Component That Removes 'focused' Class  If Input Is Empty
    item.firstElementChild.nextElementSibling.addEventListener('blur', () => {
        if (item.firstElementChild.nextElementSibling.value === "") {item.classList.toggle('focused')}
    })
})

// Adding Event Listener Of Click To Each Component That Holds Date That Listens To Click And Then  Adds Class Of 'focused' To Component
intractiveInputComponentDate.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('focused')
    })
})