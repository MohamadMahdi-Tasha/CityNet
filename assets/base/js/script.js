// Variables
const dropDownToggler = document.querySelectorAll('.my-drop-down-holder > .my-drop-down-toggler');
const togglers = document.querySelectorAll('.toggler');
const currencyChanger = document.querySelectorAll('.currency-changer');
const htmlElement = document.querySelector('html');
const intractiveButtonsBtn = document.querySelectorAll('.intractive-buttons-btn');
const intractiveComponents = document.querySelectorAll('.intractive-component:not(.calender, .input)');
const cityComponentDropDownButton = document.querySelectorAll('.city-component-drop-down-button');
const switchButton = document.querySelectorAll('.switch-button');
const calenderComponents = document.querySelectorAll('.intractive-component.calender');
const plusMinusButton = document.querySelectorAll('.plus-minus-button');
const passengerClassSelectButton = document.querySelectorAll('.passenger-class-select-button');
const inputComponents = document.querySelectorAll('.intractive-component.input');
const persianName = document.getElementById('currency-header-per');
const englishName = document.getElementById('currency-header-eng');
const myCollapseToggler = document.querySelectorAll('.my-collapse-toggler');
const ticketPageAsideMobileTopSideToggle = document.querySelector('.ticket-page-aside-mobile-top-side-toggle');
const ticketPageAside = document.querySelector('.ticket-page-aside');
const ticketComponentBottomAccardionToggler = document.querySelectorAll('.ticket-component-bottom-accardion-toggler');

// a Function that takes persian name of city and returns abbreviation Text of it
function persianNameToAbbreviation(name) {
    let nameToReturn;

    switch (name) {
        case "تهران" :
            nameToReturn = "THR";
            break;
        case "کیش" :
            nameToReturn = "KIH";
            break;
        case "استانبول" :
            nameToReturn = "IST";
            break;
        case "دبی" :
            nameToReturn = "DXB";
            break;
        case "مشهد" :
            nameToReturn = "MHD";
            break;
        case "اهواز" :
            nameToReturn = "AWZ";
            break;
        case "انکارا" :
            nameToReturn = "ESB";
            break;
        case "لندن" :
            nameToReturn = "LHR";
            break;
        case "تبریز" :
            nameToReturn = "TBZ";
            break;
        case "قشم" :
            nameToReturn = "GSM";
            break;
        case "تورنتو" :
            nameToReturn = "YYZ";
            break;
        case "ایروان" :
            nameToReturn = "EVN";
            break;
        case "بندر عباس" :
            nameToReturn = "BND";
            break;
        case "شیراز" :
            nameToReturn = "SYZ";
            break;
        case "مسقط" :
            nameToReturn = "MCT";
            break;
        case "پکن" :
            nameToReturn = "PEK";
            break;
        case "رشت" :
            nameToReturn = "RAS";
            break;
        case "اصفهان" :
            nameToReturn = "IFN";
            break;
        case "نجف" :
            nameToReturn = "NJF";
            break;
        case "باکو" :
            nameToReturn = "GYD";
            break;
    }

    return nameToReturn;
}

// a Function that takes abbreviation name of city and returns persian Text of it
function abbrevationToPersianName(name) {
    let nameToReturn;

    switch (name) {
        case "THR" :nameToReturn = "تهران,ایران(Tehran)";break;
        case "KIH" :nameToReturn = "کیش,ایران(Kish Island)";break;
        case "IST" :nameToReturn = "استانبول,ترکیه(Istanbul)";break;
        case "DXB" :nameToReturn = "دبی,عمارات متحده(Dubai)";break;
        case "MHD" :nameToReturn = "مشهد,ایران(Mashhad)";break;
        case "AWZ" :nameToReturn = "اهواز,ایران(Ahvaz)";break;
        case "ESB" :nameToReturn = "انکارا,ترکیه(Ankara)";break;
        case "LHR" :nameToReturn = "لندن,انگلستان(London)";break;
        case "TBZ" :nameToReturn = "تبریز,ایران(Tabriz)";break;
        case "GSM" :nameToReturn = "قشم,ایران(Qeshm)";break;
        case "YYZ" :nameToReturn = "تورنتو,کانادا(Torento)";break;
        case "EVN" :nameToReturn = "ایروان,ارمنستان(Yerevan)";break;
        case "BND" :nameToReturn = "بندر عباس,ایران(Bandar-e-abbas)";break;
        case "SYZ" :nameToReturn = "شیراز,ایران(Shiraz)";break;
        case "MCT" :nameToReturn = "مسقط,قطر(Muscat)";break;
        case "PEK" :nameToReturn = "پکن,چین(Beijing)";break;
        case "RAS" :nameToReturn = "رشت,ایران(Rasht)";break;
        case "IFN" :nameToReturn = "اصفهان,ایران(Isfahan)";break;
        case "NJF" :nameToReturn = "نجف,عراق(Najaf)";break;
        case "GYD" :nameToReturn = "باکو,اذربایجان(Baku)";break;
    }

    return nameToReturn;
}

