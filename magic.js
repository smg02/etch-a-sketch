const container = document.querySelector(".container")

const createDivs = (number) => {
    for (let i = 1; i <= number; i++) {
        divs = document.createElement("div")
        divs.setAttribute("class", "row")
        container.append(divs)
        for (let j = 1; j <= number; j++) {
            box = document.createElement("div")
            box.setAttribute("class", "box")
            box.addEventListener("mouseover", func)
            divs.appendChild(box)
        }
    }
}

const func = (event) => {
    value = Math.floor(1 + Math.random() * (10 - 1 + 1))
    let color
    switch (value) {
        case 1:
            color = "#808836"
            break
        case 2:
            color = "#FFBF00"
            break
        case 3:
            color = "#FF9A00"
            break
        case 4:
            color = "#D10363"
            break
        case 5:
            color = "#01204E"
            break
        case 6:
            color = "#028391"
            break
        case 7:
            color = "#F6DCAC"
            break
        case 8:
            color = "#FF0000"
            break
        case 9:
            color = "#FFA27F"
            break
        case 10:
            color = "#97BE5A"
            break
    }
    event.target.style.backgroundColor = color
    event.target.style.transition = "300ms"
}

createDivs(16)

const alertMessage = () => {
    container.replaceChildren()
    size = prompt("Enter size (Maximum 100): ")
    createDivs(size)
}


