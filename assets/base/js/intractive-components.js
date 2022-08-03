// Variables
const intractiveInputComponentInput = document.querySelectorAll('.intractive-input-component');
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');
const popularCitysBtns = document.querySelectorAll('.popular-citys-btn');
const switchBtn = document.querySelectorAll('.switch-btn');
const minusAndPlusButtons = document.querySelectorAll('.minus-and-plus-btn');
const oneWayPassengerDropdownItems = document.querySelectorAll('.one-way-passenger-dropdown > .dropdown-menu button');

// Adding Event Listener Of Click To Each Intractive Component That Focused To Input In It And Adds Class Of Focused To It.
intractiveInputComponentInput.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('focused');
        item.firstElementChild.nextElementSibling.focus();
    })
})

// Adding Event Listener Event On Each Plus Button That Listens To Click And Checks If Number Is Not 9 Then Adds 1 To It
plusBtns.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.nextElementSibling;
        let realNumber = Number(number.textContent);

        if (realNumber !==  9) {realNumber ++;}
        number.textContent = realNumber;
    })
})

// Adding Event Listener Event On Each Plus Button That Listens To Click And Checks If Number Is Not 9 Then Reduces 1 From It
minusBtns.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.previousElementSibling;
        let realNumber = Number(number.textContent);

        if (realNumber !==  0) {realNumber --;}
        number.textContent = realNumber;
    })
})

// A Function That Sets Value Of Passengers Interactive Components, Input To Total Number Of adultNumber, kidNumber And newBornNumber
// And Value Of Attritube Of data-value From DropDown Init.
function setValueOfPassangerInput() {
    const adultNumber = Number(document.querySelector('.adult-number').textContent);
    const kidNumber = Number(document.querySelector('.kid-number').textContent);
    const newBornNumber = Number(document.querySelector('.new-born-number').textContent);
    const dropdown = document.querySelector('.one-way-passenger-dropdown');
    const passengerInput = document.querySelector('.passenger-input');

    passengerInput.value = `${adultNumber + kidNumber + newBornNumber} مسافر , ${dropdown.getAttribute('data-value')}`;
}

//  Adding Event Listener On Click Of Each Minus And Plus Button That Calls setValueOfPassangerInput Function
minusAndPlusButtons.forEach(item => item.addEventListener('click', () => setValueOfPassangerInput()))

