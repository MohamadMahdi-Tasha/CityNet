// Custom Element
class Header extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <!--Top Side Header-->
            <header class="bg-danger">
                <!--Right Side-->
                <div>
                    <img src="assets/base/img/img-logo-typo.svg" alt="سیتی نت">
                    <ul>
                        <li><a href="index.html">صفحه اصلی</a></li>
                        <li><a href="blog.html">بلاگ</a></li>
                        <li><a href="about-us.html">درباره ما</a></li>
                        <li><a href="contact-us.html">تماس با ما</a></li>
                    </ul>
                </div>
                <!--Left Side-->
                <div>
                    <button class="my-drop-down-toggler">
                        <span id="currency-header-per">ریال</span>
                        (<span id="currency-header-eng">IRR</span>)
                    </button>
                    <button>پیگیری خرید</button>
                    <button>ورود/ثبت نام</button>
                </div>
            </header>
        `
    }
}

// Defining Custom Element
window.customElements.define('custom-header', Header);