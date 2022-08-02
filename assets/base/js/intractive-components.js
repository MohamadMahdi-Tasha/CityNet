// Variables
const inputsInIntractiveInputComponent = document.querySelectorAll('.intractive-input-component.input');
const intractiveInputComponentDate = document.querySelectorAll('.intractive-input-component.date');
const intractiveInputComponentCounter = document.querySelectorAll('.intractive-input-component.counter');
const intractiveInputComponentCounterCounter = document.querySelector('.intractive-input-component.counter > .counter-select');
const switchButton = document.querySelectorAll('.switch-btn');

// Selecting Each Interactive Component In Form That Works With Inputs That
inputsInIntractiveInputComponent.forEach(item => {
    // Adding Event Listener Of Click That Focuses To Input In Component
    item.addEventListener('click', () => {item.lastElementChild.focus()})

    // Adding Event Listener On Input And Listens To Click And That Add Class Of 'focused' If Input Is Empty
    item.lastElementChild.addEventListener('focus', () => {
        if (item.lastElementChild.value === "") {
            item.classList.toggle('focused')
        }
    })

    // Adding Event Listener Of Blur On Input In Component That Removes 'focused' Class  If Input Is Empty
    item.lastElementChild.addEventListener('blur', () => {
        if (item.lastElementChild.value === "") {item.classList.toggle('focused')}
    })
})

// Adding Event Listener Of Click To Each Component That Holds Date That Listens To Click And Then  Adds Class Of 'focused' To Component
intractiveInputComponentDate.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('focused')
    })
})