const closeBtn = document.getElementById("closeBtn")
const sideNav = document.getElementById("asideNavigation")

sideNav.style.display = "none"

function showSideNav(){
    sideNav.style.display = "flex"
    closeBtn.classList.add("flyRight")
    sideNav.classList.add("slideRight")
}

function hideSideNav(){
    sideNav.style.display = "none"
    closeBtn.classList.remove("flyRight")
    sideNav.classList.remove("slideRight")
}

const sideHomeLink = document.getElementById("sideHomeLink")
const sideServiceLink = document.getElementById("sideServiceLink")
const sideAboutLink = document.getElementById("sideAboutLink")
const sideWorksLink = document.getElementById("sideWorksLink")
const sideContactLink = document.getElementById("sideContactLink")

sideHomeLink.addEventListener("click", function() {
    home()
});

function home(){
    window.location.href = "index.html#hero-section"

    sideHomeLink.classList.add("activeSideLink")
    sideHomeLink.classList.remove("passiveSideLink")

    sideServiceLink.classList.add("passiveSideLink")
    sideServiceLink.classList.remove("activeSideLink")

    sideAboutLink.classList.add("passiveSideLink")
    sideAboutLink.classList.remove("activeSideLink")

    sideWorksLink.classList.add("passiveSideLink")
    sideWorksLink.classList.remove("activeSideLink")

    sideContactLink.classList.add("passiveSideLink")
    sideContactLink.classList.remove("activeSideLink")

}

sideServiceLink.addEventListener("click", () => {
    services()
})

function services(){
    window.location.href = "index.html#servicesSection"

    sideServiceLink.classList.add("activeSideLink")
    sideServiceLink.classList.remove("passiveSideLink")

    sideHomeLink.classList.add("passiveSideLink")
    sideHomeLink.classList.remove("activeSideLink")

    sideAboutLink.classList.add("passiveSideLink")
    sideAboutLink.classList.remove("activeSideLink")

    sideWorksLink.classList.add("passiveSideLink")
    sideWorksLink.classList.remove("activeSideLink")

    sideContactLink.classList.add("passiveSideLink")
    sideContactLink.classList.remove("activeSideLink")

}

sideAboutLink.addEventListener("click", () => {
    about()
})

function about(){
    window.location.href = "index.html#aboutSection"

    sideAboutLink.classList.add("activeSideLink")
    sideAboutLink.classList.remove("passiveSideLink")

    sideHomeLink.classList.add("passiveSideLink")
    sideHomeLink.classList.remove("activeSideLink")

    sideServiceLink.classList.add("passiveSideLink")
    sideServiceLink.classList.remove("activeSideLink")
    
    sideWorksLink.classList.add("passiveSideLink")
    sideWorksLink.classList.remove("activeSideLink")
    
    sideContactLink.classList.add("passiveSideLink")
    sideContactLink.classList.remove("activeSideLink")

}

sideWorksLink.addEventListener("click", () => {
    works()
})

function works(){
    window.location.href = "index.html#design-section"

    sideWorksLink.classList.add("activeSideLink")
    sideWorksLink.classList.remove("passiveSideLink")

    sideHomeLink.classList.add("passiveSideLink")
    sideHomeLink.classList.remove("activeSideLink")

    sideServiceLink.classList.add("passiveSideLink")
    sideServiceLink.classList.remove("activeSideLink")

    sideAboutLink.classList.add("passiveSideLink")
    sideAboutLink.classList.remove("activeSideLink")

    sideContactLink.classList.add("passiveSideLink")
    sideContactLink.classList.remove("activeSideLink")

}

sideContactLink.addEventListener("click", () => {
    contact()
})

function contact(){
    window.location.href = "contact.html"

    sideContactLink.classList.add("activeSideLink")
    sideContactLink.classList.remove("passiveSideLink")

    sideHomeLink.classList.add("passiveSideLink")
    sideHomeLink.classList.remove("activeSideLink")

    sideServiceLink.classList.add("passiveSideLink")
    sideServiceLink.classList.remove("activeSideLink")

    sideAboutLink.classList.add("passiveSideLink")
    sideAboutLink.classList.remove("activeSideLink")

    sideWorksLink.classList.add("passiveSideLink")
    sideWorksLink.classList.remove("activeSideLink")

}

// CONTACT SIDE-NAVIGATION

function updateActiveSideLink() {
    const currentPage = window.location.pathname;
    const currentHash = window.location.hash;

    // First, make every link passive
    sideHomeLink.classList.remove("activeSideLink");
    sideServiceLink.classList.remove("activeSideLink");
    sideAboutLink.classList.remove("activeSideLink");
    sideWorksLink.classList.remove("activeSideLink");
    sideContactLink.classList.remove("activeSideLink");

    sideHomeLink.classList.add("passiveSideLink");
    sideServiceLink.classList.add("passiveSideLink");
    sideAboutLink.classList.add("passiveSideLink");
    sideWorksLink.classList.add("passiveSideLink");
    sideContactLink.classList.add("passiveSideLink");

    // Check which page or section the user is viewing
    if (currentPage.endsWith("contact.html")) {
        sideContactLink.classList.add("activeSideLink");
        sideContactLink.classList.remove("passiveSideLink");
    } 
    else if (currentHash === "#servicesSection") {
        sideServiceLink.classList.add("activeSideLink");
        sideServiceLink.classList.remove("passiveSideLink");
    } 
    else if (currentHash === "#aboutSection") {
        sideAboutLink.classList.add("activeSideLink");
        sideAboutLink.classList.remove("passiveSideLink");
    } 
    else if (currentHash === "#design-section") {
        sideWorksLink.classList.add("activeSideLink");
        sideWorksLink.classList.remove("passiveSideLink");
    } 
    else {
        sideHomeLink.classList.add("activeSideLink");
        sideHomeLink.classList.remove("passiveSideLink");
    }
}

updateActiveSideLink();