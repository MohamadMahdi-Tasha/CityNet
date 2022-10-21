// Variables
const buyTicketDropDownButton = document.querySelectorAll('.buy-ticket-drop-down-button');
const intractiveButtonsBtnTicketBuy = document.querySelectorAll('.intractive-buttons-btn.ticket-buy');

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

intractiveButtonsBtnTicketBuy.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        const targetElement = document.getElementById(target);
        const activeInnerTab = document.querySelector('.buy-ticket-left-side-inner-tabs[active]');
        const activeButton = document.querySelector('.intractive-buttons-btn.ticket-buy[active]');

        activeInnerTab.removeAttribute('active');
        activeButton.removeAttribute('active');
        item.setAttribute('active', 'true');
        targetElement.setAttribute('active', 'true');
    })
})