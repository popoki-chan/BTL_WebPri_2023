const openSideMenu = document.querySelector('.open-sm');
const exitSideMenu = document.querySelector('.exit-sm');
const sideMenu = document.querySelector('.side-menu');

openSideMenu.onclick = () => {
    sideMenu.style.display = "block";
};

exitSideMenu.onclick = () => {
    sideMenu.style.display = "none";
};

const nationalElem = document.querySelector('.national');
const exitLang = document.querySelector('.exit-lg');
const langElement = document.querySelector('.language');

nationalElem.onclick = () => {
    langElement.style.display = "block";
};

exitLang.onclick = () => {
    langElement.style.display = "none";
};

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

let slideIndexTwo = [1,1];
let slideId = ["make-slide", "make-slide2"]
showSlidesTwo(1, 0);
showSlidesTwo(1, 1);

function plusSlides2(n, no) {
  showSlidesTwo(slideIndexTwo[no] += n, no)
};

function currentSlide2(n, no) {
    showSlidesTwo(slideIndexTwo[no] = n, no)
};

function showSlidesTwo(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let changeColor = document.querySelectorAll(".name-car");
    let info = document.querySelectorAll(".row-2-col-1");
    let info2 = document.querySelectorAll(".row-2-col-2");
    let info3 = document.querySelectorAll(".row-2-col-3");
    let info4 = document.querySelectorAll(".row-2-col-4");
    let info5 = document.querySelectorAll(".row-3-col-1");
    let info6 = document.querySelectorAll(".row-3-col-2");
    let info7 = document.querySelectorAll(".row-3-col-3");
    let info8 = document.querySelectorAll(".row-3-col-4");

    if (n > x.length) {slideIndexTwo[no] = 1}    
    if (n < 1) {slideIndexTwo[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        info[i].style.display = "none"; 
        info2[i].style.display = "none";
        info3[i].style.display = "none";
        info4[i].style.display = "none";
        info5[i].style.display = "none"; 
        info6[i].style.display = "none";
        info7[i].style.display = "none";
        info8[i].style.display = "none";        
    }

    for (i = 0; i < changeColor.length; i++) {
        changeColor[i].className = changeColor[i].className.replace(" change", "");
    }

    x[slideIndexTwo[no]-1].style.display = "block";
    changeColor[slideIndexTwo[no]-1].className += " change";
    info[slideIndexTwo[no]-1].style.display = "block"; 
    info2[slideIndexTwo[no]-1].style.display = "block";
    info3[slideIndexTwo[no]-1].style.display = "block";
    info4[slideIndexTwo[no]-1].style.display = "block";
    info5[slideIndexTwo[no]-1].style.display = "block"; 
    info6[slideIndexTwo[no]-1].style.display = "block";
    info7[slideIndexTwo[no]-1].style.display = "block";
    info8[slideIndexTwo[no]-1].style.display = "block";
};



