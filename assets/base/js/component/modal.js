class Modal extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === 'log-in') {
            this.innerHTML = `
                <div id="login-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center ${(this.getAttribute('no-close') !== null) ? 'no-close' : ''}">
                    <div ${(this.getAttribute('no-close') === null) ? 'data-target="login-modal"' : ''}  class="${(this.getAttribute('no-close') === null) ? 'toggler' : ''} my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-5 col-12">
                        <div class="mb-2" dir="ltr">
                            <div class="d-flex align-items-center ${(this.getAttribute('no-close') === null) ? 'justify-content-between col-6' : 'justify-content-center col-12'}">
                                ${(this.getAttribute('no-close') === null) ? '<button data-target="login-modal" class="toggler my-modal-close-button d-flex justify-content-center align-items-center bg-grey-lighten2 border-0 rounded-3"><i class="bi bi-x"></i></button>' : ''}
                                <h6 class="fw-bold text-black mb-0">ورود</h6>
                            </div>
                        </div>
                        <h6 class="text-grey-lighten1 mb-4 font-small text-center">لطفا شماره موبایل خود را وارد کنید</h6>
                        <form action="#" id="login-form">
                            <div class="row gx-2 gy-2 mb-3">
                                <intractive-component id="mobile-number-input-login-modal" class="col-lg-9 col-12" type="input" input-type="tel" placeholder="موبایل"></intractive-component>
                                <intractive-component class="col-lg-3 col-12" disabled type="input" input-type="tel"></intractive-component>
                            </div>
                            <button id="login-submit-btn" type="submit" class="rounded-4 col-12 submit-button ripple-button">ورود</button>
                        </form>
                    </div>
                </div>   
            `
        } else if(this.getAttribute('type') === 'login-code') {
            this.innerHTML = `
                <div id="login-code-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center no-close">
                    <div class="my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-5 col-12">
                        <h6 class="fw-bold text-black text-center mb-3">کد</h6>
                        <h6 class="text-grey-lighten1 mb-4 font-small text-center">لطفا کد ارسال شده به واتساپ شماره را وارد کنید</h6>
                        <form action="#" id="login-code-form" class="d-flex flex-column gap-3">
                            <intractive-component id="mobile-number-input-code-modal" type="input" input-type="number" placeholder="کد"></intractive-component>
                            <button id="login-code-submit-btn" type="submit" class="rounded-4 col-12 submit-button ripple-button">ورود</button>
                        </form>
                    </div>
                </div>   
            `
        } else if (this.getAttribute('type') === 'loader') {
            this.innerHTML = `
                <div data-opened id="loader-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center no-close">
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
        } else if (this.getAttribute('type') === 'select-person') {
            this.innerHTML = `
                <div id="${this.getAttribute('inner-id')}" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div data-target="${this.getAttribute('inner-id')}" class="toggler my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-9 col-12">
                        <div class="d-flex align-items-start justify-content-between mb-3">
                            <h6 class="font-small text-grey-darken1 mb-0">لیست مسافران سابق</h6>
                            <button data-target="${this.getAttribute('inner-id')}" class="toggler my-modal-close-button d-flex justify-content-center align-items-center bg-grey-lighten2 border-0 rounded-3"><i class="bi bi-x"></i></button>
                        </div>
                        <intractive-component type="search"></intractive-component>
                        <div class="mt-3 select-person-table-holder">
                            <table class="table no-border">
                              <thead>
                                <tr class="bg-grey-lighten3">
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">#</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">جنسیت</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">نام انگلیسی</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">نام خانوادگی انگلیسی</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">ملیت</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">شماره ملی</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">تاریخ تولد</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">شماره گذرنامه</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col">تاریخ انقضای گذرنامه</th>
                                  <th class="font-small text-grey-darken1 bg-transparent" scope="col"> </th>
                                </tr>
                              </thead>
                              <tbody id="tbody-select-person-modal"></tbody>
                            </table>
                        </div>
                    </div>
                </div>   
            `
        }
    }
}

window.customElements.define('my-modal', Modal);