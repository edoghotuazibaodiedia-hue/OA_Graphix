const contactForm = document.getElementById("contactForm")

const contactLoader = document.getElementById("contactLoader")
contactLoader.style.display = "none"

const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput")
const messageInput = document.getElementById("messageInput")

const contactError = document.getElementById("contactError")
contactError.style.display = "none"

contactForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value
    
    if(!nameValue || !emailValue || !messageValue){
        contactError.style.display = "block"
        contactError.textContent = "Please fill all entries"

        setTimeout(() => {
            contactError.style.display = "none"
        }, 3000);
        return
    }
    
    contactLoader.style.display = "flex"

    setTimeout(() => {
        contactLoader.style.display = "none"
        nameInput.value = ""
        emailInput.value = ""
        messageInput.value = ""
        alert("Couldn't send message!")
    }, 3000);

})