let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");
    let descriptionText = document.getElementById("description");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    
    //Update the caption and description
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption");
    descriptionText.innerHTML = slides[slideIndex - 1].getAttribute("data-description");
}

    //Medium Zoom
document.addEventListener('DOMContentLoaded', function() {
    mediumZoom('.mySlides img', { background: '#000', scrollOffset: 0 });
  });