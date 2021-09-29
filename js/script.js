var num = 1

const button = document.getElementById("button")

button.addEventListener("click", newImage)

function newImage() {

    let state = document.getElementById("button").innerText

    if (state == "Light") {

        document.body.style.backgroundColor = "#D3D3D3"
        document.getElementById("luminaria").src = "./media/image/acesa.png"
        document.getElementById("button").style.backgroundColor = "goldenrod"
        document.getElementById("button").innerText = "Off"
        document.getElementById("change").src = `./media/image/0${num}.gif`

        num++
        if (num == 5) { num = 1 }

    } else if (state == "Off") {

        document.body.style.backgroundColor = "#2e2e2e"
        document.getElementById("luminaria").src = "./media/image/apagada.png"
        document.getElementById("button").style.backgroundColor = "#2e2e2e"
        document.getElementById("button").innerText = "Light"
        document.getElementById("change").src = ""
    }
}