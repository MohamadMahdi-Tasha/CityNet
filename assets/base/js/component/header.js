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
                        <button data-target="login-modal" class="logged-out-only-item toggler ripple-button bg-transparent border rounded-1 px-lg-4 py-lg-2 px-2 py-1 font-small text-white fw-bold">
                            <span class="d-lg-block d-none">ورود/ثبت نام</span>
                            <i class="bi bi-person d-lg-none d-block"></i>
                        </button>
                        <div class="my-drop-down-holder d-lg-block d-none logged-in-only-item">
                            <button class="my-drop-down-toggler ripple-button bg-transparent border rounded-1 px-lg-4 py-lg-2 px-2 py-1 font-small text-white fw-bold">
                                <i class="bi bi-check-circle-fill check-circle-icon-custome"></i>
                                <i class="bi bi-person ms-2"></i>
                                حساب کاربری
                                <i class="bi bi-chevron-down me-2"></i>
                            </button>
                            <div class="my-drop-down auto-size left">
                                <div class="px-3 py-2">
                                    <h6 class="font-small fw-bold" id='header-user-name'></h6>
                                    <h6 class="font-small-xl text-grey-darken1">کاربر:<span id='header-user-number'></span></h6>
                                    <div class="d-flex justify-content-between gap-2 p-3 rounded-3 bg-grey-lighten3">
                                        <h6 class="font-small text-grey-darken1 mb-0">کیف پول (<span>IRR</span>)</h6>
                                        <h6 class="font-small text-grey-lighten1 mb-0">ریال <span class="text-primary-base" id='header-user-cash'></span></h6>
                                    </div>
                                </div>
                                <hr class="m-0">
                                <ul class="list-unstyled p-0 m-0">
                                    <li><a class="d-block" href="#"><button class="buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black px-2 py-2"><i class="bi bi-person  ms-3"></i>ویرایش مشخصات</button></a></li>
                                    <li><a class="d-block" href="#"><button class="buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black px-2 py-2"><i class="bi bi-bell  ms-3"></i>پشتیبانی</button></a></li>
                                    <li><a class="d-block" href="#"><button class="buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black px-2 py-2"><i class="bi bi-wallet  ms-3"></i>شارژ کیف پول</button></a></li>
                                    <li><a class="d-block" href="#"><button class="buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black px-2 py-2"><i class="bi bi-ticket  ms-3"></i>پیگیری,کنسل و استرداد</button></a></li>
                                    <li class="my-collapse-holder logged-in-dropdown-header">
                                        <button class="my-collapse-toggler d-flex justify-content-between align-items-center buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black px-2 py-2">
                                            <span>
                                                <i class="bi bi-file-earmark ms-3"></i>
                                                گزارش
                                            </span>
                                            <i class="bi bi-chevron-down"></i>
                                        </button>
                                        <div class="my-collapse">
                                            <button class="my-collapse-toggler buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black ps-2 pe-4 py-2"><i class="bi bi-file-earmark ms-3"></i>گزارش</button>
                                            <button class="my-collapse-toggler buttons-in-logged-in-dropdown-header ripple-button text-end bg-transparent border-0 font-small inner-ripple-black ps-2 pe-4 py-2"><i class="bi bi-file-earmark ms-3"></i>گزارش</button>                                        
                                        </div>
                                    </li>
                                    <li><button class="buttons-in-logged-in-dropdown-header exit-account ripple-button text-end bg-transparent border-0 font-small px-2 py-2 text-pink"><i class="bi bi-person ms-3"></i>خروج</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `
    }
}

window.customElements.define('custom-header', Header);
