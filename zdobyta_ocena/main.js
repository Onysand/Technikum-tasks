const MARK_RANGES = [
    { min: 0, max: 29, mark: 1},
    { min: 30, max: 49, mark: 2},
    { min: 50, max: 74, mark: 3},
    { min: 75, max: 89, mark: 4},
    { min: 90, max: 99, mark: 5},
    { min: 100, max: 100, mark: 6}
]

const resultDiv = document.getElementById('result-container')
const resultText = document.getElementById('result-text')
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const pointsInput = document.getElementById('points')
    const maxPointsInput = document.getElementById('max-points')

    if (pointsInput.value === '' || isNaN(pointsInput.value)) {
        setResult(`'${pointsInput.title}' must be a valid number`, 'red')
        showResult()
        return
    }

    if (maxPointsInput.value === '' || isNaN(maxPointsInput.value)) {
        setResult(`'${maxPointsInput.title}' must be a valid number`, 'red')
        showResult()
        return
    }

    let pointsCount = Number(pointsInput.value)
    let maxPoints = Number(maxPointsInput.value)

    if (pointsCount > maxPoints) {
        setResult(`${pointsInput.title} nie może byc więcej maksymalnej liczby punktow`, 'red')
        showResult()
        return
    }

    let percentageGot = pointsCount / maxPoints * 100;
    let mark = undefined;

    for (let range of MARK_RANGES) {
        if (range.min <= percentageGot && percentageGot <= range.max) {
            mark = range.mark;
        }
    }

    if (mark === undefined) {
        setResult(`Ocena is undefined`, 'red')
        showResult()
        return
    }

    setResult(`Dostana ocena: ${mark}`, 'aliceblue')
    showResult()
})

function setResult(text, color) {
    resultText.style.color = color
    resultText.innerHTML = text
}

function hideResult() {
    resultDiv.style.visibility = 'hidden'
}

function showResult()  {
    resultDiv.style.visibility = 'visible'
}