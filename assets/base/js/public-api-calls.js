// variables
const loginForm = document.getElementById('login-form');
const loginCodeForm = document.getElementById('login-code-form');

// A Function That Takes Number As Parametre And Checks Of First Character Of Given Number Is Equal To '0'
// Then Number To Return Equals To Sliced Value Of Given Number From Index Of 1 Which Is Second Character Of String 
// Till The Last Or Lenght Of Given Number. Otherwise Number To Return Equals To Given Number
function returnNumberToSend(number) {
    let numberToReturn;

    (number[0] === '0')
        ? numberToReturn = number.slice(1, number.length)
        : numberToReturn = number

    return numberToReturn;
}

// Adding Event Listener On Login Form In Login Modal That Listenes To Submit Event And ...
loginForm.addEventListener('submit', (event) => {
    // Preventing From Defult Action Which Refreshes The Page
    event.preventDefault();

    // Variables
    const phoneNumberComponent = document.getElementById('mobile-number-input-login-modal').firstElementChild;
    const valueOfPhoneNumberComponent = phoneNumberComponent.getAttribute('data-value');

    const submitButtonOfLoginForm = document.getElementById('login-submit-btn')
    const codeModal = document.getElementById('login-code-modal');
    const loginModal = document.getElementById('login-modal');
    const headersOfDataToSend = new Headers();
    const dataToSend = JSON.stringify({"mobile": returnNumberToSend(valueOfPhoneNumberComponent)});

    // Creating New Element Of Span And Adding Class Name Of 'spinner-boreder text-white' To It To Be Spinner
    // And Setting Attribute Of 'role' To 'status' In Created Element
    const innerSpinner = document.createElement('span');
    innerSpinner.className = 'spinner-border text-white'
    innerSpinner.setAttribute('role', 'status');

    // Removing Text Content Of Submit Button In Form And Appending Created Spinner To Submit Button As a Child
    submitButtonOfLoginForm.textContent = '';
    submitButtonOfLoginForm.appendChild(innerSpinner)

    // Setting Headers To Send Data With Fetch
    headersOfDataToSend.append("Accept", "application/json");
    headersOfDataToSend.append("debug", "true");
    headersOfDataToSend.append("Content-Type", "application/json");

    // Some Variable Again
    const optionsToSend = {
        method: 'POST',
        headers: headersOfDataToSend,
        body: dataToSend,
        redirect: 'follow'
    };

    // Fetching login Api With Some options
    fetch("https://www.newcash.me/api/v1/airfare-web/login", optionsToSend)
        // Returning Json Data From Api
        .then(response => response.json())
        // Take Returned Json Data And ..
        .then(result => {
            // Variable
            const thereIsNoUseWithThisNumberArabic = 'لم یتم العثور علی مستخدم برقم الهاتف هذا';

            // Setting Text Content Of Submit Button
            submitButtonOfLoginForm.textContent = 'ورود';

            // Removing Spinner In Submit Button
            innerSpinner.remove();

            // If Returned Data Shows That 'There Is No Number Submited With This In System' Then Set Error
            // To Phone Number Component With Some Text. Otherwise Close Login Modal And Open Code Modal
            if (result.data.msg === thereIsNoUseWithThisNumberArabic) {
                setErrorOnComponent(phoneNumberComponent, 'همچین شماره ای در سیستم ثبت نشده!');
            } else if (result.data.result === "success") {
                const numberInputInCodeModal = codeModal.querySelector('#mobile-number-input-code-modal input')
                loginModal.removeAttribute('data-opened');
                codeModal.setAttribute('data-opened', 'true');
                numberInputInCodeModal.focus();
            }
        })
        .catch(error => {console.log('error', error)});
})


