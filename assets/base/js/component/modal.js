class Modal extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === 'log-in') {
            this.innerHTML = `
                <div id="login-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div data-target="login-modal" class="toggler my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-5 col-12">
                        <div class="mb-2" dir="ltr">
                            <div class="d-flex align-items-center justify-content-between col-6">
                                <button data-target="login-modal" class="toggler my-modal-close-button d-flex justify-content-center align-items-center bg-grey-lighten2 border-0 rounded-3"><i class="bi bi-x"></i></button>
                                <h6 class="fw-bold text-black mb-0">ورود</h6>
                            </div>
                        </div>
                        <h6 class="text-grey-lighten1 mb-4 font-small text-center">لطفا شماره موبایل خود را وارد کنید</h6>
                        <form action="#">
                            <div class="row gx-2 gy-2 mb-3">
                                <intractive-component class="col-lg-9 col-12" type="input" input-type="tel" placeholder="موبایل"></intractive-component>
                                <intractive-component class="col-lg-3 col-12" disabled type="input" input-type="tel"></intractive-component>
                            </div>
                            <button type="submit" class="rounded-4 col-12 submit-button ripple-button">ورود</button>
                        </form>
                    </div>
                </div>   
            `
        } else if (this.getAttribute('type') === 'loader') {
            this.innerHTML = `
                <div id="loader-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div class="my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-auto col-12">
                        <h5 class="text-grey-darken2">لطفا منتظر بمانید!</h5>
                        <h6 class="font-small text-grey-darken1">سیستم درحال دریافت اطلاعات و نمایش نتایج میباشد.</h6>
                        <div class="loader-holder"><div class="loader"></div></div>
                    </div>
                </div> 
            `
        } else if (this.getAttribute('type') === 'city') {
            this.innerHTML = `
                <div id="flight-select-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div data-target="flight-select-modal" class="toggler my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-9 col-12">
                        <button data-target="flight-select-modal" class="toggler my-modal-close-button d-lg-none d-flex justify-content-center align-items-center mb-3 bg-grey-lighten2 border-0 rounded-3"><i class="bi bi-x"></i></button>
                        <flight-component></flight-component>
                    </div>
                </div>   
            `
        } else if (this.getAttribute('type') === 'buy-ticket-coniform') {
            this.innerHTML = `
                <div data-opened id="buy-ticket-coniform-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div data-target="buy-ticket-coniform-modal" class="toggler my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-9 col-12">
                        <button data-target="buy-ticket-coniform-modal" class="toggler my-modal-close-button d-lg-none d-flex justify-content-center align-items-center mb-3 bg-grey-lighten2 border-0 rounded-3"><i class="bi bi-x"></i></button>
                        <h6 class="font-small text-grey-darken3  fw-bold">بررسی مشخصات خرید</h6>
                        <h6 class="font-small text-grey-darken1 mb-3">لطفا کلیه مشخصات زیر را بررسی و سپس تایید نمایید.</h6>
                        <div class="intractive-buttons-with-border justify-content-start d-flex border-bottom mb-3">
                            <div style="right: 0;" class="intractive-buttons-border ticket-buy"></div>
                            <button active data-target="flight-passengers-in-modal" class="intractive-buttons-btn ticket-buy font-small text-secondary-lighten1 border-0 bg-transparent ripple-button d-flex flex-column align-items-center justify-content-center">مسافران</button>
                            <button data-target="flight-detail-in-modal" class="intractive-buttons-btn ticket-buy font-small text-secondary-lighten1 border-0 bg-transparent ripple-button d-flex flex-column align-items-center justify-content-center">جزییات پرواز</button>
                            <button data-target="flight-rules-in-modal" class="intractive-buttons-btn ticket-buy font-small text-secondary-lighten1 border-0 bg-transparent ripple-button d-flex flex-column align-items-center justify-content-center">قوانین</button>
                            <button data-target="flight-weight-in-modal" class="intractive-buttons-btn ticket-buy font-small text-secondary-lighten1 border-0 bg-transparent ripple-button d-flex flex-column align-items-center justify-content-center">مقدار بار</button>
                        </div>
                        <div class="coniform-modal-middle-holder mb-3">
                            <div id="flight-passengers-in-modal"></div>
                            <div id="flight-detail-in-modal">
                                <flight-details small icon-src="assets/base/img/img-logo.png" name="sepehran Airlines" systemic number-of-sits="9" flight-number="IS 4340" mode="economy" start-time="05:45" start-location="تهران (THR)" start-location-en="Tehran" start-location-fa="تهران" end-time="07:15" end-location="مشهد (MHD)" end-location-en="Mashhad" end-location-fa="مشهد" price="11,330,060" start-loaction-abbr="THR" end-loaction-abbr="MHD" route-duration-hour="1" route-duration-minute="5" start-date="2022-11-10" start-date-en="10 november" start-date-fa="پنجشنبه 19 ابان" end-date-en="10 november" end-date-fa="پنجشنبه 19 ابان" plane-model="IS 4340" type="details"></flight-details>
                            </div>
                            <div id="flight-rules-in-modal"></div>
                            <div id="flight-weight-in-modal"></div>
                        </div>
                        <div class="d-flex gap-3 justify-content-end border-top pt-3">
                            <button class="rounded-4 col-2 primary-submit-button ripple-button">ویرایش مشخصات</button>
                            <button class="rounded-4 col-2 submit-button ripple-button">تایید و ادامه</button>
                        </div>
                    </div>
                </div>   
            `
        }
    }
}

window.customElements.define('my-modal', Modal);