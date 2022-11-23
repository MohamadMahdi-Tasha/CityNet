class TicketComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-white p-3 rounded-3 ticket-component">
                <div class="bg-grey-lighten3 mb-3 rounded-4 p-3 d-flex flex-lg-row flex-column align-items-center justify-content-between">
                    <div class="d-flex flex-lg-row flex-column align-items-center gap-4">
                        <img width="70px" height="70px" src="${this.getAttribute('icon-src')}" alt="${this.getAttribute('name')}">
                        <div>
                            <div class="d-flex align-items-center mb-2 gap-2 px-3">
                                <h6 class="font-small mb-0 text-green-base px-3 py-1 rounded-1 bg-green-light">${(this.getAttribute('systemic') !== null) ? 'سیستمی' : 'چارتری'}</h6>
                                <h6 class="font-small mb-0 text-blue-base px-3 py-1 rounded-1 bg-blue-light">
                                    <span>${this.getAttribute('number-of-sits')}</span>
                                    صندلی
                                </h6>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div class="hover-drop-down-holder">
                                    <h6 class="mb-0 hover-drop-down-toggler font-small text-grey-darken3">${this.getAttribute('flight-number')}</h6>
                                    <span class="hover-drop-down rounded-3 text-nowrap px-3 text-white py-2">شماره پرواز</span>
                                </div>
                                <span class="text-grey-lighten2">|</span>
                                <div class="hover-drop-down-holder">
                                    <h6 class="mb-0 hover-drop-down-toggler font-small text-grey-darken3">${this.getAttribute('name')}</h6>
                                    <span class="hover-drop-down rounded-3 text-nowrap px-3 text-white py-2">هواپیمایی</span>
                                </div>
                            </div>
                            <div class="hover-drop-down-holder">
                                <h6 class="mb-0 hover-drop-down-toggler text-center font-small text-grey-darken3">${this.getAttribute('mode')}</h6>
                                <span class="hover-drop-down rounded-3 text-nowrap px-3 text-white py-2">کلاس نرخی</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center col-lg-6 col-12">
                        <div>
                            <h6 class="fw-bold text-grey-darken3 text-start">${this.getAttribute('start-time')}</h6>
                            <h6 class="font-small text-grey-darken3 mb-0 text-start">${this.getAttribute('start-location')}</h6>
                        </div>
                        <div class="d-flex align-items-center col-4 me-3 ms-5">
                            <i class="bi text-grey-darken3 font-small bi-circle-fill"></i>
                            <div class="divider-dashed col-12"></div>
                            <i class="bi text-grey-darken3 font-small bi-airplane rotate-270"></i>
                        </div>
                        <div>
                            <h6 class="fw-bold text-grey-darken3">${this.getAttribute('end-time')}</h6>
                            <h6 class="font-small text-grey-darken3 mb-0">${this.getAttribute('end-location')}</h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-lg-row flex-column gap-3 align-items-center justify-content-between">
                    <div class="d-flex justify-content-lg-start justify-content-between col-lg-auto col-12">
                        <button onclick="handleAcardionTogglerClick(this)" data-accardion-target="weight-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">بار مجاز<i class="bi bi-chevron-down me-2"></i></button>
                        <button onclick="handleAcardionTogglerClick(this)" data-accardion-target="rules-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">قوانین<i class="bi bi-chevron-down me-2"></i></button>
                        <button onclick="handleAcardionTogglerClick(this)" data-accardion-target="details-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">جزییات<i class="bi bi-chevron-down me-2"></i></button>
                        <button onclick="handleAcardionTogglerClick(this)" data-accardion-target="price-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">قیمت<i class="bi bi-chevron-down me-2"></i></button>
                    </div>
                    <div class="col-lg-auto col-12">
                        <div class="d-flex flex-lg-row flex-column-reverse gap-3 align-items-center">
                            <div class="d-lg-block d-flex justify-content-between align-items-center col-lg-auto col-12">
                                <h6 class="text-grey-darken1 font-small text-center mb-lg-2 mb-0">قیمت هر بزرگسال</h6>
                                <h6 class="text-info-darken1 text-center mb-0">
                                    <span class="fw-bold">${this.getAttribute('price')}</span>
                                    ریال
                                </h6>
                            </div>
                            <button onclick="
                                localStorage.setItem('selected-ticket', JSON.stringify({
                                    icon: '${this.getAttribute('icon-src')}',
                                    name: '${this.getAttribute('name')}',
                                    flightNumber: '${this.getAttribute('flight-number')}',
                                    startTime: '${this.getAttribute('start-time')}',
                                    endTime: '${this.getAttribute('end-time')}',
                                    price: '${this.getAttribute('price')}',
                                    startLocation: '${this.getAttribute('start-loaction-abbr')}',
                                    endLocation: '${this.getAttribute('end-loaction-abbr')}',
                                    date: '${this.getAttribute('start-date')}',
                                    planeModel: '${this.getAttribute('plane-model')}',
                                }));
                                window.open('ticket-buy.html', '_self');
                            " class="rounded-4 ticket-component-search-button px-5 submit-button col-lg-auto col-12 ripple-button">جستجو</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <div id="weight-${this.getAttribute('flight-number')}" class="mt-3 ticket-component-bottom-accardion bg-grey-lighten3 rounded"><flight-details flight-number="${this.getAttribute('flight-number')}" end-loaction-abbr="${this.getAttribute('end-loaction-abbr')}" start-loaction-abbr="${this.getAttribute('start-loaction-abbr')}" type="weight"></flight-details></div>
                    <div id="rules-${this.getAttribute('flight-number')}" class="mt-3 ticket-component-bottom-accardion bg-grey-lighten3 rounded"><flight-details type="rules"></flight-details></div>
                    <div id="details-${this.getAttribute('flight-number')}" class="mt-3 ticket-component-bottom-accardion bg-grey-lighten3 rounded"><flight-details icon-src="${this.getAttribute('icon-src')}" name="${this.getAttribute('name')}" systemic number-of-sits="${this.getAttribute('number-of-sits')}" flight-number="${this.getAttribute('flight-number')}" mode="${this.getAttribute('mode')}" start-time="${this.getAttribute('start-time')}" start-location="${this.getAttribute('start-location')}" start-location-en="${this.getAttribute('start-location-en')}" start-location-fa="${this.getAttribute('start-location-fa')}" end-time="${this.getAttribute('end-time')}" end-location="${this.getAttribute('end-location')}" end-location-en="${this.getAttribute('end-location-en')}" end-location-fa="${this.getAttribute('end-location-fa')}" price="${this.getAttribute('price')}" start-loaction-abbr="${this.getAttribute('start-loaction-abbr')}" end-loaction-abbr="${this.getAttribute('end-loaction-abbr')}" route-duration-hour="${this.getAttribute('route-duration-hour')}" route-duration-minute="${this.getAttribute('route-duration-minute')}" start-date="${this.getAttribute('start-date')}" start-date-en="${this.getAttribute('start-date-en')}" start-date-fa="${this.getAttribute('start-date-fa')}" end-date-en="${this.getAttribute('end-date-en')}" end-date-fa="${this.getAttribute('end-date-fa')}" plane-model="${this.getAttribute('plane-model')}" type="details"></flight-details></div>
                    <div class="ticket-component-bottom-accardion mt-3" id="price-${this.getAttribute('flight-number')}">
                        <flight-details flight-number="${this.getAttribute('flight-number')}" end-loaction-abbr="${this.getAttribute('end-loaction-abbr')}" start-loaction-abbr="${this.getAttribute('start-loaction-abbr')}" type="price" price="11,350,000"></flight-details>
                    </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('ticket-component', TicketComponent);

// A Function That Listenes To Click That Toggles Attribute Of 'data-opened' To Clicked Toggler
// And Target Of Clicked Toggler And Removes It From Accardion Item And Toggler That Haves Attribute Of 'data-opened'
function handleAcardionTogglerClick(toggler) {
    const accardionTarget = toggler.getAttribute('data-accardion-target');
    const accardionTargetElement = document.getElementById(accardionTarget);
    const openedAccardion = document.querySelector('.ticket-component-bottom-accardion[data-opened]')
    const openedToggler = document.querySelector('.ticket-component-bottom-accardion-toggler[data-opened]');

    toggler.toggleAttribute('data-opened');
    accardionTargetElement.toggleAttribute('data-opened');
    openedToggler.removeAttribute('data-opened');
    openedAccardion.removeAttribute('data-opened');
}