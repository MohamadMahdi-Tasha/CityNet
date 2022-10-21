// Variables
const buyTicketDropDownButton = document.querySelectorAll('.buy-ticket-drop-down-button');

buyTicketDropDownButton.forEach(item => {
    item.addEventListener('click', () => {
        const parentOfGrandParentOfClickedItem = item.parentElement.parentElement.parentElement
        const buyTicketDropDownButtonActive = document.querySelector('.buy-ticket-drop-down-button.active');

        parentOfGrandParentOfClickedItem.parentElement.removeAttribute('data-opened');
        parentOfGrandParentOfClickedItem.previousElementSibling.setAttribute('data-selected-dropdown', item.textContent)
        parentOfGrandParentOfClickedItem.previousElementSibling.firstElementChild.nextElementSibling.textContent = item.textContent
        buyTicketDropDownButtonActive.classList.remove('active');
        item.classList.add('active');
    })
})