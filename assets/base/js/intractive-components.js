const inputsInIntractiveInputComponent = document.querySelectorAll('.intractive-input-component.input');
const intractiveInputComponentDate = document.querySelectorAll('.intractive-input-component.date');
const intractiveInputComponentCounter = document.querySelectorAll('.intractive-input-component.counter');
const intractiveInputComponentCounterCounter = document.querySelector('.intractive-input-component.counter > .counter-select');
const switchButton = document.querySelectorAll('.switch-btn');

inputsInIntractiveInputComponent.forEach(item => {
    item.addEventListener('click', () => {item.lastElementChild.focus()})
    item.lastElementChild.addEventListener('focus', () => {
        item.classList.toggle('current');
        if (item.lastElementChild.value === "") {
            item.classList.toggle('focused')
        }
    })
    item.lastElementChild.addEventListener('blur', () => {
        item.classList.toggle('current');
        if (item.lastElementChild.value === "") {item.classList.toggle('focused')}
    })
})

intractiveInputComponentDate.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('focused')
    })
})

intractiveInputComponentCounter.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('focused');
    })
})