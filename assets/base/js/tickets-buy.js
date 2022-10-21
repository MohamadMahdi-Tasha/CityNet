// Variables
const buyTicketDropDownButton = document.querySelectorAll('.buy-ticket-drop-down-button');

buyTicketDropDownButton.forEach(item => {
    item.addEventListener('click', () => {
        const parentOfGrandParentOfCllickedItem = item.parentElement.parentElement.parentElement

        parentOfGrandParentOfCllickedItem.parentElement.removeAttribute('data-opened');
        parentOfGrandParentOfCllickedItem.previousElementSibling.setAttribute('data-selected-dropdown', item.textContent)
        parentOfGrandParentOfCllickedItem.previousElementSibling.firstElementChild.nextElementSibling.textContent = item.textContent
    })
})