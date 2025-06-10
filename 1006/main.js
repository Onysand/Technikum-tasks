const target = () => document.getElementById('obrazek')

const addBlur = () => {
    const object = target();

    object.classList.add("blur");
}

const removeEffects = () => {
    const object = target();

    object.classList.forEach(className => object.classList.remove(className))
}

const replaceWithGrey = () => {
    const object = target();

    object.classList.replace("blur", "grey");
}