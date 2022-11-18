class MobileNav extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <nav ${(this.getAttribute('data-opened') !== null) ? 'data-opened' : ''} id="mobile-nav" class="position-fixed bg-primary-base p-2 col-8 shadow">
                <div class="mb-3 d-flex align-items-center justify-content-between">
                    <img src="assets/base/img/img-logo-typo.svg" alt="سیتی نت" width="100px">
                    <button data-target="mobile-nav" class="toggler border rounded-1 ripple-button bg-transparent text-white"><i class="bi bi-x"></i></button>
                </div>
                <ul class="list-unstyled mb-0 p-0 gap-3 d-flex flex-column">
                    <li><a class="text-white font-small d-block header-links" href="index.html">صفحه اصلی</a></li>
                    <li><a class="text-white font-small d-block header-links" href="blog.html">بلاگ</a></li>
                    <li><a class="text-white font-small d-block header-links" href="about-us.html">درباره ما</a></li>
                    <li><a class="text-white font-small d-block header-links" href="contact-us.html">تماس با ما</a></li>
                </ul>
                <div class="logged-in-only-item">
                    <hr class="text-white">
                    <div class="p-3 bg-grey-lighten3 rounded-3 mb-3">
                        <h6 class="font-small text-grey-darken1 user-name"></h6>
                        <h6 class="font-small text-grey-darken1 mb-3">کاربر:<span class="user-number"></span></h6>
                        <div class="d-flex align-items-center justify-content-between">
                            <h6 class="text-grey-darken1 font-small mb-0">کیف پول (<span>IRR</span>)</h6>
                            <h6 class="text-grey-darken1 font-small mb-0">ریال <span class="text-primary-base user-cash"></span></h6>
                        </div>
                    </div>
                    <ul class="list-unstyled mb-0 p-0 gap-3 d-flex flex-column">
                        <li><a class="text-white font-small d-block header-links">ویرایش مشخصات</a></li>
                        <li><a class="text-white font-small d-block header-links">پشتیبانی</a></li>
                        <li><a class="text-white font-small d-block header-links">شارژ کیف پول</a></li>
                        <li><a class="text-white font-small d-block header-links">پیگیری,کمسل و استرداد</a></li>
                        <li><a class="text-white font-small d-block header-links">گزارش</a></li>
                        <li><a class="text-white font-small d-block header-links">گزارش</a></li>
                        <li><a class="text-white font-small d-block header-links">گزارش</a></li>
                        <li><a class="text-white font-small d-block header-links exit-account">خروج</a></li>
                    </ul>
                </div>
            </nav>
            <div id="mobile-nav-bg" class="position-fixed h-100 col-12 toggler" data-target="mobile-nav"></div>
        `
    }
}

window.customElements.define('mobile-nav', MobileNav);