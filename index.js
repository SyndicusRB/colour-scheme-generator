const colorOne = document.getElementById("grid-color-1")
const colorTwo = document.getElementById("grid-color-2")
const colorThree = document.getElementById("grid-color-3")
const colorFour = document.getElementById("grid-color-4")
const colorFive = document.getElementById("grid-color-5")

const hexOne = document.getElementById("grid-hex-1")
const hexTwo = document.getElementById("grid-hex-2")
const hexThree = document.getElementById("grid-hex-3")
const hexFour = document.getElementById("grid-hex-4")
const hexFive = document.getElementById("grid-hex-5")

document.getElementById("generate-scheme-btn").addEventListener("click", e => {
    generateColorScheme()
})

function generateColorScheme() {
    const hexValue = document.getElementById("input-color").value.replace("#", "")
    const schemeValue = document.getElementById("select-color").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${schemeValue}&count=5`)
    .then(res => res.json())
    .then(data => {
        colorOne.style.backgroundColor = data.colors[0].hex.value
        colorTwo.style.backgroundColor = data.colors[1].hex.value
        colorThree.style.backgroundColor = data.colors[2].hex.value
        colorFour.style.backgroundColor = data.colors[3].hex.value
        colorFive.style.backgroundColor = data.colors[4].hex.value

        hexOne.textContent = data.colors[0].hex.value
        hexTwo.textContent = data.colors[1].hex.value
        hexThree.textContent = data.colors[2].hex.value
        hexFour.textContent = data.colors[3].hex.value
        hexFive.textContent = data.colors[4].hex.value
    })
}