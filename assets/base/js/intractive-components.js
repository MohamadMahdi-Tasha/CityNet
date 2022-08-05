//Variables
const popularCitysBtn = document.querySelectorAll('.popular-citys-btn');
const switchBtn = document.querySelectorAll('.switch-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');
const dateComponent = document.querySelectorAll('.intractive-input-component.date');
const passangerComponent = document.querySelectorAll('.intractive-input-component.passenger')
const oneWayPassengerDropdownItems = document.querySelectorAll('.one-way-passenger-dropdown > .dropdown-menu button');
const twoWayPassengerDropdownItems = document.querySelectorAll('.two-way-passenger-dropdown > .dropdown-menu button');
const threeWayPassengerDropdownItems = document.querySelectorAll('.three-way-passenger-dropdown > .dropdown-menu button');
const minusAndPlusButtons1 = document.querySelectorAll('.minus-and-plus-btn-1');
const minusAndPlusButtons2 = document.querySelectorAll('.minus-and-plus-btn-2');
const minusAndPlusButtons3 = document.querySelectorAll('.minus-and-plus-btn-3');
const intractiveInputComponentModal = document.querySelectorAll('.intractive-input-component.my-modal-init');

// A Function That Creates List Of Items With Value Of Nothing (Null) Then For Each Given Element Of It, Then Converts Text Content Of
// Each Item To Number Then Adds It To Created List. After That Adds All Numbers In Created Array To Gether And Shows It In numberElement
// And Gets Value Of '[data-value]'(Attr) In Dropdown Element And Shows It In 'textElement'.
function setValueOfPassangerInput(element) {
    let listOfNumbers = [];

    element.forEach(item => {
        const numberElement = item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild;
        const textElement = item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.lastElementChild;
        const dropDown = item.parentElement.parentElement.nextElementSibling;

        listOfNumbers.push(Number(item.textContent))
        numberElement.textContent = listOfNumbers.reduce((partialSum, a) => partialSum + a, 0);
        textElement.textContent = dropDown.getAttribute('data-value');
    })
}

// Adding Event Listener On  Each Dropdown Item In Passenger Component And Listens To Click Then Checks If There Is Dropdown Item With
// Attribute Of data-active="true" Then Removes Attribute From It And Sets data-Value Of Dropdown To Clicked Items TextContent And
// Sets Text Content OF Input In Component To Clicked Items TextContent Again And Sets Attritube Of Clicked item To 'true' (data-active)
// And Calls setValueOfPassangerInput Function
function mmd(dropdown ,items, passengerNum) {
    const activeButtons = document.querySelectorAll(dropdown);

    activeButtons.forEach(itemsa => itemsa.removeAttribute('data-active'));
    items.parentElement.parentElement.parentElement.setAttribute('data-value', items.textContent);
    items.parentElement.parentElement.previousElementSibling.firstElementChild.textContent = items.textContent
    items.setAttribute('data-active', 'true');
    setValueOfPassangerInput(document.querySelectorAll(`.passenger-number-${passengerNum}`))
}

// Adding Event Listener Of Click To Each Popular Citys Button And..
popularCitysBtn.forEach(item => {
    item.addEventListener('click', () => {
        // Creating Elements
        const div = document.createElement('div');
        const iconHolder = document.createElement('span');
        const icon = document.createElement('i');
        const brand = document.createElement('span');
        const name = document.createElement('h6');
        const component = item.parentElement.parentElement.previousElementSibling;
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
        if (component.lastElementChild.classList.contains('selected-location')) {component.lastElementChild.replaceWith(div)}
        else {component.appendChild(div)}

        // Adding Class Of Focused To Component That Prevents Bug
        component.classList.add('focused');
    })
})

// Added Event Listener Of Click To Components That Contain Input Date That Focuses To Input And Adds Class Of 'focused' To It
// And Adds Event Listener Of 'blur' That Checks If Inputs Value Is Not Empty Then Removes 'focused' Class
dateComponent.forEach(item => {
    item.addEventListener('click', () => item.lastElementChild.focus())
    item.lastElementChild.addEventListener('focus', () => item.classList.add('focused'))
    item.lastElementChild.addEventListener('blur', () => {
        if (item.lastElementChild.value !== "") {item.classList.remove('focused')}
    })
})

// Adding Event Listener Of Click To Each Switch Buttons That Gets Clone Of Item Of 'selected-location' In Component Then Replaces The Orginals
// With Clones And Adds Class Name Of animation To Switch Button And On Event Of 'animationend' (Its When Animation Ends) Removes It
switchBtn.forEach(item => {
    item.addEventListener('click', () => {
        const rightSideComponentContentToChange = item.nextElementSibling.firstElementChild.firstElementChild.lastElementChild;
        const leftSideComponentContentToChange = item.previousElementSibling.firstElementChild.firstElementChild.lastElementChild;
        const cloneOfRightSide = rightSideComponentContentToChange.cloneNode(true);
        const cloneOfLeftSide = leftSideComponentContentToChange.cloneNode(true);

        rightSideComponentContentToChange.replaceWith(cloneOfLeftSide)
        leftSideComponentContentToChange.replaceWith(cloneOfRightSide)

        item.classList.add('animation');
        item.addEventListener('animationend', () => {item.classList.remove('animation')})
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

// Adding Event Listener On Each Passenger Numbers Component That Listens To Click And Toggles Class Of show To Component And Dropdown menu
passangerComponent.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show')
        item.nextElementSibling.classList.toggle('show')
    })
})

oneWayPassengerDropdownItems.forEach(item => item.addEventListener('click', () => mmd('.one-way-passenger-dropdown .dropdown-item[data-active="true"]', item, 1)))
twoWayPassengerDropdownItems.forEach(item => item.addEventListener('click', () => mmd('.two-way-passenger-dropdown .dropdown-item[data-active="true"]', item, 2)))
threeWayPassengerDropdownItems.forEach(item => item.addEventListener('click', () => mmd('.three-way-passenger-dropdown .dropdown-item[data-active="true"]', item, 3)))

// Adding Event Listener On Click Of Each Minus And Plus Button That Calls setValueOfPassangerInput Function
minusAndPlusButtons1.forEach(item => item.addEventListener('click', () => setValueOfPassangerInput(document.querySelectorAll('.passenger-number-1'))))
minusAndPlusButtons2.forEach(item => item.addEventListener('click', () => setValueOfPassangerInput(document.querySelectorAll('.passenger-number-2'))))
minusAndPlusButtons3.forEach(item => item.addEventListener('click', () => setValueOfPassangerInput(document.querySelectorAll('.passenger-number-3'))))

// Adding Event Listener On Each IntractiveInoutComponent(modal) That Listens To Click And Focuses To Last Child Of It
// Then Adds Event Listener On Focus To Last Elements Which Is Input And Adds Class Of 'focused' To Clicked Component
// And On Blur Of It Removes Added Class If Value Of The Input Is ""
intractiveInputComponentModal.forEach(item => {
    item.addEventListener('click', () => item.lastElementChild.focus())
    item.lastElementChild.addEventListener('focus', () => item.classList.add('focused'))
    item.lastElementChild.addEventListener('blur', () => {if (item.lastElementChild.value === "") {item.classList.remove('focused')}})
})