// Adding Event Listner On Load Of Window
window.addEventListener('load', () => {
    // Variables
    const headersToSendData = new Headers();
    const loginToken = localStorage.getItem('login-token');

    // Setting Headers To Send Data
    headersToSendData.append("Accept", "application/json");
    headersToSendData.append("debug", "true");
    headersToSendData.append("Authorization", `Bearer ${loginToken}`);

    // Options To Send Data
    const optionsToSendData = {
        method: 'GET',
        headers: headersToSendData,
        redirect: 'follow'
    };

    // Fetching Sync Api To Get User Data
    fetch("https://www.newcash.me/api/v1/user/sync", optionsToSendData)
        .then(response => response.json())
        .then(result => {
            // Variables
            const loaderModal = document.getElementById('loader-modal');

            // Closing Loader Modal
            loaderModal.removeAttribute('data-opened')

            // If User Is Unauthenticated Then Open Login Modal And Focus To First Input Init
            if (result.message === 'Unauthenticated.') {
                const loginModal = document.getElementById('login-modal');
                const inputInLoginModal  = loginModal.querySelector('input:first-of-type');

                loginModal.toggleAttribute('data-opened');
                inputInLoginModal.focus()
            } else {
                // Variables
                const userData = result.data.user;
                const userNumber = userData.mobile;
                const userWallet = userData.wallet;
                const userName = userData.card_info.name;
                let userNameToSet;

                const userNameAppTopsideTable = document.getElementById('user-name-app-topside-table')
                const userNameTopsideTable = document.getElementById('user-name-topside-table')
                const userNumberTopsideTable = document.getElementById('user-number-topside-table')
                const userWalletTopside = document.getElementById('user-wallet-topside');

                // If Returned User Name Is Null (Is Not Set Yet) Set Name To Set To '--' Otherwise To userName Returned From Fetch Api
                (userName === null) ? userNameToSet = '--' : userNameToSet = userName

                // Setting Text Content Of Top Side Table To Data Returned From Api Call
                userNameAppTopsideTable.textContent = userNameToSet;
                userNameTopsideTable.textContent = userNameToSet;
                userNumberTopsideTable.textContent = userNumber;
                userWalletTopside.textContent = userWallet;
            }
        })
        .catch(error => console.log('error', error));
})