// a Function That Gets 'selected-currency' From Local Storage And Checks Shows The Name Of Selected Currncys In English And Persian
function showCurrency() {
    const selectedCurrency = localStorage.getItem('selected-currency');
    let persianNameToShow;

    switch (selectedCurrency) {
        case "IRR":persianNameToShow = "ریال";break;
        case "USD":persianNameToShow = "دلار";break;
        case "EUR":persianNameToShow = "یورو";break;
        case "TRY":persianNameToShow = "لیر";break;
        case "IQD":persianNameToShow = "دینار";break;
    }

    englishName.textContent = selectedCurrency;
    persianName.textContent = persianNameToShow;
}

// Adding Event Listener On Each Drop Down Toggler That Toggles Attribute Of 'data-opened' To Clicked Items Parent Element
dropDownToggler.forEach(item => item.addEventListener('click', () => {
    const openedDropDown = document.querySelector('.my-drop-down-holder[data-opened]');
    item.parentElement.toggleAttribute('data-opened');
    // openedDropDown.removeAttribute('data-opened')
}))

// Adding Event Listener On Each Item With Class Of 'toggler' Item That Listens To CLick And Gets Target Element Of It By Its Attribute
// And Toggles Attribute Of 'data-opened' To It
togglers.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        const targetElement = document.getElementById(target);

        targetElement.toggleAttribute('data-opened');
    })
})

// Adding Event Listener On Each Item With Class Of 'currency-changer' That Listens To Click And Sets Attribute Of 'data-currency' In Html Element
// To Value Of 'data-item-currency' Attribute Of Clicked Item
currencyChanger.forEach(item => {
    item.addEventListener('click', () => {
        const itemsCurrency = item.getAttribute('data-item-currency');

        htmlElement.setAttribute('data-currency', itemsCurrency);
        localStorage.setItem('selected-currency', itemsCurrency);
        item.parentElement.parentElement.removeAttribute('data-opened')
        showCurrency();
    })
})

// Adding Event Listener On Each Interactive Button In Top Side Of Main Content In Second Section (Home Page) That Listens To Click.
// It Gets Bounding Rect Of Clicked Items Parent Element And Items Itself And Then Counts Right Position Of Child And Parent And Reverses It
// Next It Removes 'active' Attribute From intractive Button That Has It And Then Sets It True For Clicked Item And Then Sets Right Property
// Of Border In Background.
intractiveButtonsBtn.forEach(item => {
    item.addEventListener('click', () => {
        const bgBorder = item.parentElement.firstElementChild;
        const parentPos = item.parentElement.getBoundingClientRect()
        const childPos = item.getBoundingClientRect()
        const activeButton = document.querySelector('.intractive-buttons-btn[active]');
        const rightToSet = (childPos.right - parentPos.right) / -1

        activeButton.removeAttribute('active');
        item.setAttribute('active', 'true');
        bgBorder.style.right = `${rightToSet}px`
    })
})

// Adding Event Listener On Each intractiveComponent  That Listens To CLick And toggles Class Of 'focused' To Clicked Item
intractiveComponents.forEach(item => item.addEventListener('click', () => item.classList.toggle('focused')))

