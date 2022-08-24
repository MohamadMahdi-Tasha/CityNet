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
    if (contracts.tripDateAz.value === '') {
        handleError(
            contracts.tripDateAz.parentElement,
            contracts.tripDateAz.parentElement.nextElementSibling,
            contracts.tripDateAz.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.tripDateAz.value === '') {
        handleError(
            contracts.tripDateAz.parentElement,
            contracts.tripDateAz.parentElement.nextElementSibling,
            contracts.tripDateAz.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.tripDateTa.value === '') {
        handleError(
            contracts.tripDateTa.parentElement,
            contracts.tripDateTa.parentElement.nextElementSibling,
            contracts.tripDateTa.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.ta.value === '') {
        handleError(
            contracts.ta.parentElement,
            contracts.ta.parentElement.nextElementSibling,
            contracts.ta.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
    if (contracts.buyer.value === '') {
        handleError(
            contracts.buyer.parentElement,
            contracts.buyer.parentElement.nextElementSibling,
            contracts.buyer.parentElement.nextElementSibling.firstElementChild,
            "لطفا فیلد را پر کنید"
        )
    }
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
})