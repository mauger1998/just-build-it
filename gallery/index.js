document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// Cms 



const URL = `https://q5cqw5we.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22gallery%22%5D%20%7B%0A%20%20%22imageUrl%22%3A%20galleryImage.asset-%3Eurl%0A%7D%0A`;


 
fetch(URL)
.then((res) => res.json())
.then(({ result }) => {
    const grid = document.querySelector(".past-work .wrapper")

    if (result.length > 0) {
        grid.innerHTML = ""
    }

    result.forEach((result, index) => {
        const gridItem = document.createElement("img")
        gridItem.src = result.imageUrl
        grid.appendChild(gridItem)
        gridItem.classList.add("grid-item")
    })
    
})






