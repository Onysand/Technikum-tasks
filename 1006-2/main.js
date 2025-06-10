const target = () => document.getElementById('tekst')

const changeBackground = () => {
    const object = target();

    if (object.classList.contains("white-bg"))
        object.classList.remove("white-bg")
    else
        object.classList.add("white-bg");
}

const removeEffects = () => {
    const object = target();

    object.classList.forEach(className => object.classList.remove(className))
}

const changeFontSize = () => {
    const object = target();

    if (object.classList.contains("font-1-5"))
        object.classList.replace("font-1-5", "font-1");
    else {
        object.classList.replace("font-1", "font-1-5");
        object.classList.add("font-1-5");
    }
}

const changeFont = () => {
    const object = target();

    if (object.classList.contains("font-arial"))
        object.classList.replace("font-arial", "font-courier");
    else {
        object.classList.replace("font-courier", "font-arial");
        object.classList.add("font-arial");
    }
}

const strikeThrough = () => {
    const object = target();

    if (object.classList.contains("strikeThrough"))
        object.classList.remove("strikeThrough")
    else
        object.classList.add("strikeThrough")
}