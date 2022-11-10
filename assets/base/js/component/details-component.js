class detailComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="table-bottom-item-holder" ${(this.getAttribute('opened') !== null) ? 'data-opened' : ''}>
                    <button class="table-bottom-item-toggler ripple-button bg-grey-lighten3 inner-ripple-black col-12 row row-cols-lg-auto justify-content-around row-cols-4 m-0 p-0 border-bottom border-top border-0">
                        <span class="p-3 font-small text-lg-end text-center col">1</span>
                        <span class="p-3 font-small text-lg-end text-center col">2</span>
                        <span class="p-3 font-small text-lg-end text-center col">3</span>
                        <span class="p-3 font-small text-lg-end text-center col">4</span>
                        <span class="p-3 font-small text-lg-end text-center col">5</span>
                        <span class="p-3 font-small text-lg-end text-center col">6</span>
                        <span class="p-3 font-small text-lg-end text-center col">7</span>
                        <span class="p-3 font-small text-lg-end text-center col">8</span>
                    </button>
                    <div class="p-3 table-bottom-item">
                        <div class="border rounded-3 p-3 d-flex flex-column gap-3">
                            <div class="d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-start gap-3 flex-wrap">
                                <h6 class="mb-0 font-small text-grey-darken3"><i class="bi bi-airplane text-grey-darken1 rotate-270 ms-1"></i>نوع سرویس پرواز<span class="my-little-spans no-circle succses">فعال</span></h6>
                                <div class="d-flex flex-lg-row flex-column gap-3 col-lg-auto col-12">
                                    <button class="px-3 col-lg-auto col-12 py-2 font-small border-0 rounded-3 ripple-button primary details-show-btn">
                                        جزییات سرویس
                                        <i class="bi bi-chevron-down"></i>
                                    </button>
                                    <button class="px-3 col-lg-auto col-12 py-2 font-small border-0 rounded-3 ripple-button error">درخواست کنسل (افلاین)</button>
                                    <button class="px-3 col-lg-auto col-12 py-2 font-small border-0 rounded-3 ripple-button info">فایل PDF</button>
                                </div>
                            </div>
                            <div class="details-holder" data-opened><flight-details icon-src="assets/base/img/img-logo.png" name="sepehran Airlines" systemic number-of-sits="9" flight-number="IS 4340" mode="economy" start-time="05:45" start-location="تهران (THR)" start-location-en="Tehran" start-location-fa="تهران" end-time="07:15" end-location="مشهد (MHD)" end-location-en="Mashhad" end-location-fa="مشهد" price="11,330,060" start-loaction-abbr="THR" end-loaction-abbr="MHD" route-duration-hour="1" route-duration-minute="5" start-date="2022-11-10" start-date-en="10 november" start-date-fa="پنجشنبه 19 ابان" end-date-en="10 november" end-date-fa="پنجشنبه 19 ابان" plane-model="IS 4340" type="details"></flight-details></div>
                            <div class="rounded border d-flex flex-column gap-5">
                                <table class="table mb-0 d-lg-table d-flex mb-0">
                                    <thead class="bg-grey-lighten3 col-lg-auto col-6">
                                    <tr class="d-lg-table-row d-flex flex-column  col-lg-auto col-12 bg-grey-lighten3">
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">#</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">نام و نام خانوادگی</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">رده سنی</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">شماره ملی</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">شماره گذرنامه</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">شماره بلیط</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">رفرنس</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">قیمت</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">غملیات</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">چاپ</th>
                                        <th class="font-small border-bottom-0 p-3 text-grey-darken1 text-center" scope="col">وضعیت</th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white col-lg-auto col-6">
                                    <tr class="d-lg-table-row d-flex flex-column  col-lg-auto col-12">
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">#</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">نام و نام خانوادگی</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">بزرگسال</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">--</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">PO12123123</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">12123123</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center">07S5UV21</td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center d-lg-table-cell d-flex align-items-center justify-content-center"><button class="bg-grey-lighten3 inner-ripple-black ripple-button border-0 rounded-3 font-small squar-size d-flex justify-content-center align-items-center show-price-details-btn"><i class="bi bi-chevron-down"></i></button></td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center d-lg-table-cell d-flex align-items-center justify-content-center">
                                            <div class="my-drop-down-holder">
                                                <button class="my-drop-down-toggler bg-grey-lighten3 inner-ripple-black ripple-button border-0 rounded-3 font-small squar-size d-flex justify-content-center align-items-center">...</button>
                                                <div class="my-drop-down left top auto-size d-flex flex-column">
                                                    <button class="ripple-button col-12 border-0 inner-ripple-black p-2 text-grey-darken1 font-small bg-transparent text-end">فلان</button>
                                                    <button class="ripple-button col-12 border-0 inner-ripple-black p-2 text-grey-darken1 font-small bg-transparent text-end">فلان</button>
                                                    <button class="ripple-button col-12 border-0 inner-ripple-black p-2 text-grey-darken1 font-small bg-transparent text-end">فلان</button>
                                                    <button class="ripple-button col-12 border-0 inner-ripple-black p-2 text-grey-darken1 font-small bg-transparent text-end">فلان</button>
                                                    <button class="ripple-button col-12 border-0 inner-ripple-black p-2 text-grey-darken1 font-small bg-transparent text-end">فلان</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center d-lg-table-cell d-flex align-items-center justify-content-center"><button class="bg-transparent inner-ripple-black ripple-button border-0 rounded-3 font-small squar-size d-flex justify-content-center align-items-center"><i class="bi bi-printer"></i></button></td>
                                        <td class="font-small border-bottom-0 p-3 text-grey-darken3 text-center"><span class="my-little-spans succses">تکمیل شده</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="flex-lg-row flex-column justify-content-around align-items-center gap-3 price-details">
                                    <h6 class="d-flex flex-column font-small text-center mb-0">قیمت پایه<span class="mt-2 mb-3">33,430,000</span></h6>
                                    <h6 class="d-flex flex-column font-small text-center mb-0">مالیات<span class="mt-2 mb-3">50,000</span></h6>
                                    <h6 class="d-flex flex-column font-small text-center mb-0">جریمه کنسلی<span class="mt-2 mb-3">0</span></h6>
                                    <h6 class="d-flex flex-column font-small text-center mb-0">سرویس مازاد<span class="mt-2 mb-3">0</span></h6>
                                    <h6 class="d-flex flex-column font-small text-center mb-0">تخفیف مازاد<span class="mt-2 mb-3">0</span></h6>
                                    <h6 class="d-flex flex-column font-small text-center mb-0">جریمه مازاد<span class="mt-2 mb-3">0</span></h6>
                                    <h6 class="d-flex flex-column font-small text-center mb-0">جمع<span class="mt-2 mb-3">33,380,000</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}

window.customElements.define('detail-component', detailComponent);