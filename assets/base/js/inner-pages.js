// Variables
const homeFlightInnerPageToggler = document.querySelectorAll('.home-flight-inner-page-toggler');
const topSidePageButtons = document.querySelectorAll('.top-side-page-buttons');

// A Function That Reads Attribute Of 'data-target' Of It  Element
// And Then Gets It By 'document.getElementById' Method. Then Replaces Class Of 'current' With 'd-none'  On Element Given Element (Second Parameter)
// And Then Replaces d-none With current Class Names In Clicked Item.
function showElementByDataTargetAttr(element, currentPage) {
    const targetId = element.getAttribute('data-target');
    const target = document.getElementById(targetId);
    const currentPageVar = document.querySelector(currentPage);

    currentPageVar.classList.replace('current', 'd-none');
    target.classList.replace('d-none', 'current');
}

// Adding Event Listener On Each 'homeFlightInnerPageToggler's That Listens To Click And Calls 'showElementByDataTargetAttr' Functions
homeFlightInnerPageToggler.forEach(item => item.addEventListener('click', () => showElementByDataTargetAttr(item, '.home-flight-inner-page.current')))

// Adding Event Listener On Each 'Event's That Listens To Click And Calls 'showElementByDataTargetAttr' Functions And Adds Class Of Active On Clicked Item And Removes
// Class Of active From Other Top Buttons
topSidePageButtons.forEach(item => {
    item.addEventListener('click', () => {
        const activeTopSideButton = document.querySelector('.top-side-page-buttons.active');

        activeTopSideButton.classList.remove('active');
        item.classList.add('active');
        showElementByDataTargetAttr(item, '.bottom-page.current')
    })
})