class flightDetails extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === "details") {
            if (this.getAttribute('small') === null) {
                this.innerHTML = `
                        <div class="overflow-hidden mb-3 rounded">
                            <div class="p-3 d-flex justify-content-between align-items-center border border-bottom-0 bg-grey-lighten3 rounded-top">
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
                        <div class="bg-white p-3 border rounded-bottom ">
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
                `
            } else {
                this.innerHTML = `
                    <div class="bg-grey-lighten3 rounded-top">
                        <div class="p-3 d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 font-small text-grey-darken3">
                                <span>${this.getAttribute('start-loaction-abbr')}</span>
                                <i class="bi bi-arrow-left ms-1 me-1"></i>
                                <span>${this.getAttribute('end-loaction-abbr')}</span>
                            </h6>
                            <h6 class="mb-0 font-small text-grey-darken1">
                                <span class="text-grey-darken3">مدت مسیر :</span>
                                <span>${this.getAttribute('route-duration-hour')}</span>
                                ساعت
                                <span>${this.getAttribute('route-duration-minute')}</span>
                                دقیقه
                            </h6>
                        </div>
                        <div class="bg-white p-3 border rounded-bottom">
                            <div>
                                <div class="d-flex gap-3 mb-3">
                                    <h6 class="mb-0 font-small text-grey-darken4">
                                        زمان حرکت:
                                        <span>${this.getAttribute('start-time')}</span>
                                    </h6>
                                    <h6 class="mb-0 font-small text-grey-darken2">
                                        <span>${this.getAttribute('start-date-fa')}</span>
                                        (<span>${this.getAttribute('start-date-en')}</span>)
                                    </h6>
                                </div>
                                <div class="d-flex flex-lg-row flex-column align-items-lg-center align-items-start gap-5 mb-3">
                                    <div>
                                        <h6 class="font-small text-grey-darken3 mb-0"><i class="bi bi-circle-fill ms-3"></i><span>${this.getAttribute('start-location')}</span></h6>
                                        <div class="d-flex">
                                            <div class="divider-vertical-dashed me-1 ms-2"></div>
                                            <img class="mt-3 mb-3" width="150px" height="150px" src="${this.getAttribute('icon-src')}" alt="${this.getAttribute('name')}">
                                        </div>
                                        <h6 class="font-small text-grey-darken3 mb-0"><i class="bi bi-airplane rotate-270 ms-3"></i><span>${this.getAttribute('end-location')}</span></h6>
                                    </div>
                                    <div class="d-flex flex-column gap-3">
                                        <h6 class="font-small text-grey-darken3 mb-0">هواپیمایی:<span>${this.getAttribute('name')}</span></h6>
                                        <h6 class="font-small text-grey-darken3 mb-0">شماره پرواز:<span>${this.getAttribute('flight-number')}/${(this.getAttribute('systemic') !== null) ? 'سیستمی' : 'چارتری'}</span></h6>
                                        <h6 class="font-small text-grey-darken3 mb-0">مدل هواپیما:<span>${this.getAttribute('plane-model')}</span></h6>
                                        
                                        <h6 class="font-small text-grey-darken3 mb-0">مدت پرواز:<span>${this.getAttribute('route-duration-hour')}</span>ساعت و<span>${this.getAttribute('route-duration-minute')}</span>دقیقه</h6>
                                        <h6 class="font-small text-grey-darken3 mb-0">باز مجاز:<span>15</span>KG</h6>
                                        <h6 class="font-small text-grey-darken3 mb-0">کلاس نرخی:<span>${this.getAttribute('mode')}</span></h6>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <h6 class="mb-0 font-small text-grey-darken4">
                                        زمان رسیدن:
                                        <span>${this.getAttribute('end-time')}</span>
                                    </h6>
                                    <h6 class="mb-0 font-small text-grey-darken2">
                                            ${this.getAttribute('end-date-fa')}
                                            (${this.getAttribute('end-date-en')})
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        } else if (this.getAttribute('type') === "price") {
            this.innerHTML = `
                <div class="rounded-tr-tl-br overflow-hidden border">
                                    <div class="intractive-buttons-with-border d-flex bg-grey-lighten3">
                            <div style="right: 0;" class="intractive-buttons-border ticket-component bg-black"></div>
                            <button class="active intractive-buttons-btn ticket-component d-flex align-items-center justify-content-around text-secondary-lighten1 border-0 bg-transparent ripple-button ">
                                <span>${this.getAttribute('start-loaction-abbr')}</span>
                                <i class="bi bi-arrow-left"></i>
                                <span>${this.getAttribute('end-loaction-abbr')}</span>
                            </button>
                    </div>
                                    <table class="table mb-0 d-lg-table d-flex border-top bg-white">
                                        <thead class="col-lg-auto col-6">
                                            <tr class="d-lg-table-row d-flex flex-column  col-lg-auto col-12">
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">#</th>
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">رده سنی</th>
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">قیمت پایه</th>
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">مالیات</th>
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">تخفیف</th>
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">تعداد</th>
                                                <th class="font-small p-3 border-bottom-0 bb-lg text-grey-darken3 text-center" scope="col">مبلغ هر نفر</th>
                                                <th class="bb-lg-none p-3 border-bottom-0 bb-lg font-small text-grey-darken3 text-center" scope="col">جمع</th>
                                            </tr>
                                        </thead>
                                        <tbody class="col-lg-auto col-6">
                                            <tr class="d-lg-table-row d-flex flex-column  col-lg-auto col-12">
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">1</td>
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">بزرگسال</td>
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">5,836,060</td>
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">5,994,000</td>
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">500,000</td>
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">x1</td>
                                                <td class="border-bottom-0 p-3 bb-lg font-small text-grey-darken3 text-center">${this.getAttribute('price')}</td>
                                                <td class="border-bottom-0 p-3 font-small text-grey-darken3 text-center">${this.getAttribute('price')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
            `
        } else if (this.getAttribute('type') === "rules") {
            this.innerHTML = `
                <div class="rounded border overflow-hidden">
                    <div class="intractive-buttons-with-border d-flex bg-grey-lighten3">
                            <div style="right: 0;" class="intractive-buttons-border ticket-component bg-black"></div>
                            <button class="active intractive-buttons-btn ticket-component d-flex align-items-center justify-content-around text-secondary-lighten1 border-0 bg-transparent ripple-button ">
                                TO
                                <i class="bi bi-arrow-left"></i>
                            </button>
                    </div>
                    <div class="bg-white border-top my-collapse-holder">
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
            `
        } else if (this.getAttribute('type') === "weight") {
            this.innerHTML = `
               <div class="rounded border overflow-hidden">
                    <div class="intractive-buttons-with-border d-flex bg-grey-lighten3">
                            <div style="right: 0;" class="intractive-buttons-border ticket-component bg-black"></div>
                            <button class="active intractive-buttons-btn ticket-component d-flex align-items-center justify-content-around text-secondary-lighten1 border-0 bg-transparent ripple-button ">
                                <span>${this.getAttribute('start-loaction-abbr')}</span>
                                <i class="bi bi-arrow-left"></i>
                                <span>${this.getAttribute('end-loaction-abbr')}</span>
                            </button>
                    </div>
                    <table class="table mb-0 bg-white border-top d-lg-table d-flex">
                      <thead class="col-lg-auto col-6">
                        <tr class="d-lg-table-row d-flex flex-column">
                          <th class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1" scope="col">شماره پرواز</th>
                          <th class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1" scope="col">بار بزرگسال</th>
                          <th class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1" scope="col">بار کودک</th>
                          <th class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1" scope="col">بار نوزاد</th>
                        </tr>
                      </thead>
                      <tbody class="col-lg-auto col-6">
                        <tr class="d-lg-table-row d-flex flex-column">
                          <th class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1" scope="row">${this.getAttribute('flight-number')}</th>
                          <td class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1">15KG</td>
                          <td class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1">15KG</td>
                          <td class="p-3 border-bottom-0 text-lg-end text-center bb-lg font-small text-grey-darken1">--</td>
                        </tr>
                      </tbody>
                    </table> 
               </div>
            `
        }
    }
}

window.customElements.define(   'flight-details', flightDetails);