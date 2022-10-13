// Interactive Components
class intractiveComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === "city") {
            if (this.getAttribute('disabled') === null) {
                this.innerHTML = `
                    <div class="my-drop-down-holder">
                        <button data-selected-city="null" class="my-drop-down-toggler col-12 city intractive-component rounded-4 bg-white text-end p-3 position-relative">
                    <span class="my-placeholder position-absolute font-small">${this.getAttribute('placeholder')}</span>
                </button>
                        <div class="my-drop-down col-12 p-3">
                    <h6 class="text-black-lighten3 font-small mb-4">شهر و فرودگاه های پرتردد</h6>
                    <div class="position-relative">
                        <div class="city-component-white-overlay position-absolute"></div>
                        <ul class="list-unstyled p-0 m-0">
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">تهران</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">کیش</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">استانبول</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">دبی</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">مشهد</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">اهواز</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">انکارا</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">لندن</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">تبریز</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">قشم</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">تورنتو</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">ایروان</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">بندر عباس</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">شیراز</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">مسقط</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">پکن</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">رشت</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">اصفهان</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">نجف</button></li>                    
                            <li class="p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">باکو</button></li>                    
                        </ul>
                    </div>
                </div>
                    </div>
                `
            } else {
                this.innerHTML = `
                    <button class="col-12 city intractive-component disabled rounded-4 bg-white text-end p-3 position-relative">
                        <span class="my-placeholder position-absolute font-small">${this.getAttribute('placeholder')}</span>
                    </button>
                `
            }
        } else if (this.getAttribute('type') === "calender"){
            if (this.getAttribute('disabled') === null) {
                const randomDataPickerParentId = `data-picker-parent-number-${Math.ceil(Math.random() * 100)}`
                this.innerHTML = `
                    <button data-date="null" class="my-drop-down-toggler col-12 calender intractive-component rounded-4 bg-white text-end p-3 position-relative">
                        <span class="my-placeholder position-absolute font-small">
                            <i class="bi bi-calendar4-week ms-2"></i>
                            ${this.getAttribute('placeholder')}
                        </span>
                    </button>
                    <div id="${randomDataPickerParentId}">
                        <date-picker @select="select" mode="single"></date-picker>
                    </div>
                `
                // Defining New Vue Component For Calendar Component
                new Vue({
                    el:`#${randomDataPickerParentId}`,
                    components: {datePicker},
                    methods: {
                        select(date) {
                            const newH6 = document.createElement('h6');
                            const calenderComponent = this.$el.previousElementSibling;

                            calenderComponent.classList.add('will-not-close')
                            calenderComponent.setAttribute('data-date', date.toString())
                            newH6.className = 'font-small text-black-lighten3 selected-date mb-0';
                            newH6.textContent = date.toString();

                            if (calenderComponent.lastElementChild.classList.contains('selected-date')) {
                                calenderComponent.lastElementChild.remove();
                                calenderComponent.appendChild(newH6)
                            } else {
                                calenderComponent.appendChild(newH6)
                            }
                        },
                    }
                })
            } else {
                this.innerHTML = `
                    <button class="col-12 city intractive-component disabled rounded-4 bg-white text-end p-3 position-relative">
                        <span class="my-placeholder position-absolute font-small">
                            <i class="bi bi-calendar4-week ms-2"></i>
                            بدون بازگشت
                        </span>
                    </button>
                `
            }
        } else if (this.getAttribute('type') === "passenger-count") {
            this.innerHTML = `
                <div class="my-drop-down-holder">
                    <button data-passenger-count="1" data-passenger-class="اکونومی" class="my-drop-down-toggler will-not-close col-12 passenger-count intractive-component rounded-4 bg-white text-end p-3 position-relative">
                        <span class="my-placeholder position-absolute font-small">مسافران/کلاس کابین</span>
                        <div class="d-flex align-items-center">
                            <i class="bi bi-person text-darkGrey-lighten2 ms-2"></i>
                            <h6 class="mb-0 font-small text-darkGrey-lighten2">
                                <span>1</span>
                                مسافر,
                                <span>اکونومی</span>
                            </h6>
                        </div>
                    </button>
                    <div class="my-drop-down col-12 p-3">
                        <div class="adult d-flex mb-3 align-items-center justify-content-between">
                            <h6 class="font-small mb-0">
                                بزرگسال
                                <span class="text-darkGrey-lighten2">(+12)</span> 
                            </h6>
                            <div class="d-flex align-items-center gap-2">
                                <button class="plus-minus-button border-0 bg-grey-lighten3 rounded-3 text-primary-base">+</button>
                                <span class="font-small">1</span>
                                <button class="plus-minus-button border-0 bg-grey-lighten3 rounded-3 text-grey-darken1">-</button>
                            </div>
                        </div>
                        <div class="kid d-flex mb-3 align-items-center justify-content-between">
                            <h6 class="font-small mb-0">
                                کودک
                                <span class="text-darkGrey-lighten2">
                                (
                                2 تا
                                12
                                )
                                </span> 
                            </h6>
                            <div class="d-flex align-items-center gap-2">
                                <button class="plus-minus-button border-0 bg-grey-lighten3 rounded-3 text-primary-base">+</button>
                                <span class="font-small">0</span>
                                <button class="plus-minus-button border-0 bg-grey-lighten3 rounded-3 text-grey-darken1">-</button>
                            </div>
                        </div>
                        <div class="new-born d-flex mb-3 align-items-center justify-content-between">
                            <h6 class="font-small mb-0">
                                نوزاد
                                <span class="text-darkGrey-lighten2">(-2)</span> 
                            </h6>
                            <div class="d-flex align-items-center gap-2">
                                <button class="plus-minus-button border-0 bg-grey-lighten3 rounded-3 text-primary-base">+</button>
                                <span class="font-small">0</span>
                                <button class="plus-minus-button border-0 bg-grey-lighten3 rounded-3 text-grey-darken1">-</button>
                            </div>
                        </div>
                        <hr>
                        <div class="my-drop-down-holder">
                            <button class="border p-2 rounded-3 font-small bg-white my-drop-down-toggler d-flex align-items-center justify-content-between col-12">
                                <span>اکونومی</span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="my-drop-down init-drop-down col-12">
                                <ul class="col-12 p-0 m-0 list-unstyled">
                                    <li class="col-12"><button class="p-2 font-small active col-12 ripple-button passenger-class-select-button bg-transparent border-0 text-end">اکونومی</button></li>
                                    <li class="col-12"><button class="p-2 font-small col-12 ripple-button passenger-class-select-button bg-transparent border-0 text-end">بیزینس</button></li>
                                    <li class="col-12"><button class="p-2 font-small col-12 ripple-button passenger-class-select-button bg-transparent border-0 text-end">پریمیوم</button></li>
                                    <li class="col-12"><button class="p-2 font-small col-12 ripple-button passenger-class-select-button bg-transparent border-0 text-end">فرست</button></li>
                                    <li class="col-12"><button class="p-2 font-small col-12 ripple-button passenger-class-select-button bg-transparent border-0 text-end">همه کلاس ها</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        } else if (this.getAttribute('type') === "input") {
            if (this.getAttribute('disabled') === null) {
                this.innerHTML = `
                <div class="d-flex col-12 input intractive-component rounded-4 bg-white text-end p-3 position-relative">
                    <span class="my-placeholder position-absolute font-small">${this.getAttribute('placeholder')}</span>
                    <input class="col-12 bg-transparent h-100 border-0" type="${this.getAttribute('input-type')}" required>
                </div>
            `
            } else {
                this.innerHTML = `
                <div class="d-flex disabled col-12 intractive-component rounded-4 bg-white text-end p-3 position-relative">
                    <span class="my-placeholder right-0 bg-transparent position-absolute font-small">0098</span>
                </div>
            `
            }
        }
    }
}

// Defining Our Intractive Components
window.customElements.define('intractive-component', intractiveComponent);