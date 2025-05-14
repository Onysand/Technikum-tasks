window.onload = () => {
    document.getElementById("oblicz").onclick = obliczRate
}

function obliczRate() {
    const kursReactPrice = 5000;
    const kursJSPrice = 3000;

    const kursReact = document.getElementById('kurs-react').checked;
    const kursJS = document.getElementById('kurs-javascript').checked;
    const liczbaRat = parseInt(document.getElementById('liczba-rat').value);
    const miasto = document.getElementById('miasto').value;

    let calkowitaKwota = 0;

    if (kursReact) {
        calkowitaKwota += kursReactPrice;
    }
    if (kursJS) {
        calkowitaKwota += kursJSPrice;
    }

    if (isNaN(liczbaRat) || liczbaRat <= 0) {
        alert("Proszę wprowadzić poprawną liczbę rat.");
        return;
    }

    const rata = (calkowitaKwota / liczbaRat).toFixed(2);

    const resultElement = document.getElementById('wynik');
    resultElement.innerHTML = `Kurs odbędzie się w ${miasto}. Koszt całkowity: ${calkowitaKwota} zł. Płacisz ${liczbaRat} rat po ${rata} zł.`;
}
