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



fetch("https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // colorOne.style.backgroundColor = data.rgb.value
        // hexOne.textContent = data.hex.value
    })