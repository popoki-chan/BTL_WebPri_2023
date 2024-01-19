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

