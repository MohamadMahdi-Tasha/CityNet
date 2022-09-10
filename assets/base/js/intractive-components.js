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
const intractiveInputComponentRoom = document.querySelectorAll('.intractive-input-component.room');
const intractiveInputComponentRoomDropdownMenu = document.querySelectorAll('.intractive-input-component.room ~ .dropdown-menu');
const roomItem2 = document.getElementById('room-item-2');
const roomItem3 = document.getElementById('room-item-3');
const roomItem4 = document.getElementById('room-item-4');
const addRoomBtn = document.querySelectorAll('.add-room-btn');
const coniformBtn = document.querySelectorAll('.coniform-btn');
const removeRoomBtn = document.querySelectorAll('.remove-room-btn');
const kidActionsHolder = document.querySelectorAll('.kid-actions-holder > button');
const adultActionsHolder = document.querySelectorAll('.adult-actions-holder > button');
const disabledSubmitBtn = document.querySelectorAll('.submit-btn.disable');
const dropdownComponents = document.querySelectorAll('.intractive-input-component.dropdown-comp');
const telInputs = document.querySelectorAll('input[type="tel"]');

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

// Adding Event Listener On Each IntractiveInputComponent(Room) That Listens To Click And Toggles 'Show' ClassName In DropDown Init.
intractiveInputComponentRoom.forEach(item => item.addEventListener('click', () => item.nextElementSibling.classList.toggle('show')))

// Adding Event Listener Of Click On Each DropDown Of Init Room Component That Sets TextContent Of Inner Text OF Component To Title Of Drop Down
intractiveInputComponentRoomDropdownMenu.forEach(item => item.addEventListener('click', () => {
    const intractiveInputComponentInnerText = item.previousElementSibling.lastElementChild;
    const intractivInputComponentInnerTextToCopy = item.firstElementChild.firstElementChild;

    intractiveInputComponentInnerText.textContent = intractivInputComponentInnerTextToCopy.textContent
}))

// Adding Event Listener On Each Add Room Btn Which Listens To Click And For Example If roomItem2 ClassList Includes
// 'd-none' Then Remove It And Set Number To Show To 2 And So On, Then Set TexContent Of Room Number Element Which Is Span IN Title OF Dropdown To 'num' Variable
addRoomBtn.forEach(item => {
    let num;
    item.addEventListener('click', () =>  {
        const item2 = item.parentElement.previousElementSibling.firstElementChild.nextElementSibling
        const item3 = item.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling
        const item4 = item.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
        const roomNumberElement = item.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild

        if (item2.classList.contains('d-none')) {item2.classList.remove('d-none');num = "2"}
        else if (item3.classList.contains('d-none')) {item3.classList.remove('d-none');num = "3"}
        else if (item4.classList.contains('d-none')) {item4.classList.remove('d-none');num = "4"}

        roomNumberElement.textContent = num;
    })
})

// A Function That Creates An Array Then Gets All Given Element By QuerySelectoAll Then Converts TextContent OF Them To Number From String
// Then Pushes them To Created Array Then Returns Sum Of Them By Doing Array.Reduce
function arraySum(elements) {
    let array = [];
    document.querySelectorAll(elements).forEach(item => array.push(Number(item.textContent)))
    return array.reduce((partialSum, a) => partialSum + a, 0);
}

// Adding Event Listener On Each Button In Kid Actions Holder That Shows Sum Of Them In Given Element
kidActionsHolder.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild;
        text.textContent = arraySum('.kid-number-hotel')
    })
})

// Adding Event Listener On Each Button In adultActionsHolder That Shows Sum Of Them In Given Element
adultActionsHolder.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling;
        text.textContent = arraySum('.adult-number-hotel')
    })
})

// Adding Event Listener On Conform Button Which Removes 'show' Class From Dropdown
coniformBtn.forEach(item => {item.addEventListener('click', () => item.parentElement.parentElement.classList.remove('show'))})

// Adding Event Listener On Remove Button Which Removes 1 From Number Of Room In Title Then Adds Class Of 'd-none' To Created Room Then Removes
// Class Of 'show' From DropDown
removeRoomBtn.forEach(item => {
    const roomNumberElement = item.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild
    item.addEventListener('click', () => {
        roomNumberElement.textContent = (Number(roomNumberElement.textContent) - 1);
        item.parentElement.parentElement.classList.add('d-none')
        intractiveInputComponentRoom.forEach(item => item.addEventListener('click', () => item.nextElementSibling.classList.toggle('show')))
    })
})

// Getting All Input In Intractive-Input-Components That They Are Disabled And Adding TabIndex Of -1 To Make Them Unfocusable That
// Prevents From Bug
document.querySelectorAll('.intractive-input-component.disabled input').forEach(item => item.setAttribute('tabindex', '-1'))

// Adding Event Listner On Each Disabled Submit Buttons That Listenes To Click And Adds Class Of  'animate' To It And
// Removes It On 'AnimationEnd' Event (When Animation Is End)
disabledSubmitBtn.forEach(item => {
    item.addEventListener('click', () => {item.classList.add('animate')})
    item.addEventListener('animationend', () => {item.classList.remove('animate')})
})

// Adding Event Listener On Each Dropdown Component That Listens To Click And Sets 'data-value' Attr Of Component To
// Selected Dropdown That Appears And Sets Text Content Of Last Child Of Component To Text Content Of Clicked Item
dropdownComponents.forEach(item => {
    item.nextElementSibling.addEventListener('click', (event) => {
        const selectedElement = event.target;
        const elementToChange = item.lastElementChild;

        item.setAttribute('data-value', selectedElement.textContent);
        elementToChange.textContent = selectedElement.textContent;
    })
})

// For Each Input With Type Of Tel Which Stand For Telephone Number That Sets Max And Min Character Length
telInputs.forEach(item => {
    item.setAttribute('maxlength', '10');
    item.setAttribute('minlength', '10');
})