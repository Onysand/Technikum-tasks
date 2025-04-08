const inputField = document.getElementById("number-to-round");

const floorField = document.getElementById("floor");
const ceilField = document.getElementById("ceil");
const roundField = document.getElementById("round");
const truncateField = document.getElementById("truncate");

const submitButton = document.getElementById("submit-number-button");

let timeout;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputField.value === "") return;
    if (isNaN(inputField.value)) return;
    if (parseInt(inputField.value) === parseFloat(inputField.value)) {
        alert("Ta liczba juz jest całkowitą!");
        return;
    }

    checkNumberAndShow(parseFloat(inputField.value));
})

function checkNumberAndShow(inputNumber) {
    clearTimeout(timeout);

    floorField.innerText = Math.floor(inputNumber).toString();
    ceilField.innerText = Math.ceil(inputNumber).toString();
    roundField.innerText = Math.round(inputNumber).toString();
    truncateField.innerText = Math.trunc(inputNumber).toString();

    timeout = setTimeout(() => {
        floorField.innerText = "";
        ceilField.innerText = "";
        roundField.innerText = "";
        truncateField.innerText = "";

        clearTimeout(timeout);
    }, 4000);
}