// Adding Event Listener On Each City Select Button Which Listens To Click
cityComponentDropDownButton.forEach(item => {
    item.addEventListener('click', () => {
        // Variables
        const parentIntractiveComponent = item.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
        const contentsHolder = document.createElement('div');
        const abbrevationH6 = document.createElement('h6');
        const abbrevationH6Icon = document.createElement('i');
        const abbrevationH6title = document.createElement('span');
        const titleH6 = document.createElement('h6');

        // Setting Text Contents Of Created Elements
        abbrevationH6title.textContent = persianNameToAbbreviation(item.textContent);
        titleH6.textContent = abbrevationToPersianName(persianNameToAbbreviation(item.textContent));

        // Setting Class Names Of Created Elements
        contentsHolder.className  = 'd-flex selected-city align-items-center'
        abbrevationH6.className  = 'd-flex align-items-center text-white p-1 rounded-1 mb-0 ms-2 font-small'
        titleH6.className  = 'text-black-lighten3 mb-0 font-small'

        // If Selected City Is Tehran Or Isfahan Then Set Icon To A House And Set Bg Color Of Its Holder To Pink Otherwise Show
        // Airplane Icon And Bg Of Blue
        if (persianNameToAbbreviation(item.textContent) === "THR" || persianNameToAbbreviation(item.textContent) === "IFN") {
            abbrevationH6Icon.className = 'bi bi-house ms-1';
            abbrevationH6.classList.add('bg-pink');
        } else {
            abbrevationH6Icon.className = 'bi bi-airplane ms-1';
            abbrevationH6.classList.add('bg-info-darken1');
        }

        // Appending Parents To Their Children
        contentsHolder.appendChild(abbrevationH6)
        abbrevationH6.appendChild(abbrevationH6Icon)
        abbrevationH6.appendChild(abbrevationH6title)
        contentsHolder.appendChild(titleH6)

        // If A City Is not Selected Append Content Holder To Component Otherwise Replace It With Selected City
        if (!parentIntractiveComponent.lastElementChild.classList.contains('selected-city')) {
            parentIntractiveComponent.appendChild(contentsHolder)
        } else {
            parentIntractiveComponent.lastElementChild.remove()
            parentIntractiveComponent.appendChild(contentsHolder)
        }

        // Clicking Component To Close DropDown
        parentIntractiveComponent.click();

        // TO Prevent From Text Coming From Top To Bottom
        parentIntractiveComponent.classList.add('will-not-close');

        // Setting Selected Data
        parentIntractiveComponent.setAttribute('data-selected-city', persianNameToAbbreviation(item.textContent))
    })
})

// Adding Event Listener On Each Switch Button That Listens To CLick And Gets Previous And Next Sibling Of Clicked Item
// Then Checks IF They Exist And If They Are Then Gets Clone Of Them And Replaces Cloned Elements With Orginal Ones And Rotates
// Clicked Item
switchButton.forEach(item => {
    let clicks = 0;
    item.addEventListener('click', () => {
        const startCitysSelectedCity = item.previousElementSibling.querySelector('.selected-city')
        const endCitysSelectedCity = item.nextElementSibling.querySelector('.selected-city')

        if (startCitysSelectedCity !== null && endCitysSelectedCity !== null) {
            const startCitysSelectedCityCopy = startCitysSelectedCity.cloneNode(true)
            const endCitysSelectedCityCopy = endCitysSelectedCity.cloneNode(true)

            clicks ++;
            if (window.innerWidth >= 991) {
                if (clicks % 2 !== 0) {
                    item.style.transform = 'translateX(-50%) rotateY(180deg)'
                } else {
                    item.style.transform = 'translateX(-50%) rotateY(0)'
                }
            } else {
                if (clicks % 2 !== 0) {
                    item.style.transform = 'translateY(-70%) rotateY(180deg)'
                } else {
                    item.style.transform = 'translateY(-70%) rotateY(0)'
                }
            }

            endCitysSelectedCity.replaceWith(startCitysSelectedCityCopy)
            startCitysSelectedCity.replaceWith(endCitysSelectedCityCopy)

        }
    })
})

// Adding Event Listener Of Click On Each Calender Component That Listenes To Click And
// Focuses To Input In
calenderComponents.forEach(item => {
    item.addEventListener('click', () => {
        const innerInput = item.nextElementSibling.querySelector('.pdp-input');

        innerInput.addEventListener('focus', () => item.classList.add('focused'))
        innerInput.addEventListener('blur', () => item.classList.remove('focused'))

        innerInput.focus()
    })
})

