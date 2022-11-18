// Variables
const searchForTicketButton = document.getElementById('search-for-ticket-button');
const startCityIntractiveComponents = document.getElementById('start-city-intractive-components')
const endCityIntractiveComponents = document.getElementById('end-city-intractive-components')
const startDateIntractiveComponents = document.getElementById('start-date-intractive-components')
const passangerCountIntractiveComponents = document.getElementById('passanger-count-intractive-components')

const persianToEnglishNumber = string => string.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
const todaysDatePerisan = new Date().toLocaleDateString('fa-IR',{year:'numeric',month:'2-digit',day:'2-digit',formatMatcher:'basic'});
const todaysDateEnglish = persianToEnglishNumber(todaysDatePerisan)

searchForTicketButton.addEventListener('click', () => {
    const startCityIntractiveComponentsInnerButton = startCityIntractiveComponents.firstElementChild.firstElementChild
    const endCityIntractiveComponentsInnerButton = endCityIntractiveComponents.firstElementChild.firstElementChild
    const startDateIntractiveComponentsInnerButton = startDateIntractiveComponents.firstElementChild
    const passangerCountIntractiveComponentsInnerButton = passangerCountIntractiveComponents.firstElementChild.firstElementChild

    if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(startCityIntractiveComponents, 'لطفا شهر مبدا را انتخواب کنید')}
    else if (startCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(startCityIntractiveComponents)}

    if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') === 'null') {setErrorOnComponent(endCityIntractiveComponents, 'لطفا شهر مقصد را انتخواب کنید')}
    else if (endCityIntractiveComponentsInnerButton.getAttribute('data-selected-city') !== 'null') {setSuccsesOnComponent(endCityIntractiveComponents)}

    if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') === 'null') {setErrorOnComponent(startDateIntractiveComponents, 'لطفا تاریخ پرواز را مشخص کنید')}
    else if (startDateIntractiveComponentsInnerButton.getAttribute('data-date') !== 'null') {setSuccsesOnComponent(startDateIntractiveComponents)}

    if (new Date(todaysDateEnglish) > new Date(startDateIntractiveComponentsInnerButton.getAttribute('data-date'))) {setErrorOnComponent(startDateIntractiveComponents, 'لطفا تاریخ پرواز را منطقی مشخص کنید')}
    else if (new Date(todaysDateEnglish) < new Date(startDateIntractiveComponentsInnerButton.getAttribute('data-date'))) {setSuccsesOnComponent(startDateIntractiveComponents)}

    if (passangerCountIntractiveComponentsInnerButton.getAttribute('data-passenger-count') === '0') {setErrorOnComponent(passangerCountIntractiveComponents, 'تعداد مسافرین صفر نمیتواند باشد')}
    else if (passangerCountIntractiveComponentsInnerButton.getAttribute('data-passenger-count') !== '0') {setSuccsesOnComponent(passangerCountIntractiveComponents)}

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
        newLinkElement.setAttribute('href', 'tickets.html');
        newLinkElement.click()
    }
})