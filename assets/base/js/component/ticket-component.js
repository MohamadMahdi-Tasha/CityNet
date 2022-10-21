class TicketComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-white p-3 rounded-3">
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
                    <div class="d-flex justify-content-lg-start justify-content-between align-items-center col-lg-6 col-12">
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
                        <button data-accardion-target="weight-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">بار مجاز<i class="bi bi-chevron-down me-2"></i></button>
                        <button data-accardion-target="rules-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">قوانین<i class="bi bi-chevron-down me-2"></i></button>
                        <button data-accardion-target="details-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">جزییات<i class="bi bi-chevron-down me-2"></i></button>
                        <button data-accardion-target="price-${this.getAttribute('flight-number')}" class="bg-transparent font-small border-0 ticket-component-bottom-accardion-toggler">قیمت<i class="bi bi-chevron-down me-2"></i></button>
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
                            <button class="rounded-4 px-5 col-lg-auto col-12 submit-button ripple-button">جستجو</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <div id="weight-${this.getAttribute('flight-number')}" class="mt-3 ticket-component-bottom-accardion bg-grey-lighten3 rounded">
                            <div class="intractive-buttons-with-border d-flex">
                                <div style="right: 0;" class="intractive-buttons-border ticket-component bg-black"></div>
                                    <button active class="intractive-buttons-btn ticket-component d-flex align-items-center justify-content-around text-secondary-lighten1 border-0 bg-transparent ripple-button ">
                                        <span>${this.getAttribute('start-loaction-abbr')}</span>
                                        <i class="bi bi-arrow-left"></i>
                                        <span>${this.getAttribute('end-loaction-abbr')}</span>
                                    </button>
                                </div>
                        <div class="bg-white rounded-bottom border pt-4">
                            <table class="table mb-0 d-lg-table d-flex">
                                <thead class="col-lg-auto col-6">
                                    <tr class="d-lg-table-row d-flex flex-column col-lg-auto col-12">
                                        <th class="font-small text-grey-darken3 text-center fw-normal" scope="col">شماره پرواز</th>
                                        <th class="font-small text-grey-darken3 text-center fw-normal" scope="col">بار بزرگسال</th>
                                        <th class="font-small text-grey-darken3 text-center fw-normal" scope="col">بار کودک</th>
                                        <th class="font-small bb-lg-none text-grey-darken3 text-center fw-normal" scope="col">بار نوزاد</th>
                                    </tr>
                                </thead>
                                <tbody class="col-lg-auto col-6">
                                    <tr class="d-lg-table-row d-flex flex-column col-lg-auto col-12">
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">2660</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">15KG</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">15KG</td>
                                        <td class="border-bottom-0 font-small text-grey-darken3 text-center">--</td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                    </div>
                    <div id="rules-${this.getAttribute('flight-number')}" class="mt-3 ticket-component-bottom-accardion bg-grey-lighten3 rounded">
                        <div class="intractive-buttons-with-border d-flex">
                            <div style="right: 0;" class="intractive-buttons-border ticket-component bg-black"></div>
                            <button active class="intractive-buttons-btn ticket-component d-flex align-items-center justify-content-around text-secondary-lighten1 border-0 bg-transparent ripple-button ">
                                TO
                                <i class="bi bi-arrow-left"></i>
                            </button>
                        </div>
                        <div class="bg-white border rounded-bottom  my-collapse-holder">
                            <button class="my-collapse-toggler ripple-button bg-white border-0 col-12 d-flex justify-content-between align-items-center font-small p-3 text-grey-darken3">
                                جریمه کنسلی و قوانین (بزرگسال)
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="my-collapse p-3">
                                <div class="paragraph-holder">
                                    <p class="font-small text-grey-darken3">CANCELLATION PENALTY</p>
                                    <p class="font-small text-grey-darken3">TICKET IS NOT REFUNDABLE IN CASE OF CANCEL/REFUND.</p>
                                    <ul>
                                        <li>
                                            <p class="font-small text-grey-darken3">CHANGE POLICY <br> TICKET IS CHANGABLE WITH PENALY IN CASE OF CHANGE DATE.</p>
                                            <p class="font-small text-grey-darken3">NO SHOW POLICY <br> CHANGE/CANCELLATION NOT PERMITED.</p>
                                            <p class="font-small text-grey-darken3">Not Refundable Service Charge: IRR 4,000,000 Per Passenger.</p>
                                            <p class="font-small text-grey-darken3">Admin Fee For Change: IRR 4,000,000 Per Passenger.</p>
                                            <p class="font-small text-grey-darken3">Refund process will take up to 7 Working Days.</p>
                                            <p class="font-small text-grey-darken3">You can check covid19 limitations on below link:</p>
                                            <a class="font-small text-primary-base" href="#">IATA Travel Centre</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="details-${this.getAttribute('flight-number')}" class="mt-3 ticket-component-bottom-accardion bg-grey-lighten3 rounded">
                        <div class="p-3 d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <h6 class="mb-0 font-small">
                                    <span>${this.getAttribute('start-loaction-abbr')}</span>
                                    <i class="bi bi-arrow-left"></i>
                                    <span>${this.getAttribute('end-loaction-abbr')}</span>
                                </h6>
                                <div class="divider-vertical"></div>
                                <h6 class="mb-0 font-small">
                                    مسیر
                                    <span>${this.getAttribute('start-location-en')}</span>
                                    به
                                    <span>${this.getAttribute('end-location-en')}</span>
                                </h6>
                            </div>
                            <div class="d-flex">
                                <h6 class="mb-0 font-small">مدت مسیر :</h6>
                                <h6 class="mb-0 font-small text-grey-darken1">
                                    <span>${this.getAttribute('route-duration-hour')}</span>
                                    ساعت  و
                                    <span>${this.getAttribute('route-duration-minute')}</span>
                                    دقیقه
                                </h6>
                            </div>
                        </div>
                        <div class="bg-white p-3 border rounded-bottom">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <h6 class="mb-0 font-small fw-bold">
                                    <i class="bi bi-calendar4-week"></i>
                                    زمان حرکت :
                                    <span>${this.getAttribute('start-time')}</span>
                                </h6>
                                <h6 class="font-small text-grey-darken2 mb-0">
                                    ${this.getAttribute('start-date-fa')}
                                    (${this.getAttribute('start-date-en')})
                                </h6>
                            </div>
                            <div class="d-flex flex-lg-row col-lg-auto col-12 flex-column gap-3 align-items-lg-center align-items-start justify-content-lg-between justify-content-start mb-3">
                                <div>
                                    <h6 class="font-small mb-0">
                                        <i class="bi bi-circle-fill"></i>
                                        ${this.getAttribute('start-location')}
                                    </h6>
                                    <div class="d-flex align-items-center ticket-component-details-accardion-main-side">
                                        <div class="divider-vertical-dashed h-100 me-1 ms-2"></div>
                                        <img width="75px" height="75px" src="${this.getAttribute('icon-src')}" alt="${this.getAttribute('name')}">
                                    </div>
                                    <h6 class="font-small mb-0">
                                        <i class="bi bi-airplane rotate-270"></i>
                                        ${this.getAttribute('end-location')}
                                    </h6>
                                </div>
                                <div>
                                    <h6 class="font-small text-grey-darken4">هواپیمایی :<span>${this.getAttribute('name')}</span></h6>
                                    <h6 class="font-small text-grey-darken4">مدل هواپیما :<span>${this.getAttribute('plane-model')}</span></h6>
                                    <h6 class="font-small text-grey-darken4 mb-0">بار مجاز :<span>15 KG</span></h6>
                                </div>
                                <div>
                                    <h6 class="font-small text-grey-darken4">شماره پرواز :<span>${this.getAttribute('flight-number')}/${(this.getAttribute('systemic') !== null) ? 'سیستمی' : 'چارتری'}</span></h6>
                                    <h6 class="font-small text-grey-darken4">
                                        مدت پرواز :
                                        <span>${this.getAttribute('route-duration-hour')}</span>
                                        ساعت و
                                        <span>${this.getAttribute('route-duration-minute')}</span>
                                        دقیقه
                                    </h6>
                                    <h6 class="font-small text-grey-darken4 mb-0">کلاس نرخی :<span>${this.getAttribute('mode')}</span></h6>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <h6 class="mb-0 font-small fw-bold">
                                    <i class="bi bi-calendar4-week"></i>
                                    زمان رسیدن :
                                    <span>${this.getAttribute('end-time')}</span>
                                </h6>
                                <h6 class="mb-0 font-small text-grey-darken2">
                                    ${this.getAttribute('end-date-fa')}
                                    (${this.getAttribute('end-date-en')})
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="ticket-component-bottom-accardion mt-3" id="price-${this.getAttribute('flight-number')}">
                        <div class="rounded-tr-tl-br overflow-hidden border">
                            <table class="table mb-0 d-lg-table d-flex">
                                <thead class="bg-grey-lighten3 col-lg-auto col-6">
                                    <tr class="d-lg-table-row d-flex flex-column  col-lg-auto col-12">
                                        <th class="font-small text-grey-darken3 text-center" scope="col">#</th>
                                        <th class="font-small text-grey-darken3 text-center" scope="col">رده سنی</th>
                                        <th class="font-small text-grey-darken3 text-center" scope="col">قیمت پایه</th>
                                        <th class="font-small text-grey-darken3 text-center" scope="col">مالیات</th>
                                        <th class="font-small text-grey-darken3 text-center" scope="col">تخفیف</th>
                                        <th class="font-small text-grey-darken3 text-center" scope="col">تعداد</th>
                                        <th class="font-small text-grey-darken3 text-center" scope="col">مبلغ هر نفر</th>
                                        <th class="bb-lg-none font-small text-grey-darken3 text-center" scope="col">جمع</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white col-lg-auto col-6">
                                    <tr class="d-lg-table-row d-flex flex-column  col-lg-auto col-12">
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">1</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">بزرگسال</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">5,836,060</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">5,994,000</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">500,000</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">x1</td>
                                        <td class="border-bottom-0 bb-lg font-small text-grey-darken3 text-center">${this.getAttribute('price')}</td>
                                        <td class="border-bottom-0 font-small text-grey-darken3 text-center">${this.getAttribute('price')}</td>
                                    </tr>
                                </tbody>
                        </table>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="bg-green-light px-4 py-2 rounded-bottom d-flex gap-5">
                            <h6 class="font-small text-green-base mb-0">جمع</h6>
                            <h6 class="font-small text-green-base mb-0">
                                <span class="fw-bold">${this.getAttribute('price')}</span>
                                ریال
                            </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('ticket-component', TicketComponent);