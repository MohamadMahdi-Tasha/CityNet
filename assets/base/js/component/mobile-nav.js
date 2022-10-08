// Custom Header
class MobileNav extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <nav>
            
            </nav>
        `
    }
}

// Defining Our Custom Header
window.customElements.define('MobileNav', MobileNav);