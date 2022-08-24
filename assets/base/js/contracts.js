// Variables
const contracts = {
    submitBtn: document.getElementById('submit-btn'),
    az: document.getElementById('first-date'),
    tripDateAz: document.getElementById('second-date'),
    tripDateTa: document.getElementById('third-date'),
    ta: document.getElementById('fourth-date'),
    buyer: document.getElementById('buyer'),
    moaref: document.getElementById('moaref'),
}

// Handling Errors
contracts.submitBtn.addEventListener('click', () => {
    if (contracts.az.value === '') {
        handleError(
            contracts.az.parentElement,
            contracts.az.parentElement.nextElementSibling,
            contracts.az.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.az.value !== '' && new Date(contracts.az.value) > new Date()) {
        handleError(
            contracts.az.parentElement,
            contracts.az.parentElement.nextElementSibling,
            contracts.az.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را منطقی پر کنید"
        )
    }
    else if(contracts.az.value !== '' && new Date(contracts.az.value) < new Date())  {handleSuccses(contracts.az.parentElement, contracts.az.parentElement.nextElementSibling)}

    if (contracts.tripDateAz.value === '') {
        handleError(
            contracts.tripDateAz.parentElement,
            contracts.tripDateAz.parentElement.nextElementSibling,
            contracts.tripDateAz.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.tripDateAz.value !== '' && new Date(contracts.tripDateAz.value) > new Date()) {
        handleError(
            contracts.tripDateAz.parentElement,
            contracts.tripDateAz.parentElement.nextElementSibling,
            contracts.tripDateAz.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را منطقی پر کنید"
        )
    }
    else if(contracts.tripDateAz.value !== '' && new Date(contracts.tripDateAz.value) < new Date())  {handleSuccses(contracts.tripDateAz.parentElement, contracts.tripDateAz.parentElement.nextElementSibling)}

    if (contracts.tripDateTa.value === '') {
        handleError(
            contracts.tripDateTa.parentElement,
            contracts.tripDateTa.parentElement.nextElementSibling,
            contracts.tripDateTa.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.tripDateTa.value !== '' && new Date(contracts.tripDateTa.value) < new Date()) {
        handleError(
            contracts.tripDateTa.parentElement,
            contracts.tripDateTa.parentElement.nextElementSibling,
            contracts.tripDateTa.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را منطقی پر کنید"
        )
    }
    else if(contracts.tripDateTa.value !== '' && new Date(contracts.tripDateTa.value) < new Date())  {handleSuccses(contracts.tripDateTa.parentElement, contracts.tripDateTa.parentElement.nextElementSibling)}

    if (contracts.ta.value === '') {
        handleError(
            contracts.ta.parentElement,
            contracts.ta.parentElement.nextElementSibling,
            contracts.ta.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.ta.value !== '' && new Date(contracts.ta.value) < new Date()) {
        handleError(
            contracts.ta.parentElement,
            contracts.ta.parentElement.nextElementSibling,
            contracts.ta.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را منطقی پر کنید"
        )
    }
    else if(contracts.ta.value !== '' && new Date(contracts.ta.value) < new Date())  {handleSuccses(contracts.ta.parentElement, contracts.ta.parentElement.nextElementSibling)}

    if (contracts.buyer.value === '') {
        handleError(
            contracts.buyer.parentElement,
            contracts.buyer.parentElement.nextElementSibling,
            contracts.buyer.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.buyer.value !== '' && !isEnglish(contracts.buyer.value)) {
        handleError(
            contracts.buyer.parentElement,
            contracts.buyer.parentElement.nextElementSibling,
            contracts.buyer.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را منطقی پر کنید"
        )
    }
    if (contracts.buyer.value !== '' && isEnglish(contracts.buyer.value)) {handleSuccses(contracts.buyer.parentElement, contracts.buyer.parentElement.nextElementSibling)}

    if (contracts.moaref.value === '') {
        handleError(
            contracts.moaref.parentElement,
            contracts.moaref.parentElement.nextElementSibling,
            contracts.moaref.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.moaref.value !== '' && !isEnglish(contracts.moaref.value)) {
        handleError(
            contracts.moaref.parentElement,
            contracts.moaref.parentElement.nextElementSibling,
            contracts.moaref.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را منطقی پر کنید"
        )
    }
    if (contracts.moaref.value !== '' && isEnglish(contracts.moaref.value)) {handleSuccses(contracts.moaref.parentElement, contracts.moaref.parentElement.nextElementSibling)}
})