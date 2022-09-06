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

// Changing data-opened Value Of Loader Modal In Flight Page In 5 Seconds Of Loading (TODO:Change To When All Data Is Loaded When Working With Api)
setInterval(() => loaderModal.setAttribute('data-opened', 'false'), 5000)