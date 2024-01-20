// Open and close side menu
const openSideMenu = document.querySelector('.open-sm');
const exitSideMenu = document.querySelector('.exit-sm');
const sideMenu = document.querySelector('.side-menu');

openSideMenu.onclick = () => {
    sideMenu.style.display = "block";
};
exitSideMenu.onclick = () => {
    sideMenu.style.display = "none";
};

// Open and close language menu
const nationalElem = document.querySelector('.national');
const exitLang = document.querySelector('.exit-lg');
const langElement = document.querySelector('.language');

nationalElem.onclick = (event) => {
    langElement.style.display = "block";
};
exitLang.onclick = () => {
    langElement.style.display = "none";
};

// Car
const car = document.querySelector('.menu .car');
const carDropdown = document.querySelector('.menu .car .menu-lv2');

car.onclick = () => {
    if (!carDropdown.classList.contains('display-flex'))  carDropdown.classList.add('display-flex');
    else carDropdown.classList.remove('display-flex');

    carDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    })
};

const petrolCar = document.querySelector('.menu-lv2 .car--petrol');
const elecCar = document.querySelector('.menu-lv2 .car--electric');
const inforCar = document.querySelectorAll('.menu-lv2 .car--infor');
const styleCar = document.querySelectorAll('.menu-lv2 .car--style p');

function displayCar(key) {
    let lastActive = document.querySelector('.menu-lv2 .car--style .active');

    lastActive.classList.remove('active');
    styleCar[key].classList.add('active');
    if (key == 1) {
        petrolCar.style.display = 'flex';
        elecCar.style.display = 'none';
    }
    else {
        petrolCar.style.display = 'none';
        elecCar.style.display = 'flex';
    }
};

styleCar.forEach((item, key) => {
    item.addEventListener('click', (event) => {
        displayCar(key);
        event.stopPropagation();
    })
});

// Service
const service = document.querySelector('.menu .service');
const serviceDropdown = document.querySelector('.menu .service .menu-lv2');

service.onclick = () => {
    if (!serviceDropdown.classList.contains('display-flex'))  serviceDropdown.classList.add('display-flex');
    else serviceDropdown.classList.remove('display-flex');
    
    serviceDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    })
};

// Battery
const battery = document.querySelector('.menu .battery');
const batteryDropdown = document.querySelector('.menu .battery .menu-lv2');

battery.onclick = () => {
    if (!batteryDropdown.classList.contains('display-flex'))  batteryDropdown.classList.add('display-flex');
    else batteryDropdown.classList.remove('display-flex');

    batteryDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    })
};

// Footer
const footer = document.querySelector('#footer');
const mainMenu = footer.querySelectorAll('.main-menu')
const subMenu = footer.querySelectorAll('.main-menu .sub-menu')
const arrowMenu = footer.querySelectorAll('.main-menu i');

for (let i = 0; i < arrowMenu.length; i++) {
    arrowMenu[i].onclick = () => {
        if (!mainMenu[i].classList.contains('active')) mainMenu[i].classList.add('active');
        else mainMenu[i].classList.remove('active');
    
        // if (subMenu[i].classList.contains('display')) subMenu[i].classList.remove('display');
        // else subMenu[i].classList.add('display');
        subMenu[i].classList.toggle('hidden');
    }
}

// Auto close menu dropdown
document.addEventListener('click', (event) => {
    for (let i = 0; i < subMenu.length; i++)
        if (!subMenu[i].contains(event.target) && !arrowMenu[i].contains(event.target)) {
            subMenu[i].classList.add('hidden');
            mainMenu[i].classList.remove('active');
        }

    if (!serviceDropdown.contains(event.target) && !service.contains(event.target)) {
        serviceDropdown.classList.remove('display-flex')
    }

    if (!car.contains(event.target) && !carDropdown.contains(event.target)) {
        carDropdown.classList.remove('display-flex')
    }

    if (!battery.contains(event.target) && !batteryDropdown.contains(event.target)) {
        batteryDropdown.classList.remove('display-flex')
    }
})