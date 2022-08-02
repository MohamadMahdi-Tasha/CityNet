const intractiveInputComponentInput = document.querySelectorAll('.intractive-input-component');
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');
const popularCitysBtns = document.querySelectorAll('.popular-citys-btn');

intractiveInputComponentInput.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('focused');
        item.firstElementChild.nextElementSibling.focus()
    })
})

plusBtns.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.nextElementSibling;
        let currentNumber = Number(number.textContent);

        currentNumber ++;
        console.log(currentNumber)
    })
})

minusBtns.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.previousElementSibling;
        let currentNumber = Number(number.textContent);

        currentNumber --;
        console.log(currentNumber)
    })
})

popularCitysBtns.forEach(item => {
    item.addEventListener('click', () => {
        const div = document.createElement('div');
        const iconHolder = document.createElement('span');
        const icon = document.createElement('i');
        const brand = document.createElement('span');
        const name = document.createElement('h6');
        let brandToShow = '';
        let nameToShow = '';
        let isPrimary = false;

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

        div.className = 'd-flex align-items-center flex-wrap';
        iconHolder.className = `${isPrimary ? 'my-bg-primary' : 'my-bg-pink'} rounded-3 p-1 text-white ms-2 font-small`;
        icon.className = `bi bi-${isPrimary ? 'house' : 'airplane'} ms-2`;
        name.className = 'font-small mb-0';
        brand.textContent = brandToShow;
        name.textContent = nameToShow;

        div.appendChild(iconHolder);
        iconHolder.appendChild(icon);
        iconHolder.appendChild(brand);
        div.appendChild(name);

        document.body.appendChild(div)
    })
})