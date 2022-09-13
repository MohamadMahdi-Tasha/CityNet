// A Function That Toggles Class Of 'show' To Target And Itself
function showTarget(item){
    const target = document.getElementById(item.getAttribute('data-target'));
    target.classList.toggle('show')
    item.classList.toggle('show')
}

// A Function That Checks Given Condition If Its Name Of A City Then Returns Name To Show
function showCitysNameByCondition(condition){
    let nameToShow;

    switch (condition) {
        case "Tehran":nameToShow = "تهران (THR)";break;
        case "Kish Island":nameToShow = "کیش (KIH)";break;
        case "Istanbul":nameToShow = "استانبول (IST)";break;
        case "Dubai":nameToShow = "دبی (DXD)";break;
        case "Mashhad":nameToShow = "مشهد (MHD)";break;
        case "Ahvaz":nameToShow = "اهواز (AWZ)";break;
        case "Ankara":nameToShow = "انکارا (ESB)";break;
        case "London":nameToShow = "لندن (LHR)";break;
        case "Tabriz":nameToShow = "تبریز (TBZ)";break;
        case "Qeshm Island":nameToShow = "قشم (GSM)";break;
        case "Torento":nameToShow = "تورنتو (YYZ)";break;
        case "Yerevan":nameToShow = "ایروان (ENV)";break;
        case "Bandar Abbas Abbas":nameToShow = "بندر عباس (BND)";break;
        case "Shiraz":nameToShow = "شیراز (SYZ)";break;
        case "Muscat":nameToShow = "مسقط (MCT)";break;
        case "Beijing":nameToShow = "پکن (PEK)";break;
        case "Rasht":nameToShow = "رشت (RAS)";break;
        case "Isfahan":nameToShow = "اصفهان (IFN)";break;
        case "Najaf":nameToShow = "نجف (NJF)";break;
        case "Baku":nameToShow = "باکو (GYD)";break;
    }

    return nameToShow;
}

