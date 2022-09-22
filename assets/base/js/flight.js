const myHeaders = new Headers();
const urlencoded = new URLSearchParams();
const loaderModal = document.getElementById("loader-modal");

myHeaders.append("Accept", "application/json");
myHeaders.append("debug", "true");
myHeaders.append(
  "Authorization",
  `Bearer ${localStorage.getItem("logged-in-token")}`
);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
urlencoded.append("date", "2022-10-15");
urlencoded.append("adult_count", "1");
urlencoded.append("child_count", "0");
urlencoded.append("infant_count", "0");
urlencoded.append("from", "81");
urlencoded.append("to", "82");
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

fetch("https://www.newcash.me/api/v2/airfare/flights/search", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.message === "Unauthenticated.") {
      loginModal.setAttribute("data-opened", "true");
      loaderModal.setAttribute("data-opened", "false");
      loginModal.querySelector('input[type="tel"]').focus();
    }
  })
  .catch((error) => console.log("error", error));
