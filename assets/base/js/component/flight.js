class flight extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
        <div class="ways-inner-page" active id="one-way">
            <div class="pb-3 d-flex flex-column gap-4">
                <div class="row gx-2 gy-4 position-relative flex-lg-row flex-column">
                    <intractive-component id="start-city-intractive-components" type="city" class="col-lg-6 col-12" placeholder="شهر یا فرودگاه مبدا"></intractive-component>
                    <button class="switch-button"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component id="end-city-intractive-components" type="city" class="col-lg-6 col-12" placeholder="شهر یا فرودگاه مقصد"></intractive-component>
                </div>
                <div class="row gx-2 gy-4 position-relative flex-lg-row flex-column">
                    <intractive-component id="start-date-intractive-components" type="calender" class="col-lg-3 col-12" placeholder="تاریخ پرواز"></intractive-component>
                    <intractive-component disabled type="calender" class="col-lg-3 col-12" placeholder="تاریخ پرواز"></intractive-component>
                    <intractive-component id="passanger-count-intractive-components" type="passenger-count" class="col-lg-3 col-12"></intractive-component>
                    <button id="search-for-ticket-button" class="col-lg-3 col-12 rounded-4 submit-button ripple-button">جستجو</button>
                </div>
            </div>
        </div>
        `
    }
}

window.customElements.define('flight-component', flight);