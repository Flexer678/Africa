let cont = document.querySelector('.container')
let unlist = document.createElement("ul")



for (let x = 1; x < 6; x++){
    let list = document.createElement("li")
    let desc = document.createElement("h3")
    let img = document.createElement("img")
    desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    img.src = "/assets/slide"+ x.toString() + ".jpg"
    img.style.width="100px"
    img.style.height = "100px"
    list.appendChild(desc)
    list.appendChild(img)
    unlist.appendChild(list)
    cont.appendChild(list)
}

