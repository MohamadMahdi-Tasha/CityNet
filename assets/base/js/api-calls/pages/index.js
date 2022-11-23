// Variables
const searchForTicketButton = document.getElementById('search-for-ticket-button');
const startCityIntractiveComponents = document.getElementById('start-city-intractive-components')
const endCityIntractiveComponents = document.getElementById('end-city-intractive-components')
const startDateIntractiveComponents = document.getElementById('start-date-intractive-components')
const passangerCountIntractiveComponents = document.getElementById('passanger-count-intractive-components')
const todaysDate = new Date()

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

    if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city')) {
        setErrorOnComponent(startCityIntractiveComponents, 'شهر مبدا و مقصد یکی نمیتواند باشد')
        setErrorOnComponent(endCityIntractiveComponents, 'شهر مبدا و مقصد یکی نمیتواند باشد')
    }

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
        const startCityId = returnCityIdBasedOnAbbr(startCity);
        const endCityId = returnCityIdBasedOnAbbr(endCity);

        const informationToSearchInTickets = {
            date: dataDate,
            adult_count: adultCount,
            child_count: childCount,
            infant_count: infantCount,
            from: startCityId,
            to: endCityId,
            fromCityAbbrevation: startCity,
            toCityAbbrevation: endCity
        }

        // Setting 'informationToSearchInTickets' Object In Local Storage As An Item
        localStorage.setItem('information-to-search-in-tickets-page', JSON.stringify(informationToSearchInTickets));

        // Opening New Page
        window.open('tickets.html', '_self')
    }
})