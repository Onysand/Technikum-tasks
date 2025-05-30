function toBinary() {
    const liczbaDziesietna = document.getElementById('liczba').value;
    const wynikElement = document.getElementById('wynik');
    const liczba = parseInt(liczbaDziesietna, 10);

    if (isNaN(liczba)) {
        wynikElement.textContent = "Brak obliczeń";
        return;
    }

    let binarna = liczba.toString(2);
    binarna = binarna.split('').reverse().join('');
    let formatowana = '';

    for (let i = 0; i < binarna.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatowana += ' ';
        }
        formatowana += binarna[i];
    }

    formatowana = formatowana.split('').reverse().join('');
    wynikElement.innerHTML = formatowana + "<sub>(2)</sub>";
}