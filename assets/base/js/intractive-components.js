const intractiveInputComponentInput = document.querySelectorAll('.intractive-input-component');

intractiveInputComponentInput.forEach(item => {
    item.addEventListener('click', () => {item.firstElementChild.nextElementSibling.focus();})
    item.firstElementChild.nextElementSibling.addEventListener('focus', () => item.classList.add('focused'))
    item.firstElementChild.nextElementSibling.addEventListener('blur', () => {
        if (item.firstElementChild.nextElementSibling.value === "") {item.classList.remove('focused')}
    })
})