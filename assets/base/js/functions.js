// A Function That Returns Abbreviation From English Name Of City
function abbrevationFromEnglishNameOfCity(city) {
    let abbrevationToReturn;

    switch (city) {
        case 'Tehran': abbrevationToReturn = 'THR';break;
        case 'Kish Island': abbrevationToReturn = 'KIH';break;
        case 'Dubai': abbrevationToReturn = 'DXB';break;
        case 'Mashhad': abbrevationToReturn = 'MHD';break;
        case 'Ahwaz': abbrevationToReturn = 'AWZ';break;
        case 'Tabriz': abbrevationToReturn = 'TBZ';break;
        case 'Qeshm Island': abbrevationToReturn = 'GSM';break;
        case 'Shiraz': abbrevationToReturn = 'SYZ';break;
        case 'Muscat': abbrevationToReturn = 'MCT';break;
        case 'Rasht': abbrevationToReturn = 'RAS';break;
        case 'Isfahan': abbrevationToReturn = 'IFN';break;
        case 'Najaf': abbrevationToReturn = 'NJF';break;
    }

    return abbrevationToReturn;
}

// A Function That Returns Persian Name From Abbreviation Of City
function persianNameFromAbbrevation(abbrevation) {
    let persianNameToReturn;

    switch (abbrevation) {
        case 'THR': persianNameToReturn = 'تهران';break;
        case 'KIH': persianNameToReturn = 'کیش';break;
        case 'DXB': persianNameToReturn = 'دوبی';break;
        case 'MHD': persianNameToReturn = 'مشهد';break;
        case 'AWZ': persianNameToReturn = 'اهواز';break;
        case 'TBZ': persianNameToReturn = 'تبریز';break;
        case 'GSM': persianNameToReturn = 'قشم';break;
        case 'SYZ': persianNameToReturn = 'شیراز';break;
        case 'MCT': persianNameToReturn = 'مسقط';break;
        case 'RAS': persianNameToReturn = 'رشت';break;
        case 'IFN': persianNameToReturn = 'اصفهان';break;
        case 'NJF': persianNameToReturn = 'نجف';break;
    }

    return persianNameToReturn;
}

// A Function That Returns Hour And Minute Duration From Start And EndTime Given In Parameter
function getRouteDuration(startTime, EndTime) {
    const startTimeHour = Number(startTime.slice(0, 2));
    const startTimeMinute = Number(startTime.slice(3, 5));
    const endTimeHour = Number(EndTime.slice(0, 2));
    const endTimeMinute = Number(EndTime.slice(3, 5));

    let hour;
    let minute;

    (startTimeHour > endTimeHour) ? hour = startTimeHour - endTimeHour : hour = endTimeHour - startTimeHour;
    (startTimeMinute > endTimeMinute) ? minute = startTimeMinute - endTimeMinute : minute = endTimeMinute - startTimeMinute;

    return {hour, minute}
}

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

// A Function That Returns Id Of City From Given Abbreviation In Parameter
function returnCityIdBasedOnAbbr(abbrevation) {
    let idToReturn;

    switch (abbrevation) {
        case 'THR':idToReturn = '82';break;
        case 'KIH':idToReturn = '87';break;
        case 'DXD':idToReturn = '73';break;
        case 'MHD':idToReturn = '81';break;
        case 'AWZ':idToReturn = '90';break;
        case 'TBZ':idToReturn = '85';break;
        case 'GSM':idToReturn = '98';break;
        case 'SYZ':idToReturn = '84';break;
        case 'MCT':idToReturn = '75';break;
        case 'RAS':idToReturn = '100';break;
        case 'IFN':idToReturn = '83';break;
        case 'NJF':idToReturn = '66';break;
    }

    return idToReturn;
}

// A Function That Takes Component And Checks Type Of Component Then Return Component Inner Div Or Button And Error Element Of It As Object
function returnComponentElementsBasedOnComponentType(component) {
    const componentType = component.getAttribute('type');
    let componentElement;
    let componentErrorElement;

    if (componentType === 'city') {
        componentElement = component.firstElementChild.firstElementChild;
        componentErrorElement = component.firstElementChild.nextElementSibling.firstElementChild;
    } else if (componentType === 'calender') {
        componentElement = component.firstElementChild
        componentErrorElement = component.lastElementChild.firstElementChild
    } else if (componentType === 'passenger-count') {
        componentElement = component.firstElementChild.firstElementChild;
        componentErrorElement = component.firstElementChild.lastElementChild
    } else if (componentType === 'input')  {
        componentElement = component.firstElementChild;
        componentErrorElement = component.firstElementChild.nextElementSibling
    }

    return {componentElement, componentErrorElement};
}

// A Function That Takes Component And Error Text As Parameter And Adds Class Of 'errored' To 'componentElement' Element Returned From
// 'returnComponentElementsBasedOnComponentType' Function On Component In Parameter. Then Sets Text Content Of 'componentErrorElement' Element Returned From
// 'returnComponentElementsBasedOnComponentType' Function On Component Again To 'errorText' From Parameter
function setErrorOnComponent(component, errorText) {
    const returnComponentElementsBasedOnComponentTypeOnComponent = returnComponentElementsBasedOnComponentType(component);

    returnComponentElementsBasedOnComponentTypeOnComponent.componentElement.classList.add('errored');
    returnComponentElementsBasedOnComponentTypeOnComponent.componentErrorElement.textContent = errorText
}

// A Function That Takes Component And Error Text As Parameter And Removes Class Of 'errored' From 'componentElement' Element Returned From
// 'returnComponentElementsBasedOnComponentType' Function On Component In Parameter. Then Sets Text Content Of 'componentErrorElement' Element Returned From
// 'returnComponentElementsBasedOnComponentType' Function On Component Again To ''
function setSuccsesOnComponent(component) {
    const returnComponentElementsBasedOnComponentTypeOnComponent = returnComponentElementsBasedOnComponentType(component);

    returnComponentElementsBasedOnComponentTypeOnComponent.componentElement.classList.remove('errored');
    returnComponentElementsBasedOnComponentTypeOnComponent.componentErrorElement.textContent = ''
}

// A Function That Takes English Abbreviation Of Currency And Returns Persian Name Of It
function persianNameByEnAbbrevationCurrency(englishAbrevation) {
    let stringToReturn;

    switch (englishAbrevation) {
        case "IRR":
            stringToReturn = "ریال";
            break;
        case "USD":
            stringToReturn = "دلار";
            break;
        case "EUR":
            stringToReturn = "یورو";
            break;
        case "TRY":
            stringToReturn = "لیر ترکیه";
            break;
        case "IQD":stringToReturn = "دینار عراق";break;
    }

    return stringToReturn;
}