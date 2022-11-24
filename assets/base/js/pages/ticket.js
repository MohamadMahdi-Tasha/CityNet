// Variables
const passengerCountTopSide = document.getElementById('passenger-count-top-side');
const startPlaceTopSide = document.getElementById('start-place-top-side');
const endPlaceTopSide = document.getElementById('end-place-top-side');
const flightDateTopSide = document.getElementById('flight-date-top-side');
const flightFilterButtons = document.querySelectorAll('.flight-filter-button');
const ticketPageAsideMobileTopSideToggle = document.querySelector('.ticket-page-aside-mobile-top-side-toggle');
const ticketPageAside = document.querySelector('.ticket-page-aside');
const informationToSearchInTicketsPage = JSON.parse(localStorage.getItem('information-to-search-in-tickets-page'));
const prevOrNextDayToggler = document.querySelectorAll('.prev-or-next-day-toggler');
const fromPersian = document.querySelectorAll('.from-persian');
const toPersian = document.querySelectorAll('.to-persian');

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

// Adding Event Listener Of Load On Window That ..
window.addEventListener('load', () => {
    // Variables
    const startLocationRightSideAside = document.getElementById('start-location-right-side-aside');
    const endLocationRightSideAside = document.getElementById('end-location-right-side-aside');
    const dateFaRightSideAside = document.getElementById('date-fa-right-side-aside');
    const dateEnRightSideAside = document.getElementById('date-en-right-side-aside');
    const searchFlightNumber = document.getElementById('search-flight-number');

    // Setting Text Content Of Some Elements
    startLocationRightSideAside.textContent = htmlElement.getAttribute('data-start-place')
    endLocationRightSideAside.textContent = htmlElement.getAttribute('data-end-place')
    dateEnRightSideAside.textContent = htmlElement.getAttribute('data-flight-date-en');
    dateFaRightSideAside.textContent = `${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('YYYY')} ${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('MMMM')} ${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('DD')}`
    searchFlightNumber.setAttribute('placeholder', `${htmlElement.getAttribute('data-end-place')} به ${htmlElement.getAttribute('data-start-place')}`)
    searchFlightNumber.querySelector('.my-placeholder').textContent = `${htmlElement.getAttribute('data-end-place')} به ${htmlElement.getAttribute('data-start-place')}`

    // Setting Text Contents Of 'fromPersian', 'toPersian' To Persian Name Of Given Data From 'informationToSearchInTicketsPage'
    fromPersian.forEach(item => item.textContent = persianNameFromAbbrevation(informationToSearchInTicketsPage.fromCityAbbrevation))
    toPersian.forEach(item => item.textContent = persianNameFromAbbrevation(informationToSearchInTicketsPage.toCityAbbrevation))
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

// Adding Event Listener Of Click On Prev Or Next Day Toggler That ..
prevOrNextDayToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        // Variables
        const currentDay = new Date(htmlElement.getAttribute('data-flight-date-en'))
        const informationToSearchInTicketsPage = JSON.parse(localStorage.getItem('information-to-search-in-tickets-page'));
        let newDate;
        let dateToSet;
        let monthToSet;

        // If Text Content Of Clicked Button Is 'روز قبل' Then Use 'subtractDays' Function For 'newDate' Variable Otherwise
        //Use 'addDays' Function
        if (toggler.textContent === 'روز قبل') {newDate = subtractDays(1, currentDay)}
        else {newDate = addDays(1, currentDay)}

        // If Length Of New Month Or New Date Is Equal To 1 Then Add '0' To First Of 'monthToSet' Or 'dateToSet' Variables Otherwises
        // 'monthToSet' Or 'dateToSet' Variables Equals To New Month Or New Date That We Just Set
        ((newDate.getMonth() + 1).toString().length === 1) ? monthToSet = `0${newDate.getMonth() + 1}` : monthToSet = newDate.getMonth() + 1;
        ((newDate.getDate()).toString().length === 1) ? dateToSet = `0${newDate.getDate()}` : dateToSet = newDate.getDate();

        // Making New 'newInformationToSearchInTicketsPage' Variable To Set As 'information-to-search-in-tickets-page' In Local Stoarge
        let newInformationToSearchInTicketsPageToSet = {
            date: `${newDate.getFullYear()}-${monthToSet}-${dateToSet}`,
            adult_count: informationToSearchInTicketsPage.adult_count,
            child_count: informationToSearchInTicketsPage.child_count,
            infant_count: informationToSearchInTicketsPage.infant_count,
            from: informationToSearchInTicketsPage.from,
            to: informationToSearchInTicketsPage.to,
            fromCityAbbrevation: informationToSearchInTicketsPage.fromCityAbbrevation,
            toCityAbbrevation: informationToSearchInTicketsPage.toCityAbbrevation
        }

        // Setting 'information-to-search-in-tickets-page' To New 'newInformationToSearchInTicketsPage' That We Just Set
        localStorage.setItem('information-to-search-in-tickets-page', JSON.stringify(newInformationToSearchInTicketsPageToSet))

        // Reloading Page
        document.location.reload();
    })
})