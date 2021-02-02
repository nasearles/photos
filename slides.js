var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides"); //array of slides
var dots = document.getElementsByClassName("dot"); //array of dots
slides[1].style.display="block";
showSlides(slideIndex);

function nextSlide(j) {
  showSlides(slideIndex += j);
}

function setSlide(k) {
	showSlides(slideIndex = k);
}

function showSlides(n){
  var i;
  if(n < 0){
    n=3;
  }
  if(n > 3){
    n=0;
  }
  for(i=0; i < 4; i++){
    slides[i].style.display ="none";
  }
  for(i=0; i < 4; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  i = n;
  slides[i].style.display = "block";
  dots[i].className += " active";
  slideIndex = i;
  clearTimeout();
  setTimeout(nextSlide, 8000, 1);
}
