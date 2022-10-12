// Custom Footer
class Footer extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <footer class="d-flex justify-content-center">
                <div class="container-xxl px-lg-5 py-lg-3 px-2 py-2">
                    <div class="d-flex flex-lg-row flex-column align-items-center justify-content-between mb-4">
                        <div>
                            <img src="assets/base/img/footer/img-logo-typo.png" alt="سیتی نت" class="mb-4 col-lg-7 col-12">
                            <ul class="d-flex flex-lg-row flex-column text-lg-start text-center list-unstyled gap-3 p-0 m-0">
                                <li><a class="text-grey-darken1 transition-3 font-small text-hover-pink" href="#">صفحه اصلی</a></li>
                                <li><a class="text-grey-darken1 transition-3 font-small text-hover-pink" href="#">تماس با ما</a></li>
                                <li><a class="text-grey-darken1 transition-3 font-small text-hover-pink" href="#">درباره ما</a></li>
                                <li><a class="text-grey-darken1 transition-3 font-small text-hover-pink" href="#">قوانین و مقررات</a></li>
                            </ul>
                        </div>
                        <div class="d-flex gap-3">
                            <div class="rounded-3 bg-white p-3"><img width="75px" src="assets/base/img/footer/img-nerkhebilit.png" alt="نرخ بیلیط"></div>
                            <div class="rounded-3 bg-white p-3"><img width="75px" src="assets/base/img/footer/img-havapeymaei-keshvari.png" alt="هواپیمایی کشوری"></div>
                            <div class="rounded-3 bg-white p-3"><img width="75px" src="assets/base/img/footer/img-hoghoghe-mosafer.png" alt="حقوق مسافر"></div>
                        </div>
                    </div>
                    <div class="d-flex flex-lg-row flex-column align-items-center justify-content-between">
                        <h6  class="text-grey-darken1 text-lg-start text-center font-small">تمامی حقوق متعلق به سیتی نت میباشد.</h6>
                        <h6  class="text-grey-darken1 text-lg-start text-center font-small">
                         <a class="transition-3 text-grey-darken1 text-hover-pink" href="#">طراحی سایت آژانس مسافرتی</a>
                         توسط سیتی نت
                        </h6>
                    </div>
                </div>
            </footer>
        `
    }
}

// Defining Our Custom Footer
window.customElements.define('custom-footer', Footer);