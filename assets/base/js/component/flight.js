class flight extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
        <form action="#" class="d-flex flex-wrap gap-3 mb-3">
            <div class="d-flex align-items-center">
                <input class="ways-toggler ms-2" data-target="one-way" checked name="ways" id="one-way-input" type="radio">
                <label class="text-secondary-lighten3 font-small" for="one-way-input">یک طرفه</label>
            </div>
            <div class="d-flex align-items-center">
                <input class="ways-toggler ms-2" data-target="two-way" name="ways" id="two-way-input" type="radio">
                <label class="text-secondary-lighten3 font-small" for="two-way-input">رفت و برگشت</label>
            </div>
            <div class="d-flex align-items-center">
                <input class="ways-toggler ms-2" data-target="more-way" name="ways" id="more-way-input" type="radio">
                <label class="text-secondary-lighten3 font-small" for="more-way-input">چند مسیره</label>
            </div>
        </form>
        <div class="ways-inner-page" active id="one-way">
            <div class="pb-3 d-flex flex-column gap-4">
                <div class="row gx-2 gy-4 position-relative flex-lg-row flex-column">
                    <intractive-component type="city" class="col-lg-6 col-12" placeholder="شهر یا فرودگاه مبدا"></intractive-component>
                    <button class="switch-button"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component type="city" class="col-lg-6 col-12" placeholder="شهر یا فرودگاه مقصد"></intractive-component>
                </div>
                <div class="row gx-2 gy-4 position-relative flex-lg-row flex-column">
                    <intractive-component type="calender" class="col-lg-3 col-12" placeholder="تاریخ پرواز"></intractive-component>
                    <intractive-component disabled type="calender" class="col-lg-3 col-12" placeholder="تاریخ پرواز"></intractive-component>
                    <intractive-component type="passenger-count" class="col-lg-3 col-12"></intractive-component>
                    <button class="col-lg-3 col-12 rounded-4 submit-button ripple-button">جستجو</button>
                </div>
            </div>
        </div>
        <div class="ways-inner-page" id="two-way">
            <div class="pb-3 d-flex flex-column gap-4">
                <div class="row gx-2 gy-4 position-relative flex-lg-row flex-column">
                    <intractive-component type="city" class="col-lg-6 col-12" placeholder="شهر یا فرودگاه مبدا"></intractive-component>
                    <button class="switch-button"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component type="city" class="col-lg-6 col-12" placeholder="شهر یا فرودگاه مقصد"></intractive-component>
                </div>
                <div class="row gx-2 gy-4 position-relative flex-lg-row flex-column">
                    <intractive-component type="calender" class="col-lg-3 col-12" placeholder="تاریخ رفت"></intractive-component>
                    <intractive-component type="calender" class="col-lg-3 col-12" placeholder="تاریخ برگشت"></intractive-component>
                    <intractive-component type="passenger-count" class="col-lg-3 col-12"></intractive-component>
                    <button class="col-lg-3 col-12 rounded-4 submit-button ripple-button">جستجو</button>
                </div>
            </div>
        </div>
        <div class="ways-inner-page" id="more-way">
            <div class="pb-3 d-flex flex-column gap-4">
                <div id="first-route" class="row gx-2 gy-4 flex-nowrap position-relative flex-lg-row flex-column">
                    <button class="col-1 route-close-button bg-grey-lighten1 border-0 rounded-3 ripple-button"><i class="bi bi-x"></i></button>
                    <intractive-component type="city" class="col-lg-3 col-12" placeholder="مبدا اول"></intractive-component>
                    <button class="switch-button more-ways"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component type="city" class="col-lg-4 col-12" placeholder="مقصد اول"></intractive-component>
                    <intractive-component type="calender" class="col-lg-4 col-12" placeholder="تاریخ پرواز"></intractive-component>
                </div>
                <div id="second-route" class="row gx-2 gy-4 flex-nowrap position-relative flex-lg-row flex-column">
                    <button class="col-1 route-close-button bg-grey-lighten1 border-0 rounded-3 ripple-button"><i class="bi bi-x"></i></button>
                    <intractive-component type="city" class="col-lg-3 col-12" placeholder="مبدا دوم"></intractive-component>
                    <button class="switch-button more-ways"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component type="city" class="col-lg-4 col-12" placeholder="مقصد دوم"></intractive-component>
                    <intractive-component type="calender" class="col-lg-4 col-12" placeholder="تاریخ پرواز"></intractive-component>
                </div>
                <div id="third-route" class="d-none gx-2 gy-4 flex-nowrap position-relative flex-lg-row flex-column">
                    <button class="col-1 route-close-button bg-grey-lighten1 border-0 rounded-3 ripple-button"><i class="bi bi-x"></i></button>
                    <intractive-component type="city" class="col-lg-3 col-12" placeholder="مبدا سوم"></intractive-component>
                    <button class="switch-button more-ways"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component type="city" class="col-lg-4 col-12" placeholder="مقصد سوم"></intractive-component>
                    <intractive-component type="calender" class="col-lg-4 col-12" placeholder="تاریخ پرواز"></intractive-component>
                </div>
                <div id="fourth-route" class="d-none gx-2 gy-4 flex-nowrap position-relative flex-lg-row flex-column">
                    <button class="col-1 route-close-button bg-grey-lighten1 border-0 rounded-3 ripple-button"><i class="bi bi-x"></i></button>
                    <intractive-component type="city" class="col-lg-3 col-12" placeholder="مبدا چهارم"></intractive-component>
                    <button class="switch-button more-ways"><i class="bi bi-arrow-left-right"></i></button>
                    <intractive-component type="city" class="col-lg-4 col-12" placeholder="مقصد چهارم"></intractive-component>
                    <intractive-component type="calender" class="col-lg-4 col-12" placeholder="تاریخ پرواز"></intractive-component>
                </div>
                <div class="row gx-2 gy-4 flex-nowrap flex-lg-row flex-column">
                    <button class="add-route-btn col-lg-4 col-12 border-0 ripple-button bg-grey-lighten1 text-black font-small rounded-3">
                        <span class="text-grey-darken1 ms-1">+</span>
                        افزودن مسیر
                    </button>
                    <intractive-component type="passenger-count" class="col-lg-4 col-12"></intractive-component>
                    <button class="col-lg-4 col-12 rounded-4 submit-button ripple-button">جستجو</button>
                </div>
            </div>
        </div>
        `
    }
}

// Defining Our Flight Component
window.customElements.define('flight-component', flight);