// Adding Event Listener On Each Plus And Minus Buttons That Listens TO Click And Sets Total Number Of Passengers And
// Adds Or Removes On From Label Of Clicked Button Which Is Number
plusMinusButton.forEach(item => {
    item.addEventListener('click', () => {
        const componentsInnerCountElement = item.parentElement.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild.firstElementChild
        const adultCountElement = item.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.nextElementSibling
        const kidCountElement = item.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.firstElementChild.nextElementSibling
        const newBornCountElement = item.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.nextElementSibling
        const totalPassengersCount = Number(adultCountElement.textContent) + Number(kidCountElement.textContent) + Number(newBornCountElement.textContent)

        componentsInnerCountElement.textContent = totalPassengersCount;
        componentsInnerCountElement.parentElement.parentElement.parentElement.setAttribute('data-passenger-count', totalPassengersCount);

        if (item.textContent === "+") {
            const numberElement = item.nextElementSibling;
            let numberToShow = Number(numberElement.textContent);

            if (numberToShow < 9) {numberToShow ++;}
            numberElement.textContent = numberToShow;
        } else {
            const numberElement = item.previousElementSibling;
            let numberToShow = Number(numberElement.textContent);

            if (item.parentElement.parentElement.classList.contains('adult')) {
                if (numberToShow > 1) {numberToShow --;}
            } else {
                if (numberToShow > 0) {numberToShow --;}
            }

            numberElement.textContent = numberToShow;
        }
    })
})

// Adding Event Listener Of Click On Each passengerClassSelectButton That Sets Attribute Of data-passenger-class In Component TO
// Clicked Buttons Content And Sets Content Of Textes In DropDown And Component To Clicked Item Again Then Removes Class Of 'active'
// From Element That Haves It And Adds It To Clicked Button And Closes Drop Down
passengerClassSelectButton.forEach(item => {
    item.addEventListener('click', () => {
        const counterComponent = item.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling
        const contentToChangeInDropDown = item.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild
        const contentToChangeInComponent = counterComponent.lastElementChild.lastElementChild.lastElementChild
        const activeClassSelectButton = document.querySelector('.passenger-class-select-button.active');

        counterComponent.setAttribute('data-passenger-class', item.textContent)
        contentToChangeInDropDown.textContent = item.textContent
        contentToChangeInComponent.textContent = item.textContent
        activeClassSelectButton.classList.remove('active');
        item.classList.add('active');
        contentToChangeInDropDown.parentElement.parentElement.removeAttribute('data-opened')
    })
})

// Adding Event Listener Of CLick On All inputComponents Components That Focuses On Clicked Items Last Child And Adds Event Listener On It For When
// Its Focused Add Class Of 'focused' To Its Parent Element And When Blured(Not Focused) If Input Is Empty Remove The Added Class Name
inputComponents.forEach(item => {
    item.addEventListener('click', () => item.lastElementChild.focus())
    item.lastElementChild.addEventListener('focus', () => item.classList.add('focused'))
    item.lastElementChild.addEventListener('blur', () => {if (item.lastElementChild.value === "") {item.classList.remove('focused')}})
})

// Adding Event Listener On Load Of Page That Checks If selected-currency Exists In Local Storage. If Its Not sets It TO IRR And Calls  showCurrency Function
window.addEventListener('load', () => {
    if (localStorage.getItem('selected-currency') === null) {localStorage.setItem('selected-currency', 'IRR')}
    showCurrency();
})

// Closing Login Modal On Escape Key
window.addEventListener('keydown', (event) => {
    const clickedKey = event.key.toLowerCase()
    if (clickedKey === 'escape') {
        const openModal = document.querySelector('.my-modal-holder[data-opened]:not(#loader-modal):first-of-type');
        openModal.removeAttribute('data-opened');
    }
})

// Adding Event Listener Of Click On Each Collapse Toggler That Toggles Attribute Of 'data-opened' To Its Parent Element
myCollapseToggler.forEach(item =>  item.addEventListener('click', () => item.parentElement.toggleAttribute('data-opened')))

// Setting Slider Range
$( function() {
    $( `.slider-range` ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 0, 24 ],
    });
} );

ticketPageAsideMobileTopSideToggle.addEventListener('mousedown', () => ticketPageAside.classList.toggle('top'))
window.onscroll = () => (window.scrollY !== 0) ? ticketPageAside.classList.add('scrolled') : ticketPageAside.classList.remove('scrolled');

ticketComponentBottomAccardionToggler.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-accardion-target');
        const targetElement = document.getElementById(target);
        const openedAccardionItem = document.querySelector('.ticket-component-bottom-accardion[data-opened]');
        const openedAccardionToggler = document.querySelector('.ticket-component-bottom-accardion-toggler[data-opened]');

        item.toggleAttribute('data-opened');
        targetElement.toggleAttribute('data-opened');
        openedAccardionItem.removeAttribute('data-opened');
        openedAccardionToggler.removeAttribute('data-opened');
    })
})