// Variables
const selectPersonFromListBtn = document.querySelectorAll('.select-person-from-list-btn');
const addSecondPhoneEmailButton = document.getElementById('add-second-phone-email-btn');
const secondPhoneEmail = document.getElementById('second-phone-email');
const addSecondPhoneEmailRemoveButton = document.getElementById('second-phone-email-remove-btn');
const continueBuyingButton = document.getElementById('continue-buying-button');

// Adding event Listener On Load Of Window That ..
window.addEventListener('load', () => {
    // Variables
    const informationToSearchInTicketsPage = JSON.parse(localStorage.getItem('information-to-search-in-tickets-page'));
    const selectedTicket = JSON.parse(localStorage.getItem('selected-ticket'));
    const passengersCount = Number(informationToSearchInTicketsPage.adult_count) + Number(informationToSearchInTicketsPage.child_count) + Number(informationToSearchInTicketsPage.infant_count);
    const topSideRightSideTicketBuy = document.querySelector('.top-side-right-side-ticket-buy');
    const numberOfPassengersElement = document.getElementById('number-of-passengers-element');
    const flightDetailElement = document.getElementById('flight-detail');
    const newDetailsFlightDetailComponent = document.createElement('flight-details');

    // Setting text Content Of Numbers Of Passengers Count
    numberOfPassengersElement.textContent = passengersCount;

    // If Passenger Count Is equal To 'n' Then Remove All Next 'passanger-information'
    if (passengersCount === 1) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type)').forEach(component => component.remove())}
    else if (passengersCount === 2) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2))').forEach(component => component.remove())}
    else if (passengersCount === 3) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2), :nth-of-type(3))').forEach(component => component.remove())}
    else if (passengersCount === 4) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4))').forEach(component => component.remove())}
    else if (passengersCount === 5) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4), :nth-of-type(5))').forEach(component => component.remove())}
    else if (passengersCount === 6) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4), :nth-of-type(5), :nth-of-type(6))').forEach(component => component.remove())}
    else if (passengersCount === 7) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4), :nth-of-type(5), :nth-of-type(6), :nth-of-type(7))').forEach(component => component.remove())}
    else if (passengersCount === 8) {topSideRightSideTicketBuy.querySelectorAll('passanger-information:not(:first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4), :nth-of-type(5), :nth-of-type(6), :nth-of-type(8))').forEach(component => component.remove())}

    // Setting Attributes Of Created 'flight-details' Element
    newDetailsFlightDetailComponent.setAttribute('type', 'details');
    newDetailsFlightDetailComponent.toggleAttribute('small');
    newDetailsFlightDetailComponent.setAttribute('icon-src', selectedTicket.icon);
    newDetailsFlightDetailComponent.setAttribute('name', selectedTicket.name);
    newDetailsFlightDetailComponent.setAttribute('flight-number', selectedTicket.flightNumber);
    newDetailsFlightDetailComponent.setAttribute('mode', 'اکونومی');
    newDetailsFlightDetailComponent.setAttribute('start-time', selectedTicket.startTime);
    newDetailsFlightDetailComponent.setAttribute('end-time', selectedTicket.endTime);
    newDetailsFlightDetailComponent.setAttribute('start-location', `(${selectedTicket.startLocation}) ${persianNameFromAbbrevation(selectedTicket.startLocation)}`);
    newDetailsFlightDetailComponent.setAttribute('start-location-fa', persianNameFromAbbrevation(selectedTicket.startLocation));
    newDetailsFlightDetailComponent.setAttribute('start-location-en', englishNameFromAbrevation(selectedTicket.startLocation));
    newDetailsFlightDetailComponent.setAttribute('start-loaction-abbr', selectedTicket.startLocation);
    newDetailsFlightDetailComponent.setAttribute('end-location', `(${selectedTicket.endLocation}) ${persianNameFromAbbrevation(selectedTicket.endLocation)}`);
    newDetailsFlightDetailComponent.setAttribute('end-location-fa', persianNameFromAbbrevation(selectedTicket.endLocation));
    newDetailsFlightDetailComponent.setAttribute('end-location-en', englishNameFromAbrevation(selectedTicket.endLocation));
    newDetailsFlightDetailComponent.setAttribute('end-loaction-abbr', selectedTicket.endLocation);
    newDetailsFlightDetailComponent.setAttribute('start-location', selectedTicket.endTime);
    newDetailsFlightDetailComponent.setAttribute('price', selectedTicket.price);
    newDetailsFlightDetailComponent.setAttribute('route-duration-hour', getRouteDuration(selectedTicket.startTime, selectedTicket.endTime).hour);
    newDetailsFlightDetailComponent.setAttribute('route-duration-minute', getRouteDuration(selectedTicket.startTime, selectedTicket.endTime).minute);
    newDetailsFlightDetailComponent.setAttribute('start-date', selectedTicket.date);
    newDetailsFlightDetailComponent.setAttribute('start-date-en', new Date(selectedTicket.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    newDetailsFlightDetailComponent.setAttribute('start-date-fa', `${new persianDate(new Date(selectedTicket.date)).format('YYYY')} ${new persianDate(new Date(selectedTicket.date)).format('MMMM')} ${new persianDate(new Date(selectedTicket.date)).format('DD')}`);
    newDetailsFlightDetailComponent.setAttribute('end-date', selectedTicket.date);
    newDetailsFlightDetailComponent.setAttribute('end-date-en', new Date(selectedTicket.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    newDetailsFlightDetailComponent.setAttribute('end-date-fa', `${new persianDate(new Date(selectedTicket.date)).format('YYYY')} ${new persianDate(new Date(selectedTicket.date)).format('MMMM')} ${new persianDate(new Date(selectedTicket.date)).format('DD')}`);
    newDetailsFlightDetailComponent.setAttribute('plane-model', selectedTicket.planeModel);

    // Apending Created 'flight-details' Element To Its Parent
    flightDetailElement.appendChild(newDetailsFlightDetailComponent)
})

// Adding Event Listener On Each Select Person From List That Listenes To Click And Checks If User Is Logged In. If It Is Then Show The Select Person Modal Otherwise Show
// Login Modal
selectPersonFromListBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-logged-in') === 'false') {
            const loginModal = document.getElementById('login-modal');
            loginModal.toggleAttribute('data-opened')
        } else {
            // Variables
            const selectPersonModal = button.previousElementSibling.firstElementChild;
            const headersToSendData = new Headers();
            const loginToken = localStorage.getItem('login-token');

            // Opening Select Person Modal
            selectPersonModal.toggleAttribute('data-opened')

            // Setting Headers Of Data To Send
            headersToSendData.append("Accept", "application/json");
            headersToSendData.append("debug", "true");
            headersToSendData.append("Authorization", `Bearer ${loginToken}`);

            // Options To Send Data
            const optionsToSendData = {
                method: 'GET',
                headers: headersToSendData,
                redirect: 'follow'
            };

            // Fetching Person List
            fetch("https://www.newcash.me/api/v1/airfare/person/list", optionsToSendData)
                .then(response => response.json())
                .then(result => {
                    // Variables
                    const persons = result.data.persons;
                    const tbodySelectPersonModal = selectPersonModal.querySelector('tbody')

                    // Removing All Children Of Table Body
                    tbodySelectPersonModal.innerHTML  = '';

                    // looping Through Each Person Item
                    persons.forEach(person => {
                        // Variables
                        const styleOfTableDElements = 'font-small vertical-align text-center text-grey-darken3';

                        const genderOfPerson = person.gender;
                        const firstNameOfPerson = person.name;
                        const lastNameOfPerson = person.last_name;
                        const nationalityOfPerson = person.nationality;
                        const nationalityNumberOfPerson = person.residence;
                        const birthDateOfPerson = person.birthday;
                        const passportNumberOfPerson = person.passport;
                        const passportExpireDateOfPerson = person.expire_date;

                        const taleRowElement = document.createElement('tr');
                        const numberOfItemElement = document.createElement('th');
                        const genderOfPersonElement =  document.createElement('td');
                        const firstNameOfPersonElement =  document.createElement('td');
                        const lastNameOfPersonElement =  document.createElement('td');
                        const nationalityOfPersonElement =  document.createElement('td');
                        const nationalityNumberOfPersonElement =  document.createElement('td');
                        const birthDateOfPersonElement =  document.createElement('td');
                        const passportNumberOfPersonElement =  document.createElement('td');
                        const passportExpireDateOfPersonElement =  document.createElement('td');
                        const buttonSelectPersonHolderElement = document.createElement('td');
                        const buttonSelectPersonElement  = document.createElement('button');

                        // Setting On Click For Created Button That Calls 'handleSelectPersonButtonActions' Function
                        buttonSelectPersonElement.setAttribute('onclick', 'handleSelectPersonButtonActions(this)')

                        // Setting Text Content Of Each Created Element
                        genderOfPersonElement.textContent = genderOfPerson
                        firstNameOfPersonElement.textContent = firstNameOfPerson
                        lastNameOfPersonElement.textContent = lastNameOfPerson
                        nationalityOfPersonElement.textContent = nationalityOfPerson
                        nationalityNumberOfPersonElement.textContent = nationalityNumberOfPerson
                        birthDateOfPersonElement.textContent = birthDateOfPerson
                        passportNumberOfPersonElement.textContent = passportNumberOfPerson
                        passportExpireDateOfPersonElement.textContent = passportExpireDateOfPerson
                        buttonSelectPersonElement.textContent = 'انتخاب'

                        // Adding Class Names To Created Elements
                        numberOfItemElement.className = styleOfTableDElements;
                        genderOfPersonElement.className = styleOfTableDElements;
                        firstNameOfPersonElement.className = styleOfTableDElements;
                        lastNameOfPersonElement.className = styleOfTableDElements;
                        nationalityOfPersonElement.className = styleOfTableDElements;
                        nationalityNumberOfPersonElement.className = styleOfTableDElements;
                        birthDateOfPersonElement.className = styleOfTableDElements;
                        passportNumberOfPersonElement.className = styleOfTableDElements;
                        passportExpireDateOfPersonElement.className = styleOfTableDElements;
                        buttonSelectPersonElement.className = "submit-button select-person-button rounded-4 ripple-button font-small col-12";

                        // Appending Children To Their Parents
                        taleRowElement.appendChild(numberOfItemElement);
                        taleRowElement.appendChild(genderOfPersonElement);
                        taleRowElement.appendChild(firstNameOfPersonElement);
                        taleRowElement.appendChild(lastNameOfPersonElement);
                        taleRowElement.appendChild(nationalityOfPersonElement);
                        taleRowElement.appendChild(nationalityNumberOfPersonElement);
                        taleRowElement.appendChild(birthDateOfPersonElement);
                        taleRowElement.appendChild(passportNumberOfPersonElement);
                        taleRowElement.appendChild(passportExpireDateOfPersonElement);
                        buttonSelectPersonHolderElement.appendChild(buttonSelectPersonElement);
                        taleRowElement.appendChild(buttonSelectPersonHolderElement);
                        tbodySelectPersonModal.appendChild(taleRowElement);
                    })
                })
                .catch(error => console.log('error', error));
        }
    })
})

