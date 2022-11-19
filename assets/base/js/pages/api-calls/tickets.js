// {
//     "start_time": "19:10:00",
//     "arrival_time": "20:25:00",
//     "capacity": 9,
//     "price": 938000,
//     "airline_title": "Saha Airlines",
//     "airline_icon": "https://newcash.me/flights_logos/Saha_Airlines.png",
//     "air_plane": "Boeing 737 (All Series-Stage 3)",
//     "seat_class": "Economy",
//     "is_systemic": false,
//     "flight_id": "a:9:{s:9:\"sessionId\";s:36:\"9f544866-4026-4fd8-a0dc-eec6dd751af2\";s:13:\"combinationId\";i:0;s:16:\"recommendationId\";i:0;s:11:\"subsystemId\";i:16;s:13:\"subsystemName\";s:6:\"sepehr\";s:12:\"flightNumber\";s:3:\"171\";s:4:\"from\";s:3:\"MHD\";s:2:\"to\";s:3:\"THR\";s:4:\"date\";s:10:\"2022-12-01\";}",
//     "flight_number": "171",
//     "flight_duration": "01:15",
//     "from_airport": "Mashhad",
//     "to_airport": "Tehran",
//     "child_price": null,
//     "infant_price": null,
//     "needs_captcha": 0
// }

// Adding Event Listener Of Load To Window That ..
window.addEventListener('load', () => {
    // Variables
    const loaderModal = document.getElementById('loader-modal');
    const loginModal = document.getElementById('login-modal');

    const informationToSearchInTickets = JSON.parse(localStorage.getItem('information-to-search-in-tickets-page'));
    const loginToken = localStorage.getItem('login-token');

    const headersOfDataToSend = new Headers();
    headersOfDataToSend.append("Accept", "application/json");
    headersOfDataToSend.append("debug", "true");
    headersOfDataToSend.append("Authorization", `Bearer ${loginToken}`);
    headersOfDataToSend.append("Content-Type", "application/x-www-form-urlencoded");

    // Options To Search In Tickets Search Api
    const searchParametresToSend = new URLSearchParams();
    searchParametresToSend.append("date", informationToSearchInTickets.date);
    searchParametresToSend.append("adult_count", informationToSearchInTickets.adult_count);
    searchParametresToSend.append("child_count", informationToSearchInTickets.child_count);
    searchParametresToSend.append("infant_count", informationToSearchInTickets.infant_count);
    searchParametresToSend.append("from", informationToSearchInTickets.from);
    searchParametresToSend.append("to", informationToSearchInTickets.to);

    const optionsToSend = {
        method: 'POST',
        headers: headersOfDataToSend,
        body: searchParametresToSend,
        redirect: 'follow'
    };

    // Fetching Search Tickets Api
    fetch("https://www.newcash.me/api/v2/airfare/flights/search", optionsToSend)
        .then(response => response.json())
        .then(result => {
            // Closing Loader Modal
            loaderModal.removeAttribute('data-opened');

            // If User Is Unauthenticated Then Open Login Modal Then Focus To First Input Of It
            if (result.message === 'Unauthenticated.') {
                loginModal.toggleAttribute('data-opened');
                document.querySelector('#mobile-number-input-login-modal input').focus()
            } else {
                // Variables
                const ticketComponentList = document.getElementById('ticket-component-list');
                const returnedTickets = result.data.tickets;

                // For Each Returned Ticket That Creates 'li','ticket-component' Element Then Sets Attributes On Created 'ticket-component'
                returnedTickets.forEach(ticket => {
                    const listItemElement = document.createElement('li');
                    const ticketComponentElement = document.createElement('ticket-component');

                    ticketComponentElement.setAttribute('icon-src', ticket.airline_icon)
                    ticketComponentElement.setAttribute('name', ticket.airline_title)
                    if (ticket.is_systemic) {ticketComponentElement.setAttribute('systemic', 'true')}
                    ticketComponentElement.setAttribute('number-of-sits', ticket.capacity)
                    ticketComponentElement.setAttribute('flight-number', ticket.flight_number)
                    ticketComponentElement.setAttribute('mode', ticket.seat_class)
                    ticketComponentElement.setAttribute('start-time', ticket.start_time.slice(0,5))
                    ticketComponentElement.setAttribute('start-location', ticket.from_airport)
                    ticketComponentElement.setAttribute('start-location-en', 'number/string')
                    ticketComponentElement.setAttribute('start-location-fa', 'number/string')
                    ticketComponentElement.setAttribute('end-time', ticket.arrival_time.slice(0,5))
                    ticketComponentElement.setAttribute('end-location', ticket.to_airport)
                    ticketComponentElement.setAttribute('end-location-en', 'number/string')
                    ticketComponentElement.setAttribute('end-location-fa', 'number/string')
                    ticketComponentElement.setAttribute('price', Number(ticket.price).toLocaleString())
                    ticketComponentElement.setAttribute('start-loaction-abbr', 'number/string')
                    ticketComponentElement.setAttribute('end-loaction-abbr', 'number/string')
                    ticketComponentElement.setAttribute('route-duration-hour', 'number/string')
                    ticketComponentElement.setAttribute('route-duration-minute', 'number/string')
                    ticketComponentElement.setAttribute('start-date', 'number/string')
                    ticketComponentElement.setAttribute('start-date-en', 'number/string')
                    ticketComponentElement.setAttribute('start-date-fa', 'number/string')
                    ticketComponentElement.setAttribute('end-date-en', 'number/string')
                    ticketComponentElement.setAttribute('end-date-fa', 'number/string')
                    ticketComponentElement.setAttribute('plane-model', 'number/string')

                    // Appending Children To Their Parents
                    listItemElement.appendChild(ticketComponentElement);
                    ticketComponentList.appendChild(listItemElement);
                })
            }
        })
        .catch(error => console.log('error', error));
})
