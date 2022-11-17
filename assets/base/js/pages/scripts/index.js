// Variables
const searchForTicketButton = document.getElementById('search-for-ticket-button');
const startCityIntractiveComponents = document.getElementById('start-city-intractive-components')
const endCityIntractiveComponents = document.getElementById('end-city-intractive-components')
const startDateIntractiveComponents = document.getElementById('start-date-intractive-components')
const passangerCountIntractiveComponents = document.getElementById('start-date-intractive-components')

searchForTicketButton.addEventListener('click', () => {
    const startCityIntractiveComponentsInnerButton = startCityIntractiveComponents.firstElementChild.firstElementChild
    const endCityIntractiveComponentsInnerButton = endCityIntractiveComponents.firstElementChild.firstElementChild
    const startDateIntractiveComponentsInnerButton = startDateIntractiveComponents.firstElementChild

    if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(startCityIntractiveComponents, 'لطفا شهر مبدا را انتخواب کنید')}
    else if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(startCityIntractiveComponents)}
    if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(endCityIntractiveComponents, 'لطفا شهر مقصد را انتخواب کنید')}
    else if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(endCityIntractiveComponents)}
    if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') === 'null') {setErrorOnComponent(startDateIntractiveComponents, 'لطفا تاریخ پرواز را مشخص کنید')}
    else if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') !== 'null') {setSuccsesOnComponent(startDateIntractiveComponents)}

    if (document.querySelectorAll('.intractive-component.errored').length === 0) {
        const dataDate = startDateIntractiveComponentsInnerButton.getAttribute('data-date');
        const adultCount = passangerCountIntractiveComponents.firstElementChild.firstElementChild.getAttribute('data-adult-count');
        const childCount = passangerCountIntractiveComponents.firstElementChild.firstElementChild.getAttribute('data-child-count');
        const infantCount = passangerCountIntractiveComponents.firstElementChild.firstElementChild.getAttribute('data-infant-count');
        const startCity = startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city');
        const endCity = endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city');
        const newLinkElement = document.createElement('a');
        const informationToSearchInTickets = {
            date: dataDate,
            adult_count: adultCount,
            child_count: childCount,
            infant_count: infantCount,
            from: startCity,
            to: endCity
        }

        localStorage.setItem('informationToSearchInTickets', JSON.stringify(informationToSearchInTickets));
        newLinkElement.setAttribute('a', 'tickets.html');
        newLinkElement.click()
    }
})