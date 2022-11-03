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
        }
    }
}

window.customElements.define('flight-details', flightDetails);