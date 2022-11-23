// Variables
const passengerCountTopSide = document.getElementById('passenger-count-top-side');
const startPlaceTopSide = document.getElementById('start-place-top-side');
const endPlaceTopSide = document.getElementById('end-place-top-side');
const flightDateTopSide = document.getElementById('flight-date-top-side');
const flightFilterButtons = document.querySelectorAll('.flight-filter-button');
const ticketPageAsideMobileTopSideToggle = document.querySelector('.ticket-page-aside-mobile-top-side-toggle');
const ticketPageAside = document.querySelector('.ticket-page-aside');
const informationToSearchInTicketsPage = JSON.parse(localStorage.getItem('information-to-search-in-tickets-page'));

// Setting Attributes Of Pages Given Data From Data Stored In Local Storage
htmlElement.setAttribute('data-start-place', `(${informationToSearchInTicketsPage.fromCityAbbrevation}) ${persianNameFromAbbrevation(informationToSearchInTicketsPage.fromCityAbbrevation)}`)
htmlElement.setAttribute('data-end-place', `(${informationToSearchInTicketsPage.toCityAbbrevation}) ${persianNameFromAbbrevation(informationToSearchInTicketsPage.toCityAbbrevation)}`)
htmlElement.setAttribute('data-flight-date-en', informationToSearchInTicketsPage.date)
htmlElement.setAttribute('data-passenger-count', Number(informationToSearchInTicketsPage.adult_count) + Number(informationToSearchInTicketsPage.child_count) + Number(informationToSearchInTicketsPage.infant_count))

// Setting Text Content Of Top Side Elements By Returned Attribute Value From Html Elements That Just Set Above
passengerCountTopSide.textContent = htmlElement.getAttribute('data-passenger-count')
startPlaceTopSide.textContent = htmlElement.getAttribute('data-start-place')
endPlaceTopSide.textContent = htmlElement.getAttribute('data-end-place')
flightDateTopSide.textContent = htmlElement.getAttribute('data-flight-date-en')

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

// Adding Event Listener On 'ticketPageAsideMobileTopSideToggle' That Listenes To Mouse Down Event That Toggles  Class Of 'showing' To Aside Eement Of Page
ticketPageAsideMobileTopSideToggle.addEventListener('mousedown', () => ticketPageAside.classList.toggle('showing'))

// Setting Multiple Range Slider
$(".slider-range").slider({
    range: true,
    min: 0,
    max: 24,
    values: [0, 24],
});