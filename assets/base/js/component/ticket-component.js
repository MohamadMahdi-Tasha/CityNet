class TicketComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div>
                <div>
                    
                </div>
            </div>
        `
    }
}

window.customElements.define('ticket-component', TicketComponent);