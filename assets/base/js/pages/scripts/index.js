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
    if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(startCityIntractiveComponents)}
    if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(endCityIntractiveComponents, 'لطفا شهر مقصد را انتخواب کنید')}
    if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(endCityIntractiveComponents)}
    if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') === 'null') {setErrorOnComponent(startDateIntractiveComponents, 'لطفا تاریخ پرواز را مشخص کنید')}
    if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') !== 'null') {setSuccsesOnComponent(startDateIntractiveComponents)}
})