// Custom Footer
class Modal extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === 'log-in') {
            this.innerHTML = `
                <div class="my-modal-holder position-fixed inset-0 d-flex justify-content-center align-items-center">
                    <div class="my-modal-bg position-fixed inset-0"></div>
                    <div class="my-modal bg-white shadow rounded-3 p-3">
                        <div class="mb-2" dir="ltr">
                            <div class="d-flex align-items-center justify-content-between col-7">
                                <button class="my-modal-close-button d-flex justify-content-center align-items-center bg-grey-lighten2 border-0 rounded-3"><i class="bi bi-x"></i></button>
                                <h6 class="fw-bold text-black mb-0">ورود</h6>
                            </div>
                        </div>
                        <h6 class="text-grey-lighten1 mb-4 font-small">لطفا شماره موبایل خود را وارد کنید</h6>
                        <div class="row">
                            <intractive-component class="col-lg-8 col-12" type="input" input-type="tel" placeholder="موبایل"></intractive-component>
                            <intractive-component class="col-lg-4 col-12" disabled type="input" input-type="tel"></intractive-component>
                        </div>
                        <button class="rounded-4 col-12 submit-button ripple-button">ورود</button>
                    </div>
                </div>   
            `
        }
    }
}

// Defining Our Custom Footer
window.customElements.define('my-modal', Modal);