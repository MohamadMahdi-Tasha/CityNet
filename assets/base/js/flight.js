// Variables
let listOfTickets = [];
const flightTopBtn = document.querySelectorAll('.flight-top-btn');
const flightTicketsHolder = document.getElementById('flight-tickets-holder');
const PrevDayToggler = document.getElementById('prev-day-toggler');
const NextDayToggler = document.getElementById('next-day-toggler');
const firstSectOfFlight = document.getElementById('first-sect-of-flight');
const currentSelectedDate = new Date(firstSectOfFlight.getAttribute('data-date'));
const loaderModal = document.getElementById('loader-modal')
const nataiejNumber = document.getElementById('nataiej-number');
const myHeaders = new Headers();
const urlencoded = new URLSearchParams();
const parsedTicket = JSON.parse(localStorage.getItem('data-ticket'))
const flightDate = parsedTicket.flightDate;
const flightDateToSet = new Date(flightDate)
const rightsideDate = document.getElementById('right-side-date')
const flightTopSideStartCity = document.getElementById('flight-top-side-start-city');
const flightTopSideEndCity = document.getElementById('flight-top-side-end-city');
const flightTopSideDate = document.getElementById('flight-top-side-date');
const flightTopSidePassengersCount = document.getElementById('flight-top-side-passengers-count');
const flightTopSidePassengers = document.getElementById('flight-top-side-passengers-class');
const flightRightSideStartCity = document.getElementById('flight-right-side-start-city')
const flightRightSideEndCity = document.getElementById('flight-right-side-end-city')
const rightSideSearchStartCity = document.getElementById('right-side-search-start-city')
const rightSideSearchEndCity = document.getElementById('right-side-search-end-city')
const flightType = document.getElementById('flight-type')
let monthToSet;
let dateToSet;

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

// And Saves It In A Variable Then Calls 'showDate' Function And Gives It Saved Variable As Parameter
PrevDayToggler.addEventListener('click', () => {const prevDate = new Date(currentSelectedDate.setDate(currentSelectedDate.getDate() - 1));showDate(prevDate)})
NextDayToggler.addEventListener('click', () => {const nextDate = new Date(currentSelectedDate.setDate(currentSelectedDate.getDate() + 1));showDate(nextDate)})

// Checking If Length Of Month And Date Returned From 'flightDateToSet' Variable Is 1. If It Is Then Set
// First Char Of Them To 0 Other Wise Return Them In As Variable
if (`${flightDateToSet.getMonth() + 1}`.length === 1) {monthToSet = `0${flightDateToSet.getMonth() + 1}`}
else {monthToSet = `${flightDateToSet.getMonth() + 1}`}
if (`${flightDateToSet.getDate()}`.length === 1) {dateToSet = `0${flightDateToSet.getDate()}`}
else {dateToSet = `${flightDateToSet.getDate()}`}

// Setting Attribute Of 'data-date' In First Section Of Flight Page To Given Data From Home Page
firstSectOfFlight.setAttribute('data-date', `${flightDateToSet.getFullYear()}-${monthToSet}-${dateToSet}`)

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

// Fetching Ticket Api
fetch("https://www.newcash.me/api/v2/airfare/flights/search", requestOptions)
    .then(response => response.json())
    .then(result => {
        loaderModal.setAttribute('data-opened', 'false');
        if (result.message === "Unauthenticated.") {
            loginModalToggler.click()
        } else {
            const returnedData = result.data.tickets;
            document.body.style.overflowY = 'visible';
            nataiejNumber.textContent = returnedData.length;

            returnedData.forEach(item => {
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
            })

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
    })
    .catch(error => console.log('error', error));

flightTopSideStartCity.textContent = showCitysNameByCondition(parsedTicket.startCity)
flightTopSideEndCity.textContent = showCitysNameByCondition(parsedTicket.endCity)
flightTopSideDate.textContent = parsedTicket.flightDate
flightTopSidePassengersCount.textContent = parsedTicket.adultNumber + parsedTicket.kidNumber + parsedTicket.newBornNumber
flightTopSidePassengers.textContent = parsedTicket.passengerClass
rightsideDate.textContent = parsedTicket.flightDate
flightRightSideStartCity.textContent = showCitysNameByCondition(parsedTicket.startCity)
flightRightSideEndCity.textContent = showCitysNameByCondition(parsedTicket.endCity)
rightSideSearchStartCity.textContent = showCitysNameByCondition(parsedTicket.startCity).slice(0, showCitysNameByCondition(parsedTicket.startCity).indexOf('('))
rightSideSearchEndCity.textContent = showCitysNameByCondition(parsedTicket.endCity).slice(0, showCitysNameByCondition(parsedTicket.endCity).indexOf('('))