// Adding Event Listener On Form Element Of Code Modal That Listenes To Submit Button And ...
loginCodeForm.addEventListener('submit', (event) => {
    // Preventing From Defult Action Which Refreshes The Page
    event.preventDefault();

    // Variables
    const loginCodeSubmitButton = document.getElementById('login-code-submit-btn')
    const phoneNumberComponent = document.getElementById('mobile-number-input-login-modal').firstElementChild;
    const valueOfPhoneNumberComponent = phoneNumberComponent.getAttribute('data-value');
    const mobileNumberInputCodeModal = document.getElementById('mobile-number-input-code-modal').firstElementChild;
    const valueOfMobileNumberInputCodeModal = mobileNumberInputCodeModal.getAttribute('data-value');
    const headersOfDataToSend = new Headers();

    // Setting Headers To Send Data With Fetch
    headersOfDataToSend.append("Accept", "application/json");
    headersOfDataToSend.append("debug", "true");
    headersOfDataToSend.append("Content-Type", "application/json");

    // Creating New Element Of Span And Adding Class Name Of 'spinner-boreder text-white' To It To Be Spinner
    // And Setting Attribute Of 'role' To 'status' In Created Element
    const innerSpinner = document.createElement('span');
    innerSpinner.className = 'spinner-border text-white'
    innerSpinner.setAttribute('role', 'status');

    // Removing Text Content Of Submit Button In Form And Appending Created Spinner To Submit Button As a Child
    loginCodeSubmitButton.textContent = '';
    loginCodeSubmitButton.appendChild(innerSpinner);

    // Some More Variables
    const dataToSend = JSON.stringify({
        "mobile": returnNumberToSend(valueOfPhoneNumberComponent),
        "verify_code": valueOfMobileNumberInputCodeModal
    });
    const optionsToSend = {
        method: 'POST',
        headers: headersOfDataToSend,
        body: dataToSend,
        redirect: 'follow'
    };


    // Fetching Verify Code Api With Some Options
    fetch("https://www.newcash.me/api/v1/airfare-web/verify", optionsToSend)
        // Returning Json Data From Api
        .then(response => response.json())

        // Taking Returned Json Data From Api And ...
        .then(result => {
            // Setting Text Content Of Submit Button And Removing Spinner Element
            loginCodeSubmitButton.textContent = 'ورود';
            innerSpinner.remove();

            if (result.data.token !== null) {
                // Setting 'logged-in' And 'login-toke' Items In Local Stoarge Then Relode The Page
                localStorage.setItem('logged-in', 'true');
                localStorage.setItem('login-token', result.data.token);
                document.location.reload();
            } else if (result.data.token === null) {
                setErrorOnComponent(mobileNumberInputCodeModal, 'شماره وارد شده اشتباه میباشد');
            }
        })
        .catch(error => console.log('error', error));
})


// Adding Event Listener Of 'load' To Window That ...
window.addEventListener('load', () => {
    // Variables
    const loggedInLocalStoargeItem = localStorage.getItem('logged-in');
    const loggedOutOnlyItems = document.querySelectorAll('.logged-out-only-item');
    const loggedInOnlyItems = document.querySelectorAll('.logged-in-only-item');

    // Checking If Logged In Item Exists In Local Stoarge
    if (loggedInLocalStoargeItem !== null) {
        const headersOfDataToSend = new Headers();
        const loginTokenLocalStoarge = localStorage.getItem('login-token');

        htmlElement.setAttribute('data-logged-in', 'true');
        loggedOutOnlyItems.forEach(item => item.remove());

        headersOfDataToSend.append("Accept", "application/json");
        headersOfDataToSend.append("debug", "true");
        headersOfDataToSend.append("Authorization", `Bearer ${loginTokenLocalStoarge}`);

        const optionsToSend = {
            method: 'GET',
            headers: headersOfDataToSend,
            redirect: 'follow'
        };

        fetch("https://www.newcash.me/api/v1/user/sync", optionsToSend)
            .then(response => response.json())
            .then(result => {
                const headerUserName = document.getElementById('header-user-name');
                const headerUserNumber = document.getElementById('header-user-number')
                const headerUserCash = document.getElementById('header-user-cash');

                const userMobileNumber = result.data.user.mobile;
                const userNameFromApi = result.data.user.card_info.name;
                const userCash = result.data.user.wallet;
                let nameToSet;

                (userNameFromApi !== null) ? nameToSet = userNameFromApi : nameToSet = '--'

                headerUserName.textContent = nameToSet;
                headerUserNumber.textContent = userMobileNumber;
                headerUserCash.textContent = userCash;
            })
            .catch(error => console.log('error', error));
    } else {
        htmlElement.setAttribute('data-logged-in', 'false');
        loggedInOnlyItems.forEach(item => item.remove());
    }
})
