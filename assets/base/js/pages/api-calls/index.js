// Variables
const searchForTicketButton = document.getElementById('search-for-ticket-button');
const startCityIntractiveComponents = document.getElementById('start-city-intractive-components')
const endCityIntractiveComponents = document.getElementById('end-city-intractive-components')
const startDateIntractiveComponents = document.getElementById('start-date-intractive-components')
const passangerCountIntractiveComponents = document.getElementById('passanger-count-intractive-components')
const todaysDate = new Date()

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

// Adding Event Listener Of Click To Search Button For Ticket That ...
searchForTicketButton.addEventListener('click', () => {
    // Variables
    const startCityIntractiveComponentsInnerButton = startCityIntractiveComponents.firstElementChild.firstElementChild
    const endCityIntractiveComponentsInnerButton = endCityIntractiveComponents.firstElementChild.firstElementChild
    const startDateIntractiveComponentsInnerButton = startDateIntractiveComponents.firstElementChild
    const passangerCountIntractiveComponentsInnerButton = passangerCountIntractiveComponents.firstElementChild.firstElementChild

    // Handling Errors Their And Success
    if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(startCityIntractiveComponents, 'لطفا شهر مبدا را انتخواب کنید')}
    else if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(startCityIntractiveComponents)}

    if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(endCityIntractiveComponents, 'لطفا شهر مقصد را انتخواب کنید')}
    else if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(endCityIntractiveComponents)}

    if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') === 'null') {setErrorOnComponent(startDateIntractiveComponents, 'لطفا تاریخ پرواز را مشخص کنید')}
    else if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') !== 'null') {setSuccsesOnComponent(startDateIntractiveComponents)}

    if (new Date(todaysDate) > new Date(startDateIntractiveComponentsInnerButton.getAttribute('data-date'))) {setErrorOnComponent(startDateIntractiveComponents, 'لطفا تاریخ پرواز را منطقی مشخص کنید')}
    else if (new Date(todaysDate) < new Date(startDateIntractiveComponentsInnerButton.getAttribute('data-date'))) {setSuccsesOnComponent(startDateIntractiveComponents)}

    if (passangerCountIntractiveComponentsInnerButton.getAttribute('data-passenger-count') === '0') {setErrorOnComponent(passangerCountIntractiveComponents, 'تعداد مسافرین صفر نمیتواند باشد')}
    else if (passangerCountIntractiveComponentsInnerButton.getAttribute('data-passenger-count') !== '0') {setSuccsesOnComponent(passangerCountIntractiveComponents)}

    // If There Is No Error Then ...
    if (document.querySelectorAll('.intractive-component.errored').length === 0) {
        // Variables
        const dataDate = startDateIntractiveComponentsInnerButton.getAttribute('data-date');
        const adultCount = passangerCountIntractiveComponents.firstElementChild.firstElementChild.getAttribute('data-adult-count');
        const childCount = passangerCountIntractiveComponents.firstElementChild.firstElementChild.getAttribute('data-child-count');
        const infantCount = passangerCountIntractiveComponents.firstElementChild.firstElementChild.getAttribute('data-infant-count');
        const startCity = startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city');
        const endCity = endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city');
        const newLinkElement = document.createElement('a');
        const startCityId = returnCityIdBasedOnAbbr(startCity);
        const endCityId = returnCityIdBasedOnAbbr(endCity);

        const informationToSearchInTickets = {
            date: dataDate,
            adult_count: adultCount,
            child_count: childCount,
            infant_count: infantCount,
            from: startCityId,
            to: endCityId
        }

        // Setting 'informationToSearchInTickets' Object In Local Storage As An Item
        localStorage.setItem('information-to-search-in-tickets-page', JSON.stringify(informationToSearchInTickets));

        // Setting Link To Created Anchor Tag
        newLinkElement.setAttribute('href', 'tickets.html');

        // Clicking On Created Anchor Tag To Go To Another Page
        newLinkElement.click()
    }
})