function obliczKoszt() {
    const szer = parseFloat(document.getElementById("szer").value);
    const dl = parseFloat(document.getElementById("dl").value);
    const typ = document.querySelector('input[name="typ"]:checked');

    if (!typ || isNaN(szer) || isNaN(dl)) {
        document.getElementById("wynik").textContent = "Wprowadź poprawne dane.";
        return;
    }

    const powierzchnia = szer * dl;
    let stawka = 0;
    switch (typ.value) {
        case "laminowane": stawka = 12; break;
        case "winylowe": stawka = 14; break;
        case "deska": stawka = 18; break;
    }

    const koszt = powierzchnia * stawka;
    document.getElementById("wynik").textContent = `Pole powierzchni pomieszczenia: ${powierzchnia.toFixed(2)}, Koszt montażu: ${koszt.toFixed(2)} zł`;
}