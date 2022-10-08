// Custom Header
class MobileNav extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <h1>asdasd</h1>
            </nav>
        `
    }
}

// Defining Our Custom Header
window.customElements.define('mobile-nav', MobileNav);