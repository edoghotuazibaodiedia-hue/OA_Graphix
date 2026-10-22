const previewContainer = document.getElementById("previewContainer")
previewContainer.style.display = "none"

const currentImageSrc = [
    "images/projects/IMG-20260805-WA0006.jpg",
    "images/projects/IMG-20260824-WA0023.jpg",
    "images/projects/IMG-20260824-WA0026.jpg",
    "images/projects/IMG-20260824-WA0027.jpg",
    "images/projects/IMG-20261015-WA0007.jpg",
    "images/projects/IMG-20261015-WA0008.jpg",
    "images/projects/IMG-20261017-WA0002.jpg"
]

const previewBox = document.getElementById("previewBox")

function showPreview(index){
    window.location.href = "#projectContainer"
    
    previewContainer.style.display = "flex"
    previewBox.src = currentImageSrc[index]
}

function closePreview(){
    previewContainer.style.display = "none"
}