// Custom Element
class Tickets extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <li ${(this.getAttribute('hidden')) ? this.style.display = 'none' : this.style.display = 'block'} class="flight-ticket-item"">
                    <div class="bg-white rounded-3 p-3">
                        <!--Top Side-->
                        <div class="d-flex gap-3 gap-lg-5 flex-lg-row flex-column justify-content-between align-items-center bg-light-grey rounded-4 p-3 mb-3"   >
                            <!--Right Side-->
                            <div class="d-flex flex-lg-row flex-column mq-991-w-100 align-items-center justify-content-lg-start justify-content-between w-50 mq-991-w-100">
                                <img src='${this.getAttribute("flag")}' class="ms-4 mq-991-w-100">
                                <div class="text-center">
                                    <div class="d-flex mb-3 justify-content-between flex-wrap gap-3">
                                        <span class="bg-light-green text-green font-smallx px-2 p-1 rounded-2 text-nowrap">${(this.getAttribute('mode') === 'true') ? 'سیستمی' : 'استاندارد'}</span>
                                        <span class="bg-light-blue text-blue font-smallx px-2 p-1 rounded-2 text-nowrap"><span>${this.getAttribute('capacity')}</span> صندلی</span>
                                    </div>
                                    <h6 class="text-nowrap text-grey font-small">
                                        <span class="my-tooltip-toggle">
                                            <span class="my-tooltip">هواپیمایی</span>
                                            <span>${this.getAttribute('plane')}</span>
                                        </span>
                                        |
                                        <span class="my-tooltip-toggle">
                                            <span class="my-tooltip">شماره پرواز</span>
                                            <span>${this.getAttribute('fligh-number')}</span>
                                        </span>
                                    </h6>
                                    <h6 class="my-tooltip-toggle">
                                        <span class="my-tooltip">کلاس نرخی</span>
                                        <span class="text-nowrap text-grey font-small">${this.getAttribute('class')}</span>
                                    </h6>
                                </div>
                            </div>
                            <!--Left Side-->
                            <div class="d-flex gap-3 justify-content-lg-start justify-content-between w-50 mq-991-w-100 me-lg-5 me-0">
                                <div class="text-lg-start text-end ms-lg-3 m-0">
                                    <h6 class="fw-bold text-nowrap font-small">${this.getAttribute('start-time')}</h6>
                                    <h6 class="font-small text-nowrap">${this.getAttribute('start-place')}</h6>
                                </div>
                                <div class="d-flex align-items-center w-100">
                                    <i class="bi bi-circle-fill font-small"></i>
                                    <div class="bb-dashed w-100"></div>
                                    <i class="bi bi-airplane rotate-270 fs-6"></i>
                                </div>
                                <div class="text-lg-end text-end me-lg-3 m-0">
                                    <h6 class="fw-bold text-nowrap font-small">${this.getAttribute('end-time')}</h6>
                                    <h6 class="font-small text-nowrap">${this.getAttribute('end-place')}</h6>
                                </div>
                            </div>
                        </div>
                        <!--Bottom Side-->
                        <div class="d-flex flex-lg-row flex-column-reverse gap-lg-3 gap-5 justify-content-between align-items-center">
                            <!--right Side-->
                            <div class="d-flex flex-wrap flex-lg-nowrap gap-3 mq-991-w-100 justify-content-between justify-content-lg-start align-items-start ticket-bottom-side-togglers">
                                <button onclick="showTarget(this)" class="bg-white bottom-side-items-toggler text-nowrap font-small border-0 d-flex justify-content-center align-items-center text-grey" type="button" data-target="${this.getAttribute('weight-collapse')}">
                                    بار مجاز
                                    <i class="bi bi-chevron-down me-2"></i>
                                </button>
                                <button onclick="showTarget(this)" class="bg-white bottom-side-items-toggler text-nowrap font-small border-0 d-flex justify-content-center align-items-center text-grey" type="button" data-target="${this.getAttribute('rules-collapse')}">
                                    قوانین
                                    <i class="bi bi-chevron-down me-2"></i>
                                </button>
                                <button onclick="showTarget(this)" class="bg-white bottom-side-items-toggler text-nowrap font-small border-0 d-flex justify-content-center align-items-center text-grey" type="button" data-target="${this.getAttribute('details-collapse')}">
                                    جزییات پرواز
                                    <i class="bi bi-chevron-down me-2"></i>
                                </button>
                                <button onclick="showTarget(this)" class="bg-white bottom-side-items-toggler text-nowrap font-small border-0 d-flex justify-content-center align-items-center text-grey" type="button" data-target="${this.getAttribute('price-details-collapse')}">
                                    جزییات قیمت
                                    <i class="bi bi-chevron-down me-2"></i>
                                </button>
                            </div>
                            <!--Left Side-->
                            <div class="d-flex flex-lg-row gap-lg-0 gap-3  flex-column mq-991-w-100 justify-content-lg-end justify-content-between align-items-start align-items-lg-center w-50">
                                <div class="ms-lg-3 m-0">
                                    <h6 class="text-grey font-small">قیمت هر بزرگسال</h6>
                                    <h6 class="text-blue font-small fw-bold mb-0"><span>${this.getAttribute('adult-price')}</span> ریال</h6>
                                </div>
                                <button class="submit-btn border-0 text-white ripple-btn rounded-3 w-50 mq-991-w-100">خرید انلاین</button>
                            </div>
                        </div>
                        <!--Bottom Side Holder-->
                        <div class="ticket-bottom-side-holder">
                            <div class="collapse fade mt-3" id="${this.getAttribute('weight-collapse')}">
                                <div class="border rounded-3 overflow-hidden">
                                    <div class="bg-grey d-flex">
                                        <button class="ticket-details-top-btn active px-5 d-flex justify-content-center align-items-center font-small ripple-btn text-dark py-3">TEH<i class="bi bi-arrow-left-short"></i>IFH</button>
                                        <button class="ticket-details-top-btn px-5 d-flex justify-content-center align-items-center font-small ripple-btn text-dark py-3">IFH<i class="bi bi-arrow-left-short"></i>TEH</button>
                                    </div>
                                    <table class="table table-striped mb-0">
                                        <thead>
                                        <tr class="row row-cols-2 row-cols-sm-4">
                                            <th class="col text-center text-grey fw-normal font-small" scope="col">شماره پرواز</th>
                                            <th class="col text-center text-grey fw-normal font-small" scope="col">بار بزرگسال</th>
                                            <th class="col text-center text-grey fw-normal font-small" scope="col">بار کودک</th>
                                            <th class="col text-center text-grey fw-normal font-small" scope="col">بار نوزاد</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="row row-cols-2 row-cols-sm-4">
                                            <td class="col text-center text-grey font-small fw-normal" scope="row">2188</td>
                                            <td class="col text-center text-grey font-small fw-normal">20KG</td>
                                            <td class="col text-center text-grey font-small fw-normal">20KG</td>
                                            <td class="col text-center text-grey font-small fw-normal">--</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="collapse fade mt-3" id="${this.getAttribute('rules-collapse')}">
                                <div class="border rounded-3 overflow-hidden">
                                    <div class="bg-grey d-flex"><button class="ticket-details-top-btn active px-5 d-flex justify-content-center align-items-center font-small ripple-btn text-dark py-3">TEH<i class="bi bi-arrow-left-short"></i>IFH</button></div>
                                    <button class="bg-transparent w-100 border-0 p-3 font-small text-grey d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#rules-inner" aria-expanded="false" aria-controls="collapseExample">
                                        جریمه کنسلی و قوانین (بزرگسال)
                                        <i class="bi bi-chevron-down"></i>
                                    </button>
                                    <div class="collapse fade px-5 pb-3" id="rules-inner">
                                        <ul class="pe-lg-3 pe-0">
                                            <li class="text-grey font-small">از زمان صدور تا ساعت 12 , 3 روز قبل از پرواز ,30 درصد ,</li>
                                            <li class="text-grey font-small">از ساعت 12 , 3 روز قبل از پرواز تا ساعت 12 , 1 روز قبل از پرواز ,40 درصد ,</li>
                                            <li class="text-grey font-small">از ساعت 12 , 1 روز قبل از پرواز تا 5 ساعت قبل از پرواز , 50 درصد ,</li>
                                            <li class="text-grey font-small">از 5 ساعت قبل از پرواز به بعد 60 درصد ,</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="collapse fade mt-3" id="${this.getAttribute('details-collapse')}">
                                <div class="border rounded-3 overflow-hidden">
                                    <!--Top Side-->
                                    <div class="bg-grey d-flex justify-content-between p-3">
                                        <!--Right Side-->
                                        <div class="d-flex align-items-center">
                                            <h6 class="mb-0 text-black font-small ms-3">TEH<i class="bi bi-arrow-left-short"></i>IFH</h6>
                                            <div class="vertical-divider h-100"></div>
                                            <h6 class="mb-0 text-black font-small me-3">مسیر
                                                <span>تهران</span>
                                                <span>به</span>
                                                <span>اصفهان</span>
                                            </h6>
                                        </div>
                                        <!--Left Side-->
                                        <div class="d-lg-block d-none"><h6 class="font-small mb-0 fw-bold">
                                            مدت مسیر :
                                            <span class="fw-normal">
                                                <span>۱</span>
                                                ساعت و
                                                <span>۴۵</span>
                                                دقیقه
                                            </span>
                                        </h6></div>
                                    </div>
                                    <!--Bottom Side-->
                                    <div class="p-3">
                                        <div class="d-flex flex-lg-row flex-column align-items-lg-center align-items-start mb-3">
                                            <i class="bi bi bi-calendar4-week ms-2 fs-6"></i>
                                            <h6 class="mb-0 font-small ms-3">زمان حرکت:<span class="me-3">۱۲:۰۰</span></h6>
                                            <h6 class="mb-0 font-small">
                                                <span>پنجشنبه</span>
                                                <span>۱۷</span>
                                                <span>شهریور</span>
                                                (
                                                <span>September</span>
                                                <span>8</span>
                                                )
                                            </h6>
                                        </div>
                                        <div class="row flex-lg-row flex-column gap-lg-0 gap-4 align-items-center">
                                            <div class="col">
                                                <div class="d-flex align-items-center mt-3 mb-3">
                                                    <div>
                                                        <div class="d-flex ticket-divider-label top"><i class="bi bi-circle-fill ms-3"></i><h6 class="font-small">
                                                        ${showCitysNameByCondition(this.getAttribute('start-place'))}
                                                        </h6></div>
                                                        <div class="ticket-bottom-divider ms-3"></div>
                                                        <div class="d-flex ticket-divider-label bottom"><i class="bi bi-airplane rotate-270 ms-3"></i><h6 class="font-small">${showCitysNameByCondition(this.getAttribute('end-place'))}</h6></div>
                                                    </div>
                                                    <img class="ticket-divider-img" src="${this.getAttribute('flag')}">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <h6 class="font-small mb-3">هواپیمایی:<span class="me-2">${this.getAttribute('plane')}</span></h6>
                                                <h6 class="font-small mb-0">بار مجاز:<span class="me-2">20KG</span></h6>
                                            </div>
                                            <div class="col">
                                                <h6 class="font-small mb-3">شماره پرواز:<span class="me-2">${this.getAttribute('fligh-number')}</span></h6>
                                                <h6 class="font-small mb-3">مدت پرواز:<span class="me-2">
                                                    ${Number(this.getAttribute('end-time').slice(0,2)) - this.getAttribute('start-time').slice(0,2)}
                                                    ساعت
                                                    و
                                                    ${Number(this.getAttribute('end-time').slice(3,5)) - this.getAttribute('start-time').slice(3,5)}
                                                    دقیقه
                                                    </span></h6>
                                                <h6 class="font-small mb-0">کلاس نرخی:<span class="me-2">${this.getAttribute('class')}</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="collapse fade mt-3" id="${this.getAttribute('price-details-collapse')}">
                                <div class="border rounded-top-bl-3 overflow-hidden">
                                    <table class="table table-striped mb-0">
                                        <tbody class="d-flex flex-lg-column flex-row">
                                        <tr class="row flex-lg-row flex-column col-lg-12 col-6 p-0 m-0">
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">#</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">رده سنی</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">قیمت پایه</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">مالیات</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">تخفیف</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">تعداد</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">جمع هر نفر</th>
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="col">جمع</th>
                                        </tr>
                                        <tr class="row flex-lg-row flex-column col-lg-12 col-6 p-0 m-0">
                                            <th class="col-lg col-12 text-center text-grey font-small fw-normal" scope="row">1</th>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">بزرگسال	</td>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">۱۱,۴۵۴,۰۰۰</td>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">۱,۲۴۶,۰۰۰</td>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">0</td>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">x1</td>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">۱۲,۷۰۰,۰۰۰</td>
                                            <td class="col-lg col-12 text-center text-grey font-small fw-normal">۱۲,۷۰۰,۰۰۰</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <div class="bg-light-green px-4 rounded-bottom-3 py-2 d-flex">
                                        <h6 class="fw-bold font-small ms-3 mb-0 text-green">جمع</h6>
                                        <h6 class="text-green font-small mb-0 fw-bold">
                                            <span>۱۲,۷۰۰,۰۰۰</span>
                                            ریال
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
        `
    }
}

// Defining Custom Element
window.customElements.define('ticket-element', Tickets);