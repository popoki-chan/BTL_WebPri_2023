//Slide 1
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
    let slides = document.getElementsByClassName("img-slide-1");
    let dots = document.querySelectorAll(".circle");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
};

//Slide 2
let slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);
function plusSlides2(n) {
  showSlidesTwo(slideIndexTwo += n)
};
function currentSlide2(n) {
    showSlidesTwo(slideIndexTwo = n)
};
function showSlidesTwo(n) {
    let i;
    let x = document.getElementsByClassName('make-slide');
    let changeColor = document.querySelectorAll(".name-car");
    let info1 = document.querySelectorAll(".row-2-col-1");
    let info2 = document.querySelectorAll(".row-2-col-2");
    let info3 = document.querySelectorAll(".row-2-col-3");
    let info4 = document.querySelectorAll(".row-2-col-4");
    if (n > x.length) {slideIndexTwo = 1}    
    if (n < 1) {slideIndexTwo = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        info1[i].style.display = "none"; 
        info2[i].style.display = "none";
        info3[i].style.display = "none";
        info4[i].style.display = "none";   
    }
    for (i = 0; i < changeColor.length; i++) {
        changeColor[i].className = changeColor[i].className.replace(" change", "");
    }
    x[slideIndexTwo-1].style.display = "block";
    changeColor[slideIndexTwo-1].className += " change";
    info1[slideIndexTwo-1].style.display = "block"; 
    info2[slideIndexTwo-1].style.display = "block";
    info3[slideIndexTwo-1].style.display = "block";
    info4[slideIndexTwo-1].style.display = "block";
};

//Slide 3
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n)
};

function currentSlide3(n) {
    showSlides3(slideIndex3 = n)
};

function showSlides3(n) {
    let i;
    let x = document.getElementsByClassName('make-slide2');
    let changeColor = document.querySelectorAll(".logo-motor");
    let active = document.querySelectorAll(".logo-motor");
    let info5 = document.querySelectorAll(".row-3-col-1");
    let info6 = document.querySelectorAll(".row-3-col-2");
    let info7 = document.querySelectorAll(".row-3-col-3");
    let info8 = document.querySelectorAll(".row-3-col-4");

    if (n > x.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        info5[i].style.display = "none"; 
        info6[i].style.display = "none";
        info7[i].style.display = "none";
        info8[i].style.display = "none";        
    }

    for (i = 0; i < changeColor.length; i++) {
        changeColor[i].className = changeColor[i].className.replace(" active path");
        active[i].className = active[i].className.replace(" active");
    }

    x[slideIndex3-1].style.display = "block";
    changeColor[slideIndex3-1].className += " active path";
    active[slideIndex3-1].className += " active";
    info5[slideIndex3-1].style.display = "block"; 
    info6[slideIndex3-1].style.display = "block";
    info7[slideIndex3-1].style.display = "block";
    info8[slideIndex3-1].style.display = "block";
};



