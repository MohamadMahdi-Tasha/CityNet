const intractiveButtonsBtnTicketBuy = document.querySelectorAll('.intractive-buttons-btn.ticket-buy');

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