const talkButton = document.getElementById("animateBtn")

talkButton.onmouseover = () => {    
    talkButton.classList.remove("animateBtn")
}

talkButton.onmouseout = () => {
    talkButton.classList.add("animateBtn")
}

const projectImages = [
    "images/projects/IMG-20261017-WA0002.jpg",
    "images/projects/IMG-20261015-WA0008.jpg",
    "images/projects/IMG-20261015-WA0007.jpg",
    "images/projects/IMG-20260824-WA0027.jpg",
    "images/projects/IMG-20260824-WA0026.jpg",
    "images/projects/IMG-20260824-WA0023.jpg",
    "images/projects/IMG-20260805-WA0006.jpg"
]

const homeLink = document.getElementById("homeLink")
const serviceLink = document.getElementById("serviceLink")
const aboutLink = document.getElementById("aboutLink")
const worksLink = document.getElementById("worksLink")
const contactLink = document.getElementById("contactLink")

homeLink.addEventListener("click", function() {
    gotoHome()
});

function gotoHome(){
    homeLink.classList.add("activeNavLink")
    homeLink.classList.remove("passiveNavLink")

    serviceLink.classList.add("passiveNavLink")
    serviceLink.classList.remove("activeNavLink")

    aboutLink.classList.add("passiveNavLink")
    aboutLink.classList.remove("activeNavLink")

    worksLink.classList.add("passiveNavLink")
    worksLink.classList.remove("activeNavLink")

    contactLink.classList.add("passiveNavLink")
    contactLink.classList.remove("activeNavLink")

    window.location.href = "#hero-section"
}

serviceLink.addEventListener("click", () => {
    gotoServices()
})

function gotoServices(){
    serviceLink.classList.add("activeNavLink")
    serviceLink.classList.remove("passiveNavLink")

    homeLink.classList.add("passiveNavLink")
    homeLink.classList.remove("activeNavLink")

    aboutLink.classList.add("passiveNavLink")
    aboutLink.classList.remove("activeNavLink")

    worksLink.classList.add("passiveNavLink")
    worksLink.classList.remove("activeNavLink")

    contactLink.classList.add("passiveNavLink")
    contactLink.classList.remove("activeNavLink")

    window.location.href = "#servicesSection"
}

aboutLink.addEventListener("click", () => {
    gotoAbout()
})

function gotoAbout(){
    aboutLink.classList.add("activeNavLink")
    aboutLink.classList.remove("passiveNavLink")

    homeLink.classList.add("passiveNavLink")
    homeLink.classList.remove("activeNavLink")

    serviceLink.classList.add("passiveNavLink")
    serviceLink.classList.remove("activeNavLink")
    
    worksLink.classList.add("passiveNavLink")
    worksLink.classList.remove("activeNavLink")
    
    contactLink.classList.add("passiveNavLink")
    contactLink.classList.remove("activeNavLink")

    window.location.href = "#aboutSection"
}

worksLink.addEventListener("click", () => {
    gotoWorks()
})

function gotoWorks(){
    worksLink.classList.add("activeNavLink")
    worksLink.classList.remove("passiveNavLink")

    homeLink.classList.add("passiveNavLink")
    homeLink.classList.remove("activeNavLink")

    serviceLink.classList.add("passiveNavLink")
    serviceLink.classList.remove("activeNavLink")

    aboutLink.classList.add("passiveNavLink")
    aboutLink.classList.remove("activeNavLink")

    contactLink.classList.add("passiveNavLink")
    contactLink.classList.remove("activeNavLink")

    window.location.href = "#design-section"
}

contactLink.addEventListener("click", () => {
    gotoContact()
})

function gotoContact(){
    contactLink.classList.add("activeNavLink")
    contactLink.classList.remove("passiveNavLink")

    homeLink.classList.add("passiveNavLink")
    homeLink.classList.remove("activeNavLink")

    serviceLink.classList.add("passiveNavLink")
    serviceLink.classList.remove("activeNavLink")

    aboutLink.classList.add("passiveNavLink")
    aboutLink.classList.remove("activeNavLink")

    worksLink.classList.add("passiveNavLink")
    worksLink.classList.remove("activeNavLink")

    window.location.href = "contact.html"
}

function gotoProjects(){
    window.location.href = "projects.html"
}