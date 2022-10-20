class TicketComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div>
                <div>
                    <div>
                        <img src="${this.getAttribute('icon-src')}" alt="${this.getAttribute('name')}">
                        <div>
                            <div>
                                <h6>${(this.getAttribute('systemic') !== null) ? 'سیستمی' : 'چارتری'}</h6>
                                <h6>
                                    <span>${this.getAttribute('number-of-sits')}</span>
                                    صندلی
                                </h6>
                            </div>
                            <div>
                                <h6>${this.getAttribute('flight-number')}</h6>
                                <span>|</span>
                                <h6>${this.getAttribute('name')}</h6>
                            </div>
                            <h6>${this.getAttribute('mode')}</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6>${this.getAttribute('start-time')}</h6>
                            <h6>${this.getAttribute('start-location')}</h6>
                        </div>
                        <div>
                            <i class="bi bi-circle-fill"></i>
                            <div class="divider"></div>
                            <i class="bi bi-airplane rotate-270"></i>
                        </div>
                        <div>
                            <h6>${this.getAttribute('end-time')}</h6>
                            <h6>${this.getAttribute('end-location')}</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button>بار مجاز<i class="bi bi-chevron-down"></i></button>
                        <button>قوانین<i class="bi bi-chevron-down"></i></button>
                        <button>جزییات<i class="bi bi-chevron-down"></i></button>
                        <button>قیمت<i class="bi bi-chevron-down"></i></button>
                    </div>
                    <div>
                        <div>
                            <h6>قیمت هر بزرگسال</h6>
                            <h6>
                                ${this.getAttribute('price')}
                                ریال
                            </h6>
                            <button>خرید انلاین</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div class="intractive-buttons-with-border d-flex">
                                <div style="right: 0;" class="intractive-buttons-border"></div>
                                    <button active class="intractive-buttons-btn text-secondary-lighten1 border-0 bg-transparent ripple-button d-flex flex-column align-items-center justify-content-center">
                                        <span>${this.getAttribute('start-loaction-abbr')}</span>
                                        <i class="bi bi-arrow-left"></i>
                                        <span>${this.getAttribute('end-loaction-abbr')}</span>
                                    </button>
                                </div>
                         </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">شماره پرواز</th>
                                        <th scope="col">بار بزرگسال</th>
                                        <th scope="col">بار کودک</th>
                                        <th scope="col">بار نوزاد</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2660</td>
                                        <td>15KG</td>
                                        <td>15KG</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                    </div>
                    <div>
                        <div>
                            <div class="intractive-buttons-with-border d-flex">
                                <div style="right: 0;" class="intractive-buttons-border"></div>
                                    <button active class="intractive-buttons-btn text-secondary-lighten1 border-0 bg-transparent ripple-button d-flex flex-column align-items-center justify-content-center">
                                        TO
                                        <i class="bi bi-arrow-left"></i>
                                    </button>
                            </div>
                         </div>
                        <div>
                            <button>
                                جریمه کنسلی و قوانین (بزرگسال)
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="paragraph-holder">
                                <p>CANCELLATION PENALTY</p>
                                <p>TICKET IS NOT REFUNDABLE IN CASE OF CANCEL/REFUND.</p>
                                <ul>
                                    <li>
                                        <p>CHANGE POLICY <br> TICKET IS CHANGABLE WITH PENALY IN CASE OF CHANGE DATE.</p>
                                        <p>NO SHOW POLICY <br> CHANGE/CANCELLATION NOT PERMITED.</p>
                                        <p>Not Refundable Service Charge: IRR 4,000,000 Per Passenger.</p>
                                        <p>Admin Fee For Change: IRR 4,000,000 Per Passenger.</p>
                                        <p>Refund process will take up to 7 Working Days.</p>
                                        <p>You can check covid19 limitations on below link:</p>
                                        <a href="#">IATA Travel Centre</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h6>
                                    <span>${this.getAttribute('start-loaction-abbr')}</span>
                                    <i class="bi bi-arrow-left"></i>
                                    <span>${this.getAttribute('end-loaction-abbr')}</span>
                                </h6>
                                <div class="divider-vertival"></div>
                                <h6>
                                    مسیر
                                    <span>${this.getAttribute('start-location-en')}</span>
                                    به
                                    <span>${this.getAttribute('end-location-en')}</span>
                                </h6>
                            </div>
                            <div>
                                <h6>مدت مسیر :</h6>
                                <h6>
                                    <span>${this.getAttribute('route-duration-hour')}</span>
                                    ساعت  و
                                    <span>${this.getAttribute('route-duration-minute')}</span>
                                    دقیقه
                                </h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6>
                                    <i class="bi bi-calendar4-week"></i>
                                    زمان حرکت :
                                    <span>${this.getAttribute('start-time')}</span>
                                </h6>
                                <h6>
                                    ${this.getAttribute('start-date-fa')}
                                    (${this.getAttribute('start-date-en')})
                                </h6>
                            </div>
                            <div>
                                <div>
                                    <h6>
                                        <i class="bi bi-circle-fill"></i>
                                        ${this.getAttribute('start-location')}
                                    </h6>
                                    <div>
                                        <div class="divider-vertical-dashed"></div>
                                        <img src="${this.getAttribute('icon-src')}" alt="${this.getAttribute('name')}">
                                    </div>
                                    <h6>
                                        <i class="bi bi-airplane rotate-270"></i>
                                        ${this.getAttribute('end-location')}
                                    </h6>
                                </div>
                                <div>
                                    <h6>هواپیمایی :<span>${this.getAttribute('name')}</span></h6>
                                    <h6>مدل هواپیما :<span>${this.getAttribute('plane-model')}</span></h6>
                                    <h6>بار مجاز :<span>15 KG</span></h6>
                                </div>
                                <div>
                                    <h6>شماره پرواز :<span>${this.getAttribute('flight-number')}/${(this.getAttribute('systemic') !== null) ? 'سیستمی' : 'چارتری'}</span></h6>
                                    <h6>
                                        مدت پرواز :
                                        <span>${this.getAttribute('route-duration-hour')}</span>
                                        ساعت و
                                        <span>${this.getAttribute('route-duration-minute')}</span>
                                        دقیقه
                                    </h6>
                                    <h6>کلاس نرخی :<span>${this.getAttribute('mode')}</span></h6>
                                </div>
                            </div>
                            <div>
                                <h6>
                                    <i class="bi bi-calendar4-week"></i>
                                    زمان رسیدن :
                                    <span>${this.getAttribute('end-time')}</span>
                                </h6>
                                <h6>
                                    ${this.getAttribute('end-date-fa')}
                                    (${this.getAttribute('end-date-en')})
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">رده سنی</th>
                                        <th scope="col">قیمت پایه</th>
                                        <th scope="col">مالیات</th>
                                        <th scope="col">تخفیف</th>
                                        <th scope="col">تعداد</th>
                                        <th scope="col">مبلغ هر نفر</th>
                                        <th scope="col">جمع</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>بزرگسال</td>
                                        <td>5,836,060</td>
                                        <td>5,994,000</td>
                                        <td>500,000</td>
                                        <td>x1</td>
                                        <td>${this.getAttribute('price')}</td>
                                        <td>${this.getAttribute('price')}</td>
                                    </tr>
                                </tbody>
                        </table>
                        <div>
                            <h6>جمع</h6>
                            <h6>
                                ${this.getAttribute('price')}
                                ریال
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('ticket-component', TicketComponent);