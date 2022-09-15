// Variables
const flightTopBtn = document.querySelectorAll('.flight-top-btn');
const flightTicketsHolder = document.getElementById('flight-tickets-holder');
const PrevDayToggler = document.getElementById('prev-day-toggler');
const NextDayToggler = document.getElementById('next-day-toggler');
const firstSectOfFlight = document.getElementById('first-sect-of-flight');
const loaderModal = document.getElementById('loader-modal')
const nataiejNumber = document.getElementById('nataiej-number');
const myHeaders = new Headers();
const urlencoded = new URLSearchParams();
const parsedTicket = JSON.parse(localStorage.getItem('data-ticket'))
const flightTopSideStartCity = document.getElementById('flight-top-side-start-city');
const flightTopSideEndCity = document.getElementById('flight-top-side-end-city');
const flightTopSidePassengersCount = document.getElementById('flight-top-side-passengers-count');
const flightTopSidePassengers = document.getElementById('flight-top-side-passengers-class');
const flightRightSideStartCity = document.getElementById('flight-right-side-start-city')
const flightRightSideEndCity = document.getElementById('flight-right-side-end-city')
const rightSideSearchStartCity = document.getElementById('right-side-search-start-city')
const rightSideSearchEndCity = document.getElementById('right-side-search-end-city')
const flightType = document.getElementById('flight-type')
let monthToSet;

// Setting Some Options For Fetch
myHeaders.append("Accept", "application/json");
myHeaders.append("debug", "true");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('logged-in-token')}`);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
urlencoded.append("date", firstSectOfFlight.getAttribute('data-date'));
urlencoded.append("adult_count", parsedTicket.adultNumber);
urlencoded.append("child_count", parsedTicket.kidNumber);
urlencoded.append("infant_count", parsedTicket.newBornNumber);
urlencoded.append("from", "81");
urlencoded.append("to", "82");

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
};

// A Function That Checks If Every Ticket Is Systematic Or Standard Then Base On It Returns A Text Other Wise Shows Number Of Standard And Systematic Tickets
function setRightSideFlightTypes() {
    if (document.querySelectorAll('ticket-element').length === document.querySelectorAll('ticket-element[mode="true"]').length) {
        const newH6 = document.createElement('h6');
        newH6.className = 'text-grey font-small';
        newH6.textContent = 'تمامی پروازها سیستمی می‌باشند';
        flightType.appendChild(newH6)
    } else if (document.querySelectorAll('ticket-element').length === document.querySelectorAll('ticket-element[mode="undefined"]').length) {
        const newH6 = document.createElement('h6');
        newH6.className = 'text-grey font-small';
        newH6.textContent = 'تمامی پروازها استاندارد می‌باشند';
        flightType.appendChild(newH6)
    } else {
        const newH6_1 = document.createElement('h6');
        const newH6_2 = document.createElement('h6');
        const newSpan_1 = document.createElement('span');
        const newSpan_2 = document.createElement('span');

        newH6_1.className = 'text-grey font-small'
        newH6_2.className = 'text-grey font-small'
        newSpan_1.textContent = 'bg-light-green text-green badge'
        newSpan_2.textContent = 'bg-light-blue text-blue badge'

        newH6_1.textContent = 'استاندارد :';
        newH6_2.textContent = 'سیستمی :';
        newSpan_1.textContent = document.querySelectorAll('ticket-element[mode="undefined"]').length
        newSpan_1.textContent = document.querySelectorAll('ticket-element[mode="true"]').length

        newH6_1.appendChild(newSpan_1)
        newH6_2.appendChild(newSpan_2)
        flightType.appendChild(newH6_1)
        flightType.appendChild(newH6_2)
    }
}

// A Function That Creates New Ticket Element And Sets Some Attributes To It After That Appends It To Ticket Holder Section
function newTicketElement(item) {
    const newElement = document.createElement('ticket-element');
    newElement.setAttribute('flag', item.airline_icon)
    newElement.setAttribute('plane', item.air_plane)
    newElement.setAttribute('fligh-number', item.flight_number)
    newElement.setAttribute('start-time', item.start_time.slice(0, 5))
    newElement.setAttribute('start-place', item.from_airport)
    newElement.setAttribute('end-time', item.arrival_time.slice(0, 5))
    newElement.setAttribute('end-place', item.to_airport)
    newElement.setAttribute('weight-collapse', `${item.flight_number}-weight-collapse`)
    newElement.setAttribute('rules-collapse', `${item.flight_number}-rules-collapse`)
    newElement.setAttribute('details-collapse', `${item.flight_number}-details-collapse`)
    newElement.setAttribute('price-details-collapse', `${item.flight_number}-price-details-collapse`)
    newElement.setAttribute('adult-price', String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    newElement.setAttribute('capacity', item.capacity)
    newElement.setAttribute('mode', item.is_systemetic)
    newElement.setAttribute('class', item.seat_class)
    flightTicketsHolder.appendChild(newElement);
}

// A Function That Fetches Ticket Api
function fetchTicket() {
    fetch("https://www.newcash.me/api/v2/airfare/flights/search", requestOptions)
        .then(response => response.json())
        .then(result => {
            const returnedData = result.data.tickets;
            document.body.style.overflowY = 'visible';
            nataiejNumber.textContent = returnedData.length;
            loaderModal.setAttribute('data-opened', 'false')

            returnedData.forEach(item => {newTicketElement(item)})
            setRightSideFlightTypes()
        })
        .catch(error => console.log('error', error));
}

// Removing Scroll Of Page In Load Of Page
document.body.style.overflowY = 'hidden';

// Adding Event Listener On Each Flight Top Buttons That Listens To CLick And Removes 'active' Class Name The Other active Button And Adds
// It To Clicked Button . Then Checks If Text Content OF Clicked Item is "ارزان ترین قیمت" . If It Is Then Calls 'showSortedListOfPrice' Function
//  Otherwise Sorts Items By 'data-date' Attr.
flightTopBtn.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.flight-top-btn.active').classList.remove('active');
        item.classList.add('active')

        if (item.textContent === "ارزان ترین قیمت") {
            alert(item.textContent)
        } else {
            alert(item.textContent)
        }
    })
})

// Fetching Ticket Api
fetchTicket()

// Setting Some Text Contents For UX