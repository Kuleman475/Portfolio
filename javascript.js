function toggleMenu() {
document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



let slideIndex = [0, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 2) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


let slideshowIndex = 0;
showTimedSlides();

function showTimedSlides() {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideshowIndex++;
  if (slideshowIndex > slides1.length) {slideshowIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideshowIndex-1].style.display = "block"; 
  dots[slideshowIndex-1].className += " active";
  setTimeout(showTimedSlides, 4000); // Change image every 4 seconds
}
