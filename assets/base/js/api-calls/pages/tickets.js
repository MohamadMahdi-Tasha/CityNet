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
                const retunedTicketsNumberElement = document.getElementById('retuned-tickets-number');
                const returnedTickets = result.data.tickets;
                const listOfCompanysInTickets = [];
                const airplanesComponentsHolder = document.getElementById('airplanes-components-holder');

                // Setting Number Of Returned Tickets
                retunedTicketsNumberElement.textContent = returnedTickets.length

                // When There Is No Result To Show ..
                if (returnedTickets.length === 0) {
                    //  Variables
                    const thereIsNoTicketDiv = document.createElement('div');
                    const titleOfTherIsNoTicket = document.createElement('h6');
                    const paragraphOfTherIsNoTicket = document.createElement('p');

                    // Setting Text Contents Of Created Variables
                    titleOfTherIsNoTicket.textContent = 'توجه';
                    paragraphOfTherIsNoTicket.innerHTML = 'در تاریخ جستجوی شما پروازی وجود ندارد و یا ظرفیت آنها تکمیل شده است. <br> همواره شما می توانید از طریق دکمه‌های روز بعد و روز قبل و یا جستجوی مجدد تاریخ جستجوی خود را تغییر دهید.'

                    // Setting Class Names Of Created Variables
                    thereIsNoTicketDiv.className = 'p-3 rounded-3 warning-holder ms-lg-3 ms-0';
                    titleOfTherIsNoTicket.className = 'fw-bold';
                    paragraphOfTherIsNoTicket.className = 'font-small mb-0';

                    // Appending Children To Their Parents In Created Variables
                    thereIsNoTicketDiv.appendChild(titleOfTherIsNoTicket)
                    thereIsNoTicketDiv.appendChild(paragraphOfTherIsNoTicket)
                    ticketComponentList.replaceWith(thereIsNoTicketDiv)
                } else {
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
                        ticketComponentElement.setAttribute('start-location', `(${abbrevationFromEnglishNameOfCity(ticket.from_airport)}) ${persianNameFromAbbrevation(abbrevationFromEnglishNameOfCity(ticket.from_airport))}`)
                        ticketComponentElement.setAttribute('start-location-en', ticket.from_airport)
                        ticketComponentElement.setAttribute('start-location-fa', persianNameFromAbbrevation(abbrevationFromEnglishNameOfCity(ticket.from_airport)))
                        ticketComponentElement.setAttribute('end-time', ticket.arrival_time.slice(0,5))
                        ticketComponentElement.setAttribute('end-location', `(${abbrevationFromEnglishNameOfCity(ticket.to_airport)}) ${persianNameFromAbbrevation(abbrevationFromEnglishNameOfCity(ticket.to_airport))}`)
                        ticketComponentElement.setAttribute('end-location-en', ticket.to_airport)
                        ticketComponentElement.setAttribute('end-location-fa', persianNameFromAbbrevation(abbrevationFromEnglishNameOfCity(ticket.to_airport)))
                        ticketComponentElement.setAttribute('price', Number(ticket.price).toLocaleString())
                        ticketComponentElement.setAttribute('start-loaction-abbr', abbrevationFromEnglishNameOfCity(ticket.from_airport))
                        ticketComponentElement.setAttribute('end-loaction-abbr', abbrevationFromEnglishNameOfCity(ticket.to_airport))
                        ticketComponentElement.setAttribute('route-duration-hour', getRouteDuration(ticket.start_time.slice(0,5), ticket.arrival_time.slice(0,5)).hour)
                        ticketComponentElement.setAttribute('route-duration-minute', getRouteDuration(ticket.start_time.slice(0,5), ticket.arrival_time.slice(0,5)).minute)
                        ticketComponentElement.setAttribute('start-date', new Date(htmlElement.getAttribute('data-flight-date-en')))
                        ticketComponentElement.setAttribute('start-date-en', new Date(new Date(htmlElement.getAttribute('data-flight-date-en'))).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
                        ticketComponentElement.setAttribute('start-date-fa', `${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('YYYY')} ${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('MMMM')} ${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('DD')}`)
                        ticketComponentElement.setAttribute('end-date-en', new Date(new Date(htmlElement.getAttribute('data-flight-date-en'))).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
                        ticketComponentElement.setAttribute('end-date-fa', `${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('YYYY')} ${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('MMMM')} ${new persianDate(new Date(htmlElement.getAttribute('data-flight-date-en'))).format('DD')}`)
                        ticketComponentElement.setAttribute('plane-model', ticket.air_plane)

                        // Appending Children To Their Parents
                        listItemElement.appendChild(ticketComponentElement);
                        ticketComponentList.appendChild(listItemElement);
                    })

                    // For Each Ticket-component Push Attribute Of 'name' Of It To 'listOfCompanysInTickets' Array
                    document.querySelectorAll('ticket-component').forEach(component => listOfCompanysInTickets.push(component.getAttribute('name')))

                    // For Each Name Of Ticekt-components Without Any Duplicate ..
                    removeDuplicates(listOfCompanysInTickets).forEach(item => {
                        // Variables
                        const newAirplanesComponent = document.createElement('airplanes-component');
                        const pricesOfThisCompanyAll = document.querySelectorAll(`ticket-component[name="${item}"]`)
                        const pricesOfThisCompany = document.querySelector(`ticket-component[name="${item}"]`)
                        const pricesArrayOfThisCompany = [];

                        // For Each 'pricesOfThisCompanyAll' Push Attribute Of 'price' Of Result To 'pricesArrayOfThisCompany' Array
                        pricesOfThisCompanyAll.forEach(item => pricesArrayOfThisCompany.push(item.getAttribute('price')))

                        // Setting Attributes On Created Element
                        newAirplanesComponent.setAttribute('title', item);
                        newAirplanesComponent.setAttribute('price', pricesArrayOfThisCompany.sort()[0]);
                        newAirplanesComponent.setAttribute('icon', pricesOfThisCompany.getAttribute('icon-src'));

                        // Appending Created Element To Its Parent
                        airplanesComponentsHolder.appendChild(newAirplanesComponent)
                    })
                }
            }
        })
        .catch(error => console.log('error', error));
})