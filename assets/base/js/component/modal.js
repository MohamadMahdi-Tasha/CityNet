// Custom Footer
class Modal extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === 'log-in') {
            this.innerHTML = `
                <div class="my-modal-holder">
                    <div class="my-modal-bg"></div>
                    <div>
                        <h6>ورود</h6>
                        <button><i class="bi bi-x"></i></button>
                    </div>
                    <h6>لطفا شماره موبایل خود را وارد کنید</h6>
                    <div>
                        <intractive-component type="input" input-type="tel" placeholder="موبایل"></intractive-component>
                        <intractive-component disabled type="input" input-type="tel"></intractive-component>
                    </div>
                    <button class="col-lg-3 col-12 rounded-4 submit-button ripple-button">ورود</button>
                </div>   
            `
        }
    }
}

// Defining Our Custom Footer
window.customElements.define('modal', Modal);