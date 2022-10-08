// Custom Header
class CityComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="city-component" onclick="this.firstElementChild.focus()">
                <input type="text" class="border-0 bg-transparent">
                <h6 class="my-components-placeholder">${this.getAttribute('placeholder')}</h6>
            </div>
        `
    }
}

// Defining Our Custom Header
window.customElements.define('city-component', CityComponent);