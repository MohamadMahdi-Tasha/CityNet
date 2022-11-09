// Variables
const dataHavesResultAttributOfHtmlElement = htmlElement.getAttribute('data-haves-result');
const nothingFoundMainElement = document.getElementById('nothing-found-main');
const resultsElement = document.getElementById('results');
const tableBottomItemTogglers = document.querySelectorAll('.table-bottom-item-toggler');
const detailsShowButtons = document.querySelectorAll('.details-show-btn');
const showPriceDetailsButton = document.querySelectorAll('.show-price-details-btn');

// If Attribute Of 'data-haves-result' From Html Element Returnes 'True' Then Remove Nothing Found Element And Add 'd-block' Class To
// Result Element OtherWise Do Reverse
if (dataHavesResultAttributOfHtmlElement === 'true') {
    nothingFoundMainElement.remove()
    resultsElement.classList.add('d-block');
} else {
    nothingFoundMainElement.classList.add('d-block');
    resultsElement.remove();
}

// Adding Event Listener On Each Table Bottom Items That Listenes To Click And Toggles Attribute Of 'data-opened' To Parent Of Clicked
// Toggler And Removes It From Opened Table Bottom Item Tha Haves IT
tableBottomItemTogglers.forEach(toggler => {
    toggler.addEventListener('click' ,() => {
        const holder = toggler.parentElement;
        const openedTableBottomItemHolder = document.querySelector('.table-bottom-item-holder[data-opened]')

        holder.toggleAttribute('data-opened');
        openedTableBottomItemHolder.removeAttribute('data-opened')
    })
})

// Adding event Listener On Each Show Details Button That Listenes To Click And Toggles 'data-opened' Attribute To 'detailsHolderInParentOfGrandParentOfClickedButton'
// And Also Clicked Button
detailsShowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentOfGrandParentOfClickedButton = button.parentElement.parentElement.parentElement;
        const detailsHolderInParentOfGrandParentOfClickedButton = parentOfGrandParentOfClickedButton.querySelector('.details-holder');

        detailsHolderInParentOfGrandParentOfClickedButton.toggleAttribute('data-opened');
        button.toggleAttribute('data-opened')
    })
})

// Adding Event Listener On Each Show Price Details Button That Listenes To Click And Toggles 'data-opened' Attribute To Clicked Button And
// 'priceDetailsSection' Element
showPriceDetailsButton.forEach(button => {
    button.addEventListener('click' , () => {
        const priceDetailsSection = button.parentElement.parentElement.parentElement.parentElement.nextElementSibling;

        button.toggleAttribute('data-opened');
        priceDetailsSection.toggleAttribute('data-opened');
    })
})