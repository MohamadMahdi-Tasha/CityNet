// Variables
const selectPersonFromListBtn = document.querySelectorAll('.select-person-from-list-btn');
const addSecondPhoneEmailButton = document.getElementById('add-second-phone-email-btn');
const secondPhoneEmail = document.getElementById('second-phone-email');
const addSecondPhoneEmailRemoveButton = document.getElementById('second-phone-email-remove-btn');

// Adding Event Listener On Each Select Person From List That Listenes To Click And Checks If User Is Logged In. If It Is Then Show The Select Person Modal Otherwise Show
// Login Modal
selectPersonFromListBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-logged-in') === 'false') {
            const loginModal = document.getElementById('login-modal');
            loginModal.toggleAttribute('data-opened')
        } else {
            // Variables
            const selectPersonModal = document.getElementById('select-person-modal');
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
                    const tbodySelectPersonModal = document.getElementById('tbody-select-person-modal');

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
                        buttonSelectPersonElement.className = "submit-button rounded-4 ripple-button font-small col-12";

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