class passengerInformation extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="py-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="mb-0 font-small text-grey-darken1">بزرگسال اول</h6>
                            <button id="select-person-from-list-btn" class="font-small border-0 rounded-3 px-3 py-2 text-grey-darken1 bg-grey-lighten2 ripple-button"><i class="bi bi-plus ms-2"></i>انتخاب از لیست</button>
                        </div>
                        <div class="d-flex flex-column gap-4">
                            <div class="row flex-lg-row flex-column gx-3 gy-3">
                                <intractive-component class="col-lg-6 col-12" type="input" input-type="text" placeholder="نام انگلیسی"></intractive-component>
                                <intractive-component class="col-lg-6 col-12" type="input" input-type="text" placeholder="نام خانوادگی انگلیسی"></intractive-component>
                            </div>
                            <div class="row flex-lg-row flex-column gx-3 gy-3">
                                <intractive-component class="col-lg-4 col-12" type="dropdown" placeholder="ملیت">
                                    <ul class="list-unstyled m-0 p-0 dropdown-component-ul">
                                        <li><button class="active ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Afghanistan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Albania</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Algeria</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Andorra</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Angola</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Antigua and Barbuda</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Argentina</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Armenia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Australia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Austria</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Azerbaijan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bahamas</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bahrain</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bangladesh</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Barbados</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Belarus</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Belgium</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Belize</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Benin</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bhutan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bolivia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bosnia and Herzegovina</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Botswana</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Brazil</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Brunei</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Bulgaria</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Burkina Faso</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Burundi</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Côte d'Ivoire</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Cabo Verde</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Cambodia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Cameroon</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Canada</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Central African Republic</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Chad</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Chile</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">China</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Colombia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Comoros</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Congo</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Costa Rica</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Croatia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Cuba</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Cyprus</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Czechia (Czech Republic)</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Democratic Republic of the Congo</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Denmark</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Djibouti</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Dominica</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Dominican Republic</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Ecuador</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Egypt</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">El Salvador</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Equatorial Guinea</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Eritrea</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Estonia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Eswatini (fmr. "Swaziland")</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Ethiopia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Fiji</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Finland</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">France</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Gabon</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Gambia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Georgia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Germany</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Ghana</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Greece</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Grenada</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Guatemala</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Guinea</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Guinea-Bissau</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Guyana</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Haiti</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Holy See</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Honduras</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Hungary</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Iceland</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">India</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Indonesia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Iran</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Iraq</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Ireland</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Israel</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Italy</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Jamaica</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Japan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Jordan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Kazakhstan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Kenya</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Kiribati</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Kuwait</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Kyrgyzstan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Laos</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Latvia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Lebanon</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Lesotho</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Liberia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Libya</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Liechtenstein</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Lithuania</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Luxembourg</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Madagascar</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Malawi</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Malaysia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Maldives</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Mali</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Malta</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Marshall Islands</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Mauritania</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Mauritius</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Mexico</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Micronesia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Moldova</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Monaco</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Mongolia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Montenegro</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Morocco</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Mozambique</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Myanmar</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Namibia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Nauru</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Nepal</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Netherlands</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">New Zealand</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Nicaragua</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Niger</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Nigeria</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">North Korea</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">North Macedonia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Norway</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Oman</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Pakistan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Palau</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Palestine State</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Panama</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Papua New Guinea</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Paraguay</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Peru</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Philippines</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Poland</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Portugal</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Qatar</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Romania</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Russia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Rwanda</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Saint Kitts and Nevis</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Saint Lucia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Saint Vincent and the Grenadines</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Samoa</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">San Marino</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Sao Tome and Principe</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Saudi Arabia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Senegal</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Serbia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Seychelles</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Sierra Leone</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Singapore</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Slovakia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Slovenia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Solomon Islands</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Somalia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">South Africa</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">South Korea</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">South Sudan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Spain</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Sri Lanka</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Sudan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Suriname</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Sweden</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Switzerland</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Syria</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Tajikistan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Tanzania</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Thailand</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Timor-Leste</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Togo</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Tonga</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Trinidad and Tobago</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Tunisia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Turkey</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Turkmenistan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Tuvalu</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Uganda</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Ukraine</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">United Arab Emirates</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">United Kingdom</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">United States of America</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Uruguay</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Uzbekistan</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Vanuatu</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Venezuela</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Vietnam</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Yemen</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Zambia</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">Zimbabwe</button></li>
                                    </ul>
                                </intractive-component>
                                <intractive-component class="col-lg-4 col-12" type="input" input-type="number" placeholder="شماره ملی"></intractive-component>
                                <intractive-component class="col-lg-4 col-12" type="calender" placeholder="تاریخ تولد"></intractive-component>
                            </div>
                            <div class="row flex-lg-row flex-column gx-3 gy-3">
                                <intractive-component class="col-lg-4 col-12" type="dropdown" placeholder="جنسیت">
                                    <ul class="list-unstyled m-0 p-0 dropdown-component-ul">
                                        <li><button class="active ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">زن</button></li>
                                        <li><button class="ripple-button font-small text-grey-darken1 buy-ticket-drop-down-button col-12 bg-transparent border-0 p-2 text-end">مرد</button></li>
                                    </ul>
                                </intractive-component>
                                <intractive-component class="col-lg-4 col-12" type="input" input-type="number" placeholder="شماره گذرنامه"></intractive-component>
                                <intractive-component class="col-lg-4 col-12" type="calender" placeholder="تاریخ انقضای گذرنامه"></intractive-component>
                            </div>
                        </div>
                    </div>
        `
    }
}

window.customElements.define('passanger-information', passengerInformation);