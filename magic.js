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
    event.target.style.backgroundColor = "black"
}

createDivs(16)

const alert = () => {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(element => {
        element.remove()
    });
    size = prompt("Enter size (Maximum 100): ")
    createDivs(size)
}


