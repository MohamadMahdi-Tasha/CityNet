// Custom Header
class intractiveComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="my-drop-down-holder">
                <button data-selected-city="none" class="my-drop-down-toggler city intractive-component col-12 rounded-4 bg-white text-end p-3 position-relative">
                    <span class="my-placeholder position-absolute font-small">${this.getAttribute('placeholder')}</span>
                </button>
                <div class="my-drop-down col-12 p-3">
                    <h6 class="text-grey-darken4 mb-4">شهر و فرودگاه های پرتردد</h6>
                    <div class="position-relative">
                        <div class="city-component-white-overlay position-absolute"></div>
                        <ul class="list-unstyled p-0 m-0">
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">تهران</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">کیش</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">استانبول</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">دبی</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">مشهد</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">اهواز</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">انکارا</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">لندن</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">تبریز</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">قشم</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">تورنتو</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">ایروان</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">بندر عباس</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">شیراز</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">مسقط</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">پکن</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">رشت</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">اصفهان</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">نجف</button></li>                    
                            <li class="col p-0 m-0"><button class="city-component-drop-down-button border-0 rounded-2 bg-transparent ripple-button">باکو</button></li>                    
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
}

// Defining Our Custom Header
window.customElements.define('intractive-component', intractiveComponent);