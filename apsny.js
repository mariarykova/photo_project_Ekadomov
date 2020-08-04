let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("photo__wrap");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

let count = document.getElementById("buttonCountNumber");

function showPlus() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 18){
    count.innerHTML++;
  }
}


function showMinus() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
  }
}
