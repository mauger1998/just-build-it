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
// CMS
const URLTWO = `https://q5cqw5we.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22testimonial%22%5D%20`;

fetch(URLTWO)
.then((res) => res.json())
.then(({ result }) => {
    const testimonialCardsJob = document.querySelectorAll(".testimonials-card-titles p:nth-of-type(1)")
    const testimonialCardsName = document.querySelectorAll(".testimonials-card-titles p:nth-of-type(2)")
    const review = document.querySelectorAll(".testimonials-card > p")

    result.forEach((result, index) => {
        testimonialCardsJob[index].textContent = result.job
        testimonialCardsName[index].textContent = result.name
        review[index].textContent = result.review
    })

})

// Click

const click = document.querySelector(".click")
const accordian = document.querySelector(".accordian")

click.addEventListener("click", () => {
    accordian.classList.toggle("active")
})