// Adding Event Listener On Each Popular City Dropdown Buttons That Listens To Click
popularCitysBtns.forEach(item => {
    item.addEventListener('click', () => {
        // Creating Elements
        const div = document.createElement('div');
        const iconHolder = document.createElement('span');
        const icon = document.createElement('i');
        const brand = document.createElement('span');
        const name = document.createElement('h6');
        const component = item.parentElement.parentElement.parentElement;
        const popCity = component.lastElementChild;
        let brandToShow = '';
        let nameToShow = '';
        let isPrimary = false;

        // Checks If Clicked Buttons Text Content Is "تهران" Or What Ever, Then Sets Its Brand, Name To Shows , Color Of Its Badge
        switch (item.textContent) {
            case "تهران":brandToShow = "THR";nameToShow = "تهران, ایران (Tehran)";isPrimary = true;break;
            case "کیش":brandToShow = "KIH";nameToShow = "کیش, ایران (Kish Island)";break;
            case "استانبول":brandToShow = "IST";nameToShow = "استانبول, ترکیه (Istanbul)";break;
            case "دبی":brandToShow = "DXD";nameToShow = "دبی, عمارات (Dubai)";break;
            case "مشهد":brandToShow = "MHD";nameToShow = "مشهد, ایران (Mashhad)";break;
            case "اهواز":brandToShow = "AWZ";nameToShow = "اهواز, ایران (Ahvaz)";break;
            case "انکارا":brandToShow = "ESB";nameToShow = "انکارا, ترکیه (Ankara)";break;
            case "لندن":brandToShow = "LHR";nameToShow = "لندن, بریتانیا (London)";break;
            case "تبریز":brandToShow = "TBZ";nameToShow = "تبریز, ایران (Tabriz)";break;
            case "قشم":brandToShow = "GSM";nameToShow = "قشم, ایران (Qeshm Island)";break;
            case "تورنتو":brandToShow = "YYZ";nameToShow = "تورنتو, کانادا (Torento)";break;
            case "ایروان":brandToShow = "ENV";nameToShow = "ایروان, ارمنستان (Yerevan)";break;
            case "بندر عباس":brandToShow = "BND";nameToShow = "بندر عباس, ایران (Bandar Abbas)";break;
            case "شیراز":brandToShow = "SYZ";nameToShow = "شیراز, ایران (Shiraz)";break;
            case "مسقط":brandToShow = "MCT";nameToShow = "مسقط, عمان (Muscat)";break;
            case "پکن":brandToShow = "PEK";nameToShow = "پکن, چین (Beijing)";break;
            case "رشت":brandToShow = "RAS";nameToShow = "رشت, ایران (Rasht)";break;
            case "اصفهان":brandToShow = "IFN";nameToShow = "اصفهان, ایران (Isfahan)";isPrimary = true;break;
            case "نجف":brandToShow = "NJF";nameToShow = "نجف, عراق (Najaf)";break;
            case "باکو":brandToShow = "GYD";nameToShow = "باکو, اذربایجان (Baku)";break;
        }

        // Adding ClassNames To Created Elements
        div.className = 'd-flex align-items-center flex-wrap position-absolute gap-1 selected-location';
        // If Clicked Button Is Primary Then Set Class Name Of 'my-bg-primary' else To 'my-bg-pink', Other Classes
        iconHolder.className = `${isPrimary ? 'my-bg-primary' : 'my-bg-pink'} rounded-3 p-1 text-white ms-2 font-small`;
        // If Clicked Button Is Primary Then Set Icon To House Otherwise To Airplane
        icon.className = `bi bi-${isPrimary ? 'house' : 'airplane'}`;
        name.className = 'font-small mb-0';
        brand.textContent = brandToShow;
        name.textContent = nameToShow;

        // Appending Children To Their Parents
        div.appendChild(iconHolder);
        iconHolder.appendChild(icon);
        iconHolder.appendChild(brand);
        div.appendChild(name);

        // If Clicked Component Dosnt Contains Element With Class Of selected-location Then Append Div To It OtherWise Replace Div To Last Child Element
        // Of Component
        if (!component.contains(document.querySelector('.selected-location'))) {component.appendChild(div);}
        else {component.lastElementChild.replaceWith(div)}

        // Removing Input In Components
        component.firstElementChild.nextElementSibling.remove()
        // Adding Event Listener Of 'wasShowing' To Popular City
        popCity.classList.add('wasShowing')
    })

})

// Adding Event Listener Of Click To Each Switch Buttons That Gets Clone Of Item Of 'selected-location' In Component Then Replaces The Orginals
// With Clones And Adds Class Name Of animation To Switch Button And On Event Of 'animationend' (Its When Animation Ends) Removes It
switchBtn.forEach(item => {
    item.addEventListener('click', () => {
        const rightSideComponentContentToChange = document.querySelector('.top-side-flight > .intractive-input-component:first-of-type .selected-location');
        const leftSideComponentContentToChange = document.querySelector('.top-side-flight > .intractive-input-component:last-of-type .selected-location');
        const cloneOfRightSide = rightSideComponentContentToChange.cloneNode(true);
        const cloneOfLeftSide = leftSideComponentContentToChange.cloneNode(true);

        rightSideComponentContentToChange.replaceWith(cloneOfLeftSide)
        leftSideComponentContentToChange.replaceWith(cloneOfRightSide)

        item.classList.add('animation');
        item.addEventListener('animationend', () => {item.classList.remove('animation')})
    })
})

// Adding Event Listener On  Each Dropdown Item In Passenger Component And Listens To Click Then Checks If There Is Dropdown Item With
// Attribute Of data-active="true" Then Removes Attribute From It And Sets data-Value Of Dropdown To Clicked Items TextContent And
// Sets Text Content OF Input In Component To Clicked Items TextContent Again And Sets Attritube Of Clicked item To 'true' (data-active)
// And Calls setValueOfPassangerInput Function
oneWayPassengerDropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const activeButtons = document.querySelectorAll('.one-way-passenger-dropdown .dropdown-item[data-active="true"]');
        activeButtons.forEach(item => item.removeAttribute('data-active'));

        item.parentElement.parentElement.parentElement.setAttribute('data-value', item.textContent);
        item.parentElement.parentElement.previousElementSibling.firstElementChild.textContent = item.textContent
        item.setAttribute('data-active', 'true');
        setValueOfPassangerInput()
    })
})