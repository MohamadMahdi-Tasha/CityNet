// Variables
const acceptRulesInput = document.getElementById('accept-rules');
const submitButton = document.getElementById('submit-btn');

// Adding Event Listener On Accept Rules Input That Listenes To Click And Checks If Its Checked Then Remove Attribute Of 'disabled' From
// Submit Button Otherwise Toggle The Attribute On It
acceptRulesInput.addEventListener('click', () => (acceptRulesInput.check) ? submitButton.removeAttribute('disabled') : submitButton.toggleAttribute('disabled'))

window.addEventListener('load', () => {
    const flightDetailsHolder = document.getElementById('flight-details-holder');
    const flightDetails = document.createElement('flight-details');
    const selectedTicket = JSON.parse(localStorage.getItem('selected-ticket'));
    const personInformation = JSON.parse(localStorage.getItem('person-information'));
    const passangersTobdy = document.getElementById('passengers-tbody');
    const priceElement1 = document.getElementById('price-element-1')
    const priceElement2 = document.getElementById('price-element-2')
    const priceElement3 = document.getElementById('price-element-3')
    const fromPersian = document.getElementById('from-persian');
    const toPersian = document.getElementById('to-persian');
    const email1 = document.getElementById('email-1')
    const email2 = document.getElementById('email-2')
    const phone1 = document.getElementById('phone-1')
    const phone2 = document.getElementById('phone-2')

    // Setting Attributes Of Created 'flight-details' Element
    flightDetails.setAttribute('type', 'details');
    flightDetails.setAttribute('icon-src', selectedTicket.icon);
    flightDetails.setAttribute('name', selectedTicket.name);
    flightDetails.setAttribute('flight-number', selectedTicket.flightNumber);
    flightDetails.setAttribute('mode', 'اکونومی');
    flightDetails.setAttribute('start-time', selectedTicket.startTime);
    flightDetails.setAttribute('end-time', selectedTicket.endTime);
    flightDetails.setAttribute('start-location', `(${selectedTicket.startLocation}) ${persianNameFromAbbrevation(selectedTicket.startLocation)}`);
    flightDetails.setAttribute('start-location-fa', persianNameFromAbbrevation(selectedTicket.startLocation));
    flightDetails.setAttribute('start-location-en', englishNameFromAbrevation(selectedTicket.startLocation));
    flightDetails.setAttribute('start-loaction-abbr', selectedTicket.startLocation);
    flightDetails.setAttribute('end-location', `(${selectedTicket.endLocation}) ${persianNameFromAbbrevation(selectedTicket.endLocation)}`);
    flightDetails.setAttribute('end-location-fa', persianNameFromAbbrevation(selectedTicket.endLocation));
    flightDetails.setAttribute('end-location-en', englishNameFromAbrevation(selectedTicket.endLocation));
    flightDetails.setAttribute('end-loaction-abbr', selectedTicket.endLocation);
    flightDetails.setAttribute('start-location', selectedTicket.endTime);
    flightDetails.setAttribute('price', selectedTicket.price);
    flightDetails.setAttribute('route-duration-hour', getRouteDuration(selectedTicket.startTime, selectedTicket.endTime).hour);
    flightDetails.setAttribute('route-duration-minute', getRouteDuration(selectedTicket.startTime, selectedTicket.endTime).minute);
    flightDetails.setAttribute('start-date', selectedTicket.date);
    flightDetails.setAttribute('start-date-en', new Date(selectedTicket.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    flightDetails.setAttribute('start-date-fa', `${new persianDate(new Date(selectedTicket.date)).format('YYYY')} ${new persianDate(new Date(selectedTicket.date)).format('MMMM')} ${new persianDate(new Date(selectedTicket.date)).format('DD')}`);
    flightDetails.setAttribute('end-date', selectedTicket.date);
    flightDetails.setAttribute('end-date-en', new Date(selectedTicket.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    flightDetails.setAttribute('end-date-fa', `${new persianDate(new Date(selectedTicket.date)).format('YYYY')} ${new persianDate(new Date(selectedTicket.date)).format('MMMM')} ${new persianDate(new Date(selectedTicket.date)).format('DD')}`);
    flightDetails.setAttribute('plane-model', selectedTicket.planeModel);

    flightDetailsHolder.appendChild(flightDetails)

    personInformation.slice(1, personInformation.length).forEach(passenger => {
        const classNameOfTHAndTD = 'border-bottom-0 bb-lg font-small p-3';
        const tableRow = document.createElement('tr');
        const numberOfItemElement = document.createElement('th')
        const nameAndLastNameElement = document.createElement('td')
        const ageElement = document.createElement('td')
        const genderElement = document.createElement('td')
        const nationalityElement = document.createElement('td')
        const nationalNumberElement = document.createElement('td')
        const birthdayElement = document.createElement('td')
        const passportNumberElement = document.createElement('td')
        const passportExpireDateElement = document.createElement('td')

        numberOfItemElement.className = classNameOfTHAndTD;
        nameAndLastNameElement.className = classNameOfTHAndTD;
        ageElement.className = classNameOfTHAndTD;
        genderElement.className = classNameOfTHAndTD;
        nationalityElement.className = classNameOfTHAndTD;
        nationalNumberElement.className = classNameOfTHAndTD;
        birthdayElement.className = classNameOfTHAndTD;
        passportNumberElement.className = classNameOfTHAndTD;
        passportExpireDateElement.className = classNameOfTHAndTD;

        const ageNumber = new Date().getFullYear() - new Date(passenger.birthday).getFullYear()
        let age;
        let genderToSet;

        if (ageNumber > 12) {age = 'adult'}
        else if (ageNumber < 12 && ageNumber > 2) {age = 'kid'}
        else if (ageNumber < 2) {age = 'child'}

        (passenger.gender === 'female') ? genderToSet = 'خانم' : genderToSet = 'اقا'

        numberOfItemElement.textContent = personInformation.indexOf(passenger);
        nameAndLastNameElement.textContent = `${passenger.name} ${passenger.lastName}`
        ageElement.textContent = age;
        genderElement.textContent = genderToSet;
        nationalityElement.textContent = passenger.nationality;
        nationalNumberElement.textContent = passenger.nationalityNumber;
        birthdayElement.textContent = passenger.birthday;
        passportNumberElement.textContent = passenger.passportNumber;
        passportExpireDateElement.textContent = passenger.passportExpireDate;

        tableRow.appendChild(numberOfItemElement)
        tableRow.appendChild(nameAndLastNameElement)
        tableRow.appendChild(ageElement)
        tableRow.appendChild(genderElement)
        tableRow.appendChild(nationalityElement)
        tableRow.appendChild(nationalNumberElement)
        tableRow.appendChild(birthdayElement)
        tableRow.appendChild(passportNumberElement)
        tableRow.appendChild(passportExpireDateElement)
        passangersTobdy.appendChild(tableRow)
    })

    priceElement1.textContent = selectedTicket.price
    priceElement2.textContent = selectedTicket.price
    priceElement3.textContent = selectedTicket.price
    fromPersian.textContent = englishNameFromAbrevation(selectedTicket.startLocation)
    toPersian.textContent = englishNameFromAbrevation(selectedTicket.endLocation)

    let email1ToSet;
    let email2ToSet;
    let phone1ToSet;
    let phone2ToSet;

    (personInformation[0].one.email1 === null) ? email1ToSet = '--' : email1ToSet = personInformation[0].one.email1;
    (personInformation[0].two.email2 === null) ? email2ToSet = '--' : email2ToSet = personInformation[0].two.email2;
    (personInformation[0].one.mobileNumber1 === null) ? phone1ToSet = '--' : phone1ToSet = personInformation[0].one.mobileNumber1;
    (personInformation[0].two.mobileNumber2 === null) ? phone2ToSet = '--' : phone2ToSet = personInformation[0].two.mobileNumber2;

    email1.textContent = email1ToSet
    phone1.textContent = phone1ToSet
    email2.textContent = email2ToSet
    phone2.textContent = phone2ToSet
})