// Adding Event Listener On Add Second Phone Number Or Email Button That Listenes To Click And Shows Second Phone And Email Section And Hides
// Clicked Button
addSecondPhoneEmailButton.addEventListener('click', () => {
    secondPhoneEmail.classList.remove('d-none')
    addSecondPhoneEmailButton.classList.add('d-none');
})

// Adding Event Listener On Remove Button Of Add Second Phone Number Or Email Section That Listenes To Click And Shows addSecondPhoneEmailButton Button
// And Hides secondPhoneEmail Section
addSecondPhoneEmailRemoveButton.addEventListener('click', () => {
    secondPhoneEmail.classList.add('d-none')
    addSecondPhoneEmailButton.classList.remove('d-none');
})

// Adding Event Listner To Submit Button That Listnes To Click And
continueBuyingButton.addEventListener('click', () => {
    // Varibles
    const nameComponents = document.querySelectorAll('passanger-information intractive-component[placeholder="نام انگلیسی"]')
    const lastNameComponents = document.querySelectorAll('passanger-information intractive-component[placeholder="نام خانوادگی انگلیسی"]')
    const nationalityNumberComponents = document.querySelectorAll('passanger-information intractive-component[placeholder="شماره ملی"]')
    const birthdayComponents = document.querySelectorAll('passanger-information intractive-component[placeholder="تاریخ تولد"]')
    const passportNumberComponents = document.querySelectorAll('passanger-information intractive-component[placeholder="شماره گذرنامه"]')
    const passportExpireDateComponents = document.querySelectorAll('passanger-information intractive-component[placeholder="تاریخ انقضای گذرنامه"]')

    // Handling Errors And Their Succses
    nameComponents.forEach(component => {
        if (component.firstElementChild.getAttribute('data-value') === 'null') {setErrorOnComponent(component, 'لطفا نام فرد را بنویسید')}
        else if (component.firstElementChild.getAttribute('data-value') !== 'null') {setSuccsesOnComponent(component)}
    })
    lastNameComponents.forEach(component => {
        if (component.firstElementChild.getAttribute('data-value') === 'null') {setErrorOnComponent(component, 'لطفا نام خانوادگی فرد را بنویسید')}
        else if (component.firstElementChild.getAttribute('data-value') !== 'null') {setSuccsesOnComponent(component)}
    })
    nationalityNumberComponents.forEach(component => {
        if (component.firstElementChild.getAttribute('data-value') === 'null') {setErrorOnComponent(component, 'لطفا شماره ملی فرد را بنویسید')}
        else if (component.firstElementChild.getAttribute('data-value') !== 'null') {setSuccsesOnComponent(component)}
    })
    birthdayComponents.forEach(component => {
        if (component.firstElementChild.getAttribute('data-date') === 'null') {setErrorOnComponent(component, 'لطفا تاریخ تولد فرد را بنویسید')}
        else if (new Date() < new Date(component.firstElementChild.getAttribute('data-date'))) {setErrorOnComponent(component, 'لطفا تاریخ تولد را منطقی وارد کنید')}
        else if (component.firstElementChild.getAttribute('data-date') !== 'null') {setSuccsesOnComponent(component)}
    })
    passportNumberComponents.forEach(component => {
        if (component.firstElementChild.getAttribute('data-value') === 'null') {setErrorOnComponent(component, 'لطفا شماره گذرنامه فرد را بنویسید')}
        else if (component.firstElementChild.getAttribute('data-value') !== 'null') {setSuccsesOnComponent(component)}
    })
    passportExpireDateComponents.forEach(component => {
        if (component.firstElementChild.getAttribute('data-date') === 'null') {setErrorOnComponent(component, 'لطفا تاریخ انقضای گذرنامه فرد را بنویسید')}
        else if (new Date() > new Date(component.firstElementChild.getAttribute('data-date'))) {setErrorOnComponent(component, 'لطفا تاریخ انقضای گذرنامه را منطقی وارد کنید')}
        else if (component.firstElementChild.getAttribute('data-date') !== 'null') {setSuccsesOnComponent(component)}
    })

    // If There Is No Error Then ...
    if (document.querySelectorAll('.intractive-component.errored').length === 0) {
        // Variables
        const allPassengerInformation = document.querySelectorAll('passanger-information');
        const mobileNumber1 = document.getElementById('mobile-number-1').firstElementChild.getAttribute('data-value');
        const mobileNumber2 = document.getElementById('mobile-number-2').firstElementChild.getAttribute('data-value');
        const email1 = document.getElementById('email-1').firstElementChild.getAttribute('data-value');
        const email2 = document.getElementById('email-2').firstElementChild.getAttribute('data-value');
        let personInformation = [{email: {email1,email2}, mobileNumber: {mobileNumber1,mobileNumber2}}];
        const headersToSendData = new Headers();
        const innerSpinner = document.createElement('spinner');

        // Making Spinner That Make User To Wait
        innerSpinner.className = 'text-white spinner-border';
        continueBuyingButton.textContent = '';
        continueBuyingButton.appendChild(innerSpinner)

        // Setting Information Of Persons
        allPassengerInformation.forEach(component => {
            const name = component.querySelector('intractive-component[placeholder="نام انگلیسی"]').firstElementChild.getAttribute('data-value');
            const lastName = component.querySelector('intractive-component[placeholder="نام خانوادگی انگلیسی"]').firstElementChild.getAttribute('data-value');
            const nationality = component.querySelector('intractive-component[placeholder="ملیت"]').firstElementChild.firstElementChild.getAttribute('data-value');
            const gender = component.querySelector('intractive-component[placeholder="جنسیت"]').firstElementChild.firstElementChild.getAttribute('data-value');
            const nationalityNumber = component.querySelector('intractive-component[placeholder="شماره ملی"]').firstElementChild.getAttribute('data-value');
            const birthday = component.querySelector('intractive-component[placeholder="تاریخ تولد"]').firstElementChild.getAttribute('data-date');
            const passportNumber = component.querySelector('intractive-component[placeholder="شماره گذرنامه"]').firstElementChild.getAttribute('data-value');
            const passportExpireDate = component.querySelector('intractive-component[placeholder="تاریخ انقضای گذرنامه"]').firstElementChild.getAttribute('data-date');
            const searchParametresToSendData = new URLSearchParams();
            const loginToken = localStorage.getItem('login-token');
            let genderToSet;

            (gender === 'زن') ? genderToSet = 'female' : genderToSet = 'male'

            personInformation.push({
                name: name,
                lastName: lastName,
                nationality: nationality,
                gender: genderToSet,
                nationalityNumber: nationalityNumber,
                birthday: birthday,
                passportNumber: passportNumber,
                passportExpireDate: passportExpireDate,
            })

            // Setting Data To Fetch
            headersToSendData.append("Accept", "application/json");
            headersToSendData.append("debug", "true");
            headersToSendData.append("Authorization", `Bearer ${loginToken}`);
            headersToSendData.append("Content-Type", "application/x-www-form-urlencoded");

            searchParametresToSendData.append("name", name);
            searchParametresToSendData.append("last_name", lastName);
            searchParametresToSendData.append("passport", passportNumber);
            searchParametresToSendData.append("gender", genderToSet);
            searchParametresToSendData.append("birthday", birthday.replace( new RegExp("\\-","gm"),"/"));
            searchParametresToSendData.append("expire_date", passportExpireDate.replace( new RegExp("\\-","gm"),"/"));

            const optionsToSendData = {
                method: 'POST',
                headers: headersToSendData,
                body: searchParametresToSendData,
                redirect: 'follow'
            };

            // Fetching Insert Person Api That ...
            fetch("https://www.newcash.me/api/v1/airfare/person/insert", optionsToSendData)
                .then(response => response.json())
                .then(result => {
                    // Opening New Page In This Tab
                    window.open('ticket-buy-last.html', '_self');
                })
                .catch(error => console.log('error', error));
        })

        // Setting Persons Information In Local Storage
        localStorage.setItem('person-information', JSON.stringify(personInformation))
    }
})

