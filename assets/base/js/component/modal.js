// Custom Footer
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
                <div  id="loader-modal" class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div class="my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3 col-lg-auto col-12">
                        <h5 class="text-grey-darken2">لطفا منتظر بمانید!</h5>
                        <h6 class="font-small text-grey-darken1">سیستم درحال دریافت اطلاعات و نمایش نتایج میباشد.</h6>
                        <div class="loader-holder"><div class="loader"></div></div>
                    </div>
                </div> 
            `
        }
    }
}

// Defining Our Custom Footer
window.customElements.define('my-modal', Modal);