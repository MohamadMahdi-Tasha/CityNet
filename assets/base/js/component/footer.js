// Custom Footer
class Footer extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div>
                    <div>
                        <img src="assets/base/img/footer/img-logo-typo.png" alt="سیتی نت">
                        <ul>
                            <li><a href="#">صفحه اصلی</a></li>
                            <li><a href="#">تماس با ما</a></li>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">قوانین و مقررات</a></li>
                        </ul>
                    </div>
                    <div>
                        <div><img src="assets/base/img/footer/img-nerkhbilit.png" alt="نرخ بیلیط"></div>
                        <div><img src="assets/base/img/footer/img-havapeymaei-keshvari.png" alt="هواپیمایی کشوری"></div>
                        <div><img src="assets/base/img/footer/img-hoghoghe-mosafer.png" alt="حقوق مسافر"></div>
                    </div>
                </div>
                <div>
                    <h6>تمامی حقوق متعلق به سیتی نت میباشد.</h6>
                    <h6>
                     <a href="#">طراحی سایت آژانس مسافرتی</a>
                     توسط سیتی نت
                    </h6>
                </div>
            </footer>
        `
    }
}

// Defining Our Custom Footer
window.customElements.define('custom-footer', Footer);