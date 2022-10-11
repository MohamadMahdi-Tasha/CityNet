// Interactive Components
class intractiveComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        if (this.getAttribute('type') === "city") {
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
        } else if (this.getAttribute('type') === "calender"){
            this.innerHTML = `
                <button class="my-drop-down-toggler col-12 calender intractive-component rounded-4 bg-white text-end p-3 position-relative">
                    <span class="my-placeholder position-absolute font-small">
                        <i class="bi bi-calendar4-week ms-2"></i>
                        ${this.getAttribute('placeholder')}
                    </span>
                </button>
                <div id="app">
                    <date-picker @select="select" mode="single"></date-picker>
                </div>
            `
        }
    }
}

// Defining Our Intractive Components
window.customElements.define('intractive-component', intractiveComponent);

// Defining New Vue Component For Calendar Component
new Vue({
    el:'#app',
    components: {datePicker},
    methods: {
        select(date) {
            const newH5 = document.createElement('h5');
            const calenderComponent = this.$el.previousElementSibling;

            calenderComponent.classList.add('will-not-close')
            newH5.className = 'font-small text-black-lighten3 selected-date mb-0';
            newH5.textContent = date.toString();

            if (calenderComponent.lastElementChild.classList.contains('selected-date')) {
                calenderComponent.lastElementChild.remove();
                calenderComponent.appendChild(newH5)
            } else {
                calenderComponent.appendChild(newH5)
            }
        },
    }
})