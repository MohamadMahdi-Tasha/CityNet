// Variables
let listOfTickets = [];
const flightTicketItems = document.querySelectorAll('.flight-ticket-item');
const flightTopBtn = document.querySelectorAll('.flight-top-btn');
const flightTicketsHolder = document.getElementById('flight-tickets-holder');
const PrevDayToggler = document.getElementById('prev-day-toggler');
const NextDayToggler = document.getElementById('next-day-toggler');
const firstSectOfFlight = document.getElementById('first-sect-of-flight');
const currentSelectedDate = new Date(firstSectOfFlight.getAttribute('data-date'));
const rightSideMonthText = document.getElementById('right-side-month-text');
const rightSideDayText = document.getElementById('right-side-day-text');
const rightSideYearText = document.getElementById('right-side-year-text');
const loaderModal = document.getElementById('loader-modal')
const nataiejNumber = document.getElementById('nataiej-number');
const myHeaders = new Headers();
const urlencoded = new URLSearchParams();
const dataTicket = localStorage.getItem('data-ticket')
const flightDate = JSON.parse(dataTicket).flightDate;
const flightDateToSet = new Date(flightDate)
let monthToSet;
let dateToSet;

// Removing Scroll Of Page In Load Of Page
document.body.style.overflowY = 'hidden';

// A Function That Sorts Items By 'date-price' Attritube
function showSortedListOfPrice() {
    const sortedArray = listOfTickets.sort((a, b) => +a.getAttribute('data-price') - +b.getAttribute('data-price'));
    sortedArray.forEach(item => flightTicketsHolder.appendChild(item))
}

// A Function That Sets Text Content Of Right Side Date Items (At The Top) To Given Date And Instead Of Month Number Shows Name Of Month In Text
function showDate(date) {
    const month = date.getMonth();
    let monthText;

    switch (Number(month)) {
        case 1: monthText = 'Jan';break;
        case 2: monthText = 'Feb';break;
        case 3: monthText = 'Mar';break;
        case 4: monthText = 'Apr';break;
        case 5: monthText = 'May';break;
        case 6: monthText = 'Jun';break;
        case 7: monthText = 'Jul';break;
        case 8: monthText = 'Aug';break;
        case 9: monthText = 'Sep';break;
        case 10: monthText = 'Oct';break;
        case 11: monthText = 'Nov';break;
        case 12: monthText = 'Dec';break;
    }

    rightSideMonthText.textContent = monthText;
    rightSideDayText.textContent = date.getDate();
    rightSideYearText.textContent = date.getFullYear();
}

// Adding Event Listener On Load Of Window That Sorts List Of Items By Price Of It.
window.addEventListener('load', () => {
    flightTicketItems.forEach(item => listOfTickets.push(item));
    showSortedListOfPrice();
})

// Adding Event Listener On Each Flight Top Buttons That Listens To CLick And Removes 'active' Class Name The Other active Button And Adds
// It To Clicked Button . Then Checks If Text Content OF Clicked Item is "ارزان ترین قیمت" . If It Is Then Calls 'showSortedListOfPrice' Function
//  Otherwise Sorts Items By 'data-date' Attr.
flightTopBtn.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.flight-top-btn.active').classList.remove('active');
        item.classList.add('active')

        if (item.textContent === "ارزان ترین قیمت") {
            showSortedListOfPrice()
        } else {
            const sortedArray = listOfTickets.sort((a, b) => new Date(a.getAttribute("data-date")) - new Date(b.getAttribute("data-date")));
            sortedArray.forEach(items => flightTicketsHolder.appendChild(items))
        }
    })
})

// Adding Event Listener On Prev And Next Day Toggles On Right Top Side Of Page That Sets Gets Selected Date And Goes For Day Before Or After (Based On Clicked Button)
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
urlencoded.append("adult_count", dataTicket.adultNumber);
urlencoded.append("child_count", dataTicket.kidNumber);
urlencoded.append("infant_count", dataTicket.newBornNumber);
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
                flightTicketsHolder.appendChild(newElement)
            })
        }
    })
    .catch(error => console.log('error', error));