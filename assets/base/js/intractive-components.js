const popularCitysBtn = document.querySelectorAll('.popular-citys-btn');

popularCitysBtn.forEach(item => {
    item.addEventListener('click', () => {
        // Creating Elements
        const div = document.createElement('div');
        const iconHolder = document.createElement('span');
        const icon = document.createElement('i');
        const brand = document.createElement('span');
        const name = document.createElement('h6');
        const component = item.parentElement.parentElement.previousElementSibling;
        let brandToShow = '';
        let nameToShow = '';
        let isPrimary = false;

        // Checks If Clicked Buttons Text Content Is "تهران" Or What Ever, Then Sets Its Brand, Name To Shows , Color Of Its Badge
        switch (item.textContent) {
            case "تهران":brandToShow = "THR";nameToShow = "تهران, ایران (Tehran)";isPrimary = true;break;
            case "کیش":brandToShow = "KIH";nameToShow = "کیش, ایران (Kish Island)";break;
            case "استانبول":brandToShow = "IST";nameToShow = "استانبول, ترکیه (Istanbul)";break;
            case "دبی":brandToShow = "DXD";nameToShow = "دبی, عمارات (Dubai)";break;
            case "مشهد":brandToShow = "MHD";nameToShow = "مشهد, ایران (Mashhad)";break;
            case "اهواز":brandToShow = "AWZ";nameToShow = "اهواز, ایران (Ahvaz)";break;
            case "انکارا":brandToShow = "ESB";nameToShow = "انکارا, ترکیه (Ankara)";break;
            case "لندن":brandToShow = "LHR";nameToShow = "لندن, بریتانیا (London)";break;
            case "تبریز":brandToShow = "TBZ";nameToShow = "تبریز, ایران (Tabriz)";break;
            case "قشم":brandToShow = "GSM";nameToShow = "قشم, ایران (Qeshm Island)";break;
            case "تورنتو":brandToShow = "YYZ";nameToShow = "تورنتو, کانادا (Torento)";break;
            case "ایروان":brandToShow = "ENV";nameToShow = "ایروان, ارمنستان (Yerevan)";break;
            case "بندر عباس":brandToShow = "BND";nameToShow = "بندر عباس, ایران (Bandar Abbas)";break;
            case "شیراز":brandToShow = "SYZ";nameToShow = "شیراز, ایران (Shiraz)";break;
            case "مسقط":brandToShow = "MCT";nameToShow = "مسقط, عمان (Muscat)";break;
            case "پکن":brandToShow = "PEK";nameToShow = "پکن, چین (Beijing)";break;
            case "رشت":brandToShow = "RAS";nameToShow = "رشت, ایران (Rasht)";break;
            case "اصفهان":brandToShow = "IFN";nameToShow = "اصفهان, ایران (Isfahan)";isPrimary = true;break;
            case "نجف":brandToShow = "NJF";nameToShow = "نجف, عراق (Najaf)";break;
            case "باکو":brandToShow = "GYD";nameToShow = "باکو, اذربایجان (Baku)";break;
        }

        // Adding ClassNames To Created Elements
        div.className = 'd-flex align-items-center flex-wrap position-absolute gap-1 selected-location';
        // If Clicked Button Is Primary Then Set Class Name Of 'my-bg-primary' else To 'my-bg-pink', Other Classes
        iconHolder.className = `${isPrimary ? 'my-bg-primary' : 'my-bg-pink'} rounded-3 p-1 text-white ms-2 font-small`;
        // If Clicked Button Is Primary Then Set Icon To House Otherwise To Airplane
        icon.className = `bi bi-${isPrimary ? 'house' : 'airplane'}`;
        name.className = 'font-small mb-0';
        brand.textContent = brandToShow;
        name.textContent = nameToShow;

        // Appending Children To Their Parents
        div.appendChild(iconHolder);
        iconHolder.appendChild(icon);
        iconHolder.appendChild(brand);
        div.appendChild(name);

        // If Component Contains Selected-location Then Replace New Item With Previous, Otherwise Add It To Component As Child
        !component.contains(document.querySelector('.selected-location'))
            ? component.appendChild(div) : component.lastElementChild.replaceWith(div)

        // Adding Class Of Focused To Component That Prevents Bug
        component.classList.add('focused');
    })
})