// Variables
const passengerCountTopSide = document.getElementById('passenger-count-top-side');
const passengerClassTopSide = document.getElementById('passenger-class-top-side');
const startPlaceTopSide = document.getElementById('start-place-top-side');
const endPlaceTopSide = document.getElementById('end-place-top-side');
const flightDateTopSide = document.getElementById('flight-date-top-side');
const flightFilterButtons = document.querySelectorAll('.flight-filter-button');
const ticketComponentBottomAccardionTogglers = document.querySelectorAll('.ticket-component-bottom-accardion-toggler');
const ticketPageAsideMobileTopSideToggle = document.querySelector('.ticket-page-aside-mobile-top-side-toggle');
const ticketPageAside = document.querySelector('.ticket-page-aside');

const dataFromHtmlElementStartPlace = htmlElement.getAttribute('data-start-place')
const dataFromHtmlElementEndPlace = htmlElement.getAttribute('data-end-place')
const dataFromHtmlElementFlightDate = htmlElement.getAttribute('data-flight-date-en')
const dataFromHtmlElementPassengerCount = htmlElement.getAttribute('data-passenger-count')
const dataFromHtmlElementPassengerClass = htmlElement.getAttribute('data-passengers-class')

// Setting Text Content Of Some Elements Based On Attributes From Html Element
passengerCountTopSide.textContent = dataFromHtmlElementPassengerCount;
passengerClassTopSide.textContent = dataFromHtmlElementPassengerClass;
startPlaceTopSide.textContent = dataFromHtmlElementStartPlace;
endPlaceTopSide.textContent = dataFromHtmlElementEndPlace;
flightDateTopSide.textContent = dataFromHtmlElementFlightDate;

// Adding Event Listener On Window That Listens To Scroll That Checks If Inner Width Of Page Is 991 pixels Or Less Than It Checks If
// Space From Top Side Of Window To Where It Is Not Equal To 0. If Its Not Then Again Checks If Aside Element (Right Side ELement That Applies Some Filters)
// Has Class Name Of 'Showing' If It Has Replaced It With 'scrolled' Class Name Other Wise Add 'scrolled' Class Name To Aside Element
// If Space From Top Side Of Window To Where It Is Equal To 0 Removes Class Name Of 'scrolled' From Aside Element
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 991) {
        if (window.scrollY !== 0) {
            if (ticketPageAside.classList.contains('showing')) {
                ticketPageAside.classList.replace('showing', 'scrolled')
            } else {
                ticketPageAside.classList.add('scrolled')
            }
        } else {
            ticketPageAside.classList.remove('scrolled')
        }
    }
})

// Adding Event Listener On Each Flight Filter Button That Listenes To Click And Adds Class Of 'active' To Clicked Button And
// Removes It From Button That Haves It And Checks If Text Content Of Clicked Button Was "ارزان ترین قیمت" Then Sets Attribute Of 'data-filter'
// On Ticket Component Holders To 'cheapest' Other Wise Sets It To 'time'
flightFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const ticketComponentList = document.getElementById('ticket-component-list');
        const activeFilterButton = document.querySelector('.flight-filter-button.active');

        activeFilterButton.classList.remove('active');
        button.classList.add('active');

        if (button.textContent === "ارزان ترین قیمت") {
            ticketComponentList.setAttribute('data-filter', 'cheapest');
        } else {
            ticketComponentList.setAttribute('data-filter', 'time');
        }
    })
})

// Adding Event Listener On Each Accardion Togglers That Listenes To Click That Toggles Attribute Of 'data-opened' To Clicked Toggler
// And Target Of Clicked Toggler And Removes It From Accardion Item And Toggler That Haves Attribute Of 'data-opened'
ticketComponentBottomAccardionTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const accardionTarget = toggler.getAttribute('data-accardion-target');
        const accardionTargetElement = document.getElementById(accardionTarget);
        const openedAccardion = document.querySelector('.ticket-component-bottom-accardion[data-opened]')
        const openedToggler = document.querySelector('.ticket-component-bottom-accardion-toggler[data-opened]');

        toggler.toggleAttribute('data-opened');
        accardionTargetElement.toggleAttribute('data-opened');
        openedToggler.removeAttribute('data-opened');
        openedAccardion.removeAttribute('data-opened');
    })
})

// Adding Event Listener On 'ticketPageAsideMobileTopSideToggle' That Listenes To Mouse Down Event That Toggles  Class Of 'showing' To Aside Eement Of Page
ticketPageAsideMobileTopSideToggle.addEventListener('mousedown', () => ticketPageAside.classList.toggle('showing'))

// Setting Multiple Range Slider
$(".slider-range").slider({
    range: true,
    min: 0,
    max: 24,
    values: [0, 24],
});