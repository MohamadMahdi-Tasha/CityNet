// Variables
const dataHavesResultAttributOfHtmlElement = htmlElement.getAttribute('data-haves-result');
const nothingFoundMainElement = document.getElementById('nothing-found-main');
const resultsElement = document.getElementById('results');
const tableBottomItemTogglers = document.querySelectorAll('.table-bottom-item-toggler');
const detailsShowButtons = document.querySelectorAll('.details-show-btn');
const showPriceDetailsButton = document.querySelectorAll('.show-price-details-btn');

if (dataHavesResultAttributOfHtmlElement === 'true') {
    nothingFoundMainElement.remove()
    resultsElement.classList.add('d-block');
} else {
    nothingFoundMainElement.classList.add('d-block');
    resultsElement.remove();
}
tableBottomItemTogglers.forEach(toggler => {
    toggler.addEventListener('click' ,() => {
        const holder = toggler.parentElement;
        const openedTableBottomItemHolder = document.querySelector('.table-bottom-item-holder[data-opened]')

        holder.toggleAttribute('data-opened');
        openedTableBottomItemHolder.removeAttribute('data-opened')
    })
})
detailsShowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentOfGrandParentOfClickedButton = button.parentElement.parentElement.parentElement;
        const detailsHolderInParentOfGrandParentOfClickedButton = parentOfGrandParentOfClickedButton.querySelector('.details-holder');

        detailsHolderInParentOfGrandParentOfClickedButton.toggleAttribute('data-opened');
        button.toggleAttribute('data-opened')
    })
})
showPriceDetailsButton.forEach(button => {
    button.addEventListener('click' , () => {
        const priceDetailsSection = button.parentElement.parentElement.parentElement.parentElement.nextElementSibling;

        button.toggleAttribute('data-opened');
        priceDetailsSection.toggleAttribute('data-opened');
    })
})