class Header extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <!--Top Side Header-->
            <header ${(this.getAttribute('not-home') !== null) ? "class='bg-darkest-blue my-header'" : 'my-header'}>
                <div class="d-flex flex-lg-row flex-row-reverse justify-content-between px-lg-5 py-lg-3 px-2 py-2 align-items-center container-xxl">
                    <!--Right Side-->
                    <div class="d-flex gap-3 align-items-center">
                        <img src="assets/base/img/img-logo-typo.svg" alt="سیتی نت" width="100px">
                        <ul class="list-unstyled mb-0 gap-3 d-lg-flex d-none p-0">
                            <li><a class="fw-bold text-white font-small header-links" href="index.html">صفحه اصلی</a></li>
                            <li><a class="fw-bold text-white font-small header-links" href="blog.html">بلاگ</a></li>
                            <li><a class="fw-bold text-white font-small header-links" href="about-us.html">درباره ما</a></li>
                            <li><a class="fw-bold text-white font-small header-links" href="contact-us.html">تماس با ما</a></li>
                        </ul>
                    </div>
                    <!--Left Side-->
                    <div class="d-flex align-items-center gap-3">
                        <button data-target="mobile-nav" class="toggler d-lg-none d-block ripple-button bg-transparent border-0 rounded-1 px-2 py-1 font-small text-white fw-bold"><i class="bg bi-list"></i></button>
                        <div class="my-drop-down-holder">
                            <button class="my-drop-down-toggler d-flex ripple-button bg-transparent border-0 rounded-1 px-lg-4 py-lg-2 px-2 py-1 font-small text-white fw-bold">
                                <span class="d-lg-block d-none" id="currency-header-per"></span>
                                <span class="d-lg-block d-none me-2">(</span>
                                <span class="d-lg-block d-none" id="currency-header-en"></span>
                                <span class="d-lg-block d-none">)</span>
                                <i class="d-lg-block d-none bi bi-chevron-down me-2"></i>
                                <i class="d-lg-none d-block bi bi-flag"></i>
                            </button>
                            <div class="my-drop-down auto-size">
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="IRR">
                                    <span>
                                        <img src="assets/base/img/header/img-ir.svg" alt="ایران" width="20px" height="20px" class="rounded-2 ms-1">
                                        <span>ریال</span>
                                    </span>
                                    <span>(IRR)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="USD">
                                    <span>
                                        <img src="assets/base/img/header/img-us.svg" alt="امریکا" width="20px" height="20px" class="rounded-2 ms-1">
                                        <span>دلار</span>
                                    </span>
                                    <span>(USD)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="EUR">
                                    <span>
                                        <img src="assets/base/img/header/img-eu.svg" alt="یورو" width="20px" height="20px" class="rounded-2 ms-1">
                                        <span>یورو</span>
                                    </span>
                                    <span>(EUR)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="TRY">
                                    <span>
                                        <img src="assets/base/img/header/img-tr.svg" alt="ترکیه" width="20px" height="20px" class="rounded-2 ms-1">
                                        <span>لیر ترکیه</span>
                                    </span>
                                    <span>(TRY)</span>
                                </button>
                                <button class="d-flex col-12 bg-transparent border-0 p-2 font-small justify-content-between align-items-center gap-2 flex-wrap ripple-button currency-changer text-secondary-lighten1" data-item-currency="IQD">
                                    <span>
                                        <img src="assets/base/img/header/img-iq.svg" alt="عراق" width="20px" height="20px" class="rounded-2 ms-1">
                                        <span>دینار عراق</span>
                                    </span>
                                    <span>(IQD)</span>
                                </button>
                            </div>
                        </div>
                        <button class="d-lg-block d-none ripple-button bg-transparent border-0 rounded-1 px-4 py-2 font-small text-white fw-bold">پیگیری خرید</button>
                        <button data-target="login-modal" class="toggler ripple-button bg-transparent border rounded-1 px-lg-4 py-lg-2 px-2 py-1 font-small text-white fw-bold">
                            <span class="d-lg-block d-none">ورود/ثبت نام</span>
                            <i class="bi bi-person d-lg-none d-block"></i>
                        </button>
                    </div>
                </div>
            </header>
        `
    }
}

window.customElements.define('custom-header', Header);