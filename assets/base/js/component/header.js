// Custom Header
class Header extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <!--Top Side Header-->
            <header ${(this.getAttribute('not-home') !== null) ? "class='bg-accent-darken4'" : ''}>
                <div class="d-flex justify-content-between px-lg-5 py-lg-3 px-2 py-2 align-items-center container-xxl">
                    <!--Right Side-->
                    <div class="d-flex gap-3 flex-lg-row flex-row-reverse align-items-center justify-content-lg-start justify-content-between col-lg-auto col-12">
                        <img src="assets/base/img/img-logo-typo.svg" alt="سیتی نت" width="100px">
                        <ul class="list-unstyled mb-0 gap-3 d-flex p-0">
                            <li class="d-lg-none d-block"><button data-target="mobile-nav" class="toggler border rounded-1 ripple-button bg-transparent text-white"><i class="bi bi-list"></i></button></li>
                            <li class="d-lg-none d-block"><button data-target="login-modal" class="border toggler rounded-1 ripple-button bg-transparent text-white"><i class="bi bi-person"></i></button></li>
                            <li class="d-lg-none d-block"><button class="border rounded-1 ripple-button bg-transparent text-white"><i class="bi bi-flag"></i></button></li>
                            <li class="d-lg-block d-none"><a class="fw-bold text-white font-small header-links" href="index.html">صفحه اصلی</a></li>
                            <li class="d-lg-block d-none"><a class="fw-bold text-white font-small header-links" href="blog.html">بلاگ</a></li>
                            <li class="d-lg-block d-none"><a class="fw-bold text-white font-small header-links" href="about-us.html">درباره ما</a></li>
                            <li class="d-lg-block d-none"><a class="fw-bold text-white font-small header-links" href="contact-us.html">تماس با ما</a></li>
                        </ul>
                    </div>
                    <!--Left Side-->
                    <div class="d-lg-flex d-none gap-3">
                        <div class="my-drop-down-holder">
                            <button class="my-drop-down-toggler ripple-button bg-transparent border-0 rounded-1 px-4 py-2 font-small text-white fw-bold">
                                <span id="currency-header-per">ریال</span>
                                (<span id="currency-header-eng">IRR</span>)
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="my-drop-down">
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="IRR">
                                    <span>
                                        <img src="assets/base/img/header/img-ir.svg" alt="ایران" width="20px" height="20px" class="rounded-2 ms-1">
                                        ریال
                                    </span>
                                    <span>(IRR)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="USD">
                                    <span>
                                        <img src="assets/base/img/header/img-us.svg" alt="امریکا" width="20px" height="20px" class="rounded-2 ms-1">
                                        دلار
                                    </span>
                                    <span>(USD)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="EUR">
                                    <span>
                                        <img src="assets/base/img/header/img-eu.svg" alt="یورو" width="20px" height="20px" class="rounded-2 ms-1">
                                        یورو
                                    </span>
                                    <span>(EUR)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="TRY">
                                    <span>
                                        <img src="assets/base/img/header/img-tr.svg" alt="ترکیه" width="20px" height="20px" class="rounded-2 ms-1">
                                        لیر ترکیه
                                    </span>
                                    <span>(TRY)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="IQD">
                                    <span>
                                        <img src="assets/base/img/header/img-iq.svg" alt="عراق" width="20px" height="20px" class="rounded-2 ms-1">
                                        دینار عراق
                                    </span>
                                    <span>(IQD)</span>
                                </button>
                            </div>
                        </div>
                        <button class="ripple-button bg-transparent border-0 rounded-1 px-4 py-2 font-small text-white fw-bold">پیگیری خرید</button>
                        <button data-target="login-modal" class="toggler ripple-button bg-transparent border rounded-1 px-4 py-2 font-small text-white fw-bold">ورود/ثبت نام</button>
                    </div>
                </div>
            </header>
        `
    }
}

// Defining Our Custom Header
window.customElements.define('custom-header', Header);