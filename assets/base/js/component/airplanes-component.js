class airplanesComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div class="d-flex align-items-center mb-1">
                        <input type="checkbox" class="ms-2">
                        <label class="font-small">${this.getAttribute('title')}</label>
                    </div>
                    <h6 class="mb-0 font-small text-grey-base me-3">
                        از
                        <span>${this.getAttribute('price')}</span>
                        ریال
                    </h6>
                </div>
                <img width="50px" height="50px" src="${this.getAttribute('icon')}" alt="Logo">
            </div>
        `
    }
}

window.customElements.define('airplanes-component', airplanesComponent);