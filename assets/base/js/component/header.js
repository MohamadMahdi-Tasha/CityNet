// Custom Element
class Header extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <!--Top Side Header-->
            <header ${(this.getAttribute('not-home') !== null) ? "class='bg-accent-darken4'" : null}>
                <div class="d-flex justify-content-between px-5 py-3 align-items-center container-xxl">
                    <!--Right Side-->
                    <div class="d-flex align-items-center">
                        <img src="assets/base/img/img-logo-typo.svg" alt="سیتی نت" width="100px">
                        <ul class="list-unstyled d-flex mb-0 gap-3">
                            <li><a class="text-white font-small header-links" href="index.html">صفحه اصلی</a></li>
                            <li><a class="text-white font-small header-links" href="blog.html">بلاگ</a></li>
                            <li><a class="text-white font-small header-links" href="about-us.html">درباره ما</a></li>
                            <li><a class="text-white font-small header-links" href="contact-us.html">تماس با ما</a></li>
                        </ul>
                    </div>
                    <!--Left Side-->
                    <div class="d-flex gap-3">
                        <div class="my-drop-down-holder">
                            <button class="my-drop-down-toggler ripple-button bg-transparent border-0 rounded-1 px-4 py-2 font-small text-white fw-bold">
                                <span id="currency-header-per">ریال</span>
                                (<span id="currency-header-eng">IRR</span>)
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="my-drop-down">
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button" data-item-currency="IRR">
                                    <span>
                                        <img src="assets/base/img/header/img-ir.svg" alt="ایران" width="20px" height="20px" class="rounded-2 ms-1">
                                        ریال
                                    </span>
                                    <span>(IRR)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button" data-item-currency="USD">
                                    <span>
                                        <img src="assets/base/img/header/img-us.svg" alt="امریکا" width="20px" height="20px" class="rounded-2 ms-1">
                                        دلار
                                    </span>
                                    <span>(USD)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button" data-item-currency="EUR">
                                    <span>
                                        <img src="assets/base/img/header/img-eu.svg" alt="یورو" width="20px" height="20px" class="rounded-2 ms-1">
                                        یورو
                                    </span>
                                    <span>(EUR)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button" data-item-currency="TRY">
                                    <span>
                                        <img src="assets/base/img/header/img-tr.svg" alt="ترکیه" width="20px" height="20px" class="rounded-2 ms-1">
                                        لیر ترکیه
                                    </span>
                                    <span>(TRY)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button" data-item-currency="IQD">
                                    <span>
                                        <img src="assets/base/img/header/img-iq.svg" alt="عراق" width="20px" height="20px" class="rounded-2 ms-1">
                                        دینار عراق
                                    </span>
                                    <span>(IQD)</span>
                                </button>
                            </div>
                        </div>
                        <button class="ripple-button bg-transparent border-0 rounded-1 px-4 py-2 font-small text-white fw-bold">پیگیری خرید</button>
                        <button class="ripple-button bg-transparent border rounded-1 px-4 py-2 font-small text-white fw-bold">ورود/ثبت نام</button>
                    </div>
                </div>
            </header>
        `
    }
}

// Defining Custom Element
window.customElements.define('custom-header', Header);