// A Function For Handling Click Of Select Person Button That Takes Element As Parameter
function handleSelectPersonButtonActions(element) {
    // Variables
    const tableRow = element.parentElement.parentElement
    const modalHolder = tableRow.parentElement.parentElement.parentElement.parentElement.parentElement;
    const gender = tableRow.firstElementChild.nextElementSibling;
    const name = gender.nextElementSibling;
    const lastName = name.nextElementSibling;
    const birthday = lastName.nextElementSibling.nextElementSibling.nextElementSibling;
    const passportNumber = birthday.nextElementSibling;
    const passportExpireDate = passportNumber.nextElementSibling;
    const intractiveComponentsHolder = modalHolder.parentElement.parentElement.nextElementSibling;
    const selectedItemInformations = {
        gender: gender.textContent,
        name: name.textContent,
        lastName: lastName.textContent,
        birthday: birthday.textContent,
        passportNumber: passportNumber.textContent,
        passportExpireDate: passportExpireDate.textContent
    }
    const nameComponent = intractiveComponentsHolder.querySelector('.name-component')
    const lastnameComponent = intractiveComponentsHolder.querySelector('.last-name-component')
    const birthdayComponent = intractiveComponentsHolder.querySelector('.birthday-component')
    const genderComponent = intractiveComponentsHolder.querySelector('.gender-component')
    const passportNumberComponent = intractiveComponentsHolder.querySelector('.passport-number-component')
    const passportExpireDateComponent = intractiveComponentsHolder.querySelector('.passport-expire-date-component')
    const createdH6InBirthdayComponent = document.createElement('h6')
    const createdH6InExpireDateComponent = document.createElement('h6')
    let genderToSet;

    // If gender Of Selected Information Equals To 'male' Then Gender To Set Equals 'مرد'
    // Otherwise It Equals To 'زن'
    (selectedItemInformations.gender === 'male') ? genderToSet = 'مرد' : genderToSet = 'زن'

    // Creating H6 For Birthday Component And Adding Attributes To It
    createdH6InBirthdayComponent.className = 'font-small text-black-lighten3 selected-date mb-0';
    createdH6InBirthdayComponent.textContent = selectedItemInformations.birthday.replace( new RegExp("\\/","gm"),"-")

    // If Date Was Selected Replace Otherwise Append It To Last Element Of birthday Component
    if (!birthdayComponent.firstElementChild.lastElementChild.classList.contains('selected-date')) {birthdayComponent.firstElementChild.appendChild(createdH6InBirthdayComponent);}
    else {birthdayComponent.firstElementChild.lastElementChild.replaceWith(createdH6InBirthdayComponent);}

    // Creating H6 For Expire Date Of Passport Component And Adding Attributes To It
    createdH6InExpireDateComponent.className = 'font-small text-black-lighten3 selected-date mb-0';
    createdH6InExpireDateComponent.textContent = selectedItemInformations.passportExpireDate.replace( new RegExp("\\/","gm"),"-");
    if (!passportExpireDateComponent.firstElementChild.lastElementChild.classList.contains('selected-date')) {passportExpireDateComponent.firstElementChild.appendChild(createdH6InExpireDateComponent);}
    else {passportExpireDateComponent.firstElementChild.lastElementChild.replaceWith(createdH6InExpireDateComponent);}

    /// Adding Class Names To Components
    nameComponent.firstElementChild.classList.add('focused', 'disabled');
    lastnameComponent.firstElementChild.classList.add('focused', 'disabled');
    birthdayComponent.firstElementChild.classList.add('focused', 'disabled');
    passportNumberComponent.firstElementChild.classList.add('focused', 'disabled');
    passportExpireDateComponent.firstElementChild.classList.add('focused', 'disabled');
    genderComponent.firstElementChild.firstElementChild.classList.add('focused', 'disabled');

    // Setting Value Of Inputs In Input Intractive Components
    nameComponent.firstElementChild.querySelector('input').value = selectedItemInformations.name
    lastnameComponent.firstElementChild.querySelector('input').value = selectedItemInformations.lastName
    passportNumberComponent.firstElementChild.querySelector('input').value = selectedItemInformations.passportNumber
    genderComponent.firstElementChild.firstElementChild.querySelector('h6:first-of-type').textContent = genderToSet;

    // Setting Attribute Of Values
    nameComponent.firstElementChild.setAttribute('data-value', selectedItemInformations.name)
    lastnameComponent.firstElementChild.setAttribute('data-value', selectedItemInformations.lastName)
    lastnameComponent.firstElementChild.setAttribute('data-value', selectedItemInformations.lastName)
    genderComponent.firstElementChild.firstElementChild.setAttribute('data-value', genderToSet)
    passportNumberComponent.firstElementChild.setAttribute('data-value', selectedItemInformations.passportNumber)
    passportExpireDateComponent.firstElementChild.setAttribute('data-date', selectedItemInformations.passportExpireDate.replace( new RegExp("\\/","gm"),"-"))
    birthdayComponent.firstElementChild.setAttribute('data-date', selectedItemInformations.birthday.replace( new RegExp("\\/","gm"),"-"))

    // Removing Class Of 'active' From Button That Haves It (In Drop Down) Then Adding It To Button Which Has Text Content Of  'genderToSet' Variable
    genderComponent.firstElementChild.firstElementChild.nextElementSibling.querySelector('.buy-ticket-drop-down-button.active').classList.remove('active');
    genderComponent.firstElementChild.firstElementChild.nextElementSibling.querySelectorAll('.buy-ticket-drop-down-button').forEach(button => {if (button.textContent === genderToSet) {button.classList.add('active')}})

    // Closing Modal
    modalHolder.removeAttribute('data-opened');
}