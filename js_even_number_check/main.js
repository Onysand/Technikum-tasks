const submitButton = document.getElementById("check-input-button")
const returnQueue = []

submitButton.addEventListener("click", () => {
    if (returnQueue.length >= 5) return

    const input = document.getElementById("number-input").value
    
    const returnsHeader = document.getElementById("returns-header")
    const returnElement = document.createElement("p")
    returnElement.style.color = "aliceblue"
    returnElement.style.fontSize = "1.2em"
    returnElement.style.fontWeight = "bold"
    
    if (isNaN(input) || input === "") {
        const returnText = document.createTextNode(input + " isn't a valid number")
        returnElement.appendChild(returnText)
        returnElement.style.color = "red"
    } else if (input % 2 == 0) {
        const returnText = document.createTextNode(input + " jest liczbą parzystą")
        returnElement.appendChild(returnText)
    } else {
        const returnText = document.createTextNode(input + " nie jest lczbą parzystą")
        returnElement.appendChild(returnText)
    }

    const element = document.getElementById("input-container")
    element.appendChild(returnElement)
    returnQueue.push(element)
    returnsHeader.style.visibility = "visible"

    setTimeout(() => {
        returnQueue.pop(element)
        returnElement.remove()

        if (returnQueue.length === 0) 
            returnsHeader.style.visibility = "hidden"
    }, 5000)
})