class selectedCity extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div>
                <div>
                    <i class="bi bi-${(this.getAttribute('primary') !== null) ? 'house' : 'plane rotate-270'}"></i>
                    <h6>${this.getAttribute('brand')}</h6>
                </div>
                <h6>${this.getAttribute('title')}</h6>
            </div>
        `
    }
}

window.customElements.define('selected-city', selectedCity);