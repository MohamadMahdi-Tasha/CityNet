class selectedCity extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="d-flex align-items-center">
                <div class="d-flex align-items-center ms-2 p-1 text-white rounded-3 bg-${(this.getAttribute('primary') !== null) ? 'pink' : 'info-base'}">
                    <i class="bi ms-2 bi-${(this.getAttribute('primary') !== null) ? 'house' : 'airplane rotate-270'}"></i>
                    <h6 class="mb-0 font-small">${this.getAttribute('brand')}</h6>
                </div>
                <h6 class="mb-0 font-small text-grey-darken3">${this.getAttribute('title')}</h6>
            </div>
        `
    }
}

window.customElements.define('selected-city', selectedCity);