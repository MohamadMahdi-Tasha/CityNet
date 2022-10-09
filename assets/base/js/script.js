// Variables
const dropDownToggler = document.querySelectorAll('.my-drop-down-holder > .my-drop-down-toggler');
const togglers = document.querySelectorAll('.toggler');
const currencyChanger = document.querySelectorAll('.currency-changer');
const htmlElement = document.querySelector('html');
const intractiveButtonsBtn = document.querySelectorAll('.intractive-buttons-btn');
const intractiveComponents = document.querySelectorAll('.intractive-component');
const cityComponentDropDownButton = document.querySelectorAll('.city-component-drop-down-button');

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

// Adding Event Listener On Each Drop Down Toggler That Toggles Attribute Of 'data-opened' To Clicked Items Parent Element
dropDownToggler.forEach(item => item.addEventListener('click', () => item.parentElement.toggleAttribute('data-opened')))

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