//History
const historyList = [
    obj1 = {img: '/src/image/img-gioiThieu/history/hs1.png', date: '15.08.2023', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj2 = {img: '/src/image/img-gioiThieu/history/hs2.png', date: '21.04.2023', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj3 = {img: '/src/image/img-gioiThieu/history/hs3.jpg', date: '27.03.2023', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj4 = {img: '/src/image/img-gioiThieu/history/hs4.png', date: '26.04.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj5 = {img: '/src/image/img-gioiThieu/history/hs5.png', date: '07.04.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj6 = {img: '/src/image/img-gioiThieu/history/hs6.png', date: '30.03.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj8 = {img: '/src/image/img-gioiThieu/history/hs8.png', date: '20.01.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj9 = {img: '/src/image/img-gioiThieu/history/hs9.png', date: '15.01.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj10 = {img: '/src/image/img-gioiThieu/history/hs10.png', date: '15.01.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj11 = {img: '/src/image/img-gioiThieu/history/hs11.png', date: '06.01.2022', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj12 = {img: '/src/image/img-gioiThieu/history/hs12.png', date: '15.12.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj13 = {img: '/src/image/img-gioiThieu/history/hs13.png', date: '15.10.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj14 = {img: '/src/image/img-gioiThieu/history/hs14.png', date: '12.07.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj15 = {img: '/src/image/img-gioiThieu/history/hs15.png', date: '24.03.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj16 = {img: '/src/image/img-gioiThieu/history/hs16.png', date: 'Th 03.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj17 = {img: '/src/image/img-gioiThieu/history/hs17.png', date: 'Th 03.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj18 = {img: '/src/image/img-gioiThieu/history/hs18.png', date: '16.01.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj19 = {img: '/src/image/img-gioiThieu/history/hs19.png', date: 'Th 03.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj20 = {img: '/src/image/img-gioiThieu/history/hs20.png', date: '22.01.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj21 = {img: '/src/image/img-gioiThieu/history/hs21.png', date: '21.01.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj22 = {img: '/src/image/img-gioiThieu/history/hs22.png', date: '07.09.2021', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj23 = {img: '/src/image/img-gioiThieu/history/hs23.png', date: '23.10.2019', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj24 = {img: '/src/image/img-gioiThieu/history/hs24.png', date: 'T9 - T12.2019', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj25 = {img: '/src/image/img-gioiThieu/history/hs25.png', date: '17.06.2019', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj26 = {img: '/src/image/img-gioiThieu/history/hs26.png', date: '14.06.2019', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj27 = {img: '/src/image/img-gioiThieu/history/hs27.png', date: '20.11.2018', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj28 = {img: '/src/image/img-gioiThieu/history/hs28.png', date: '03.11.2018', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj29 = {img: '/src/image/img-gioiThieu/history/hs29.png', date: '01.01.2018', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj30 = {img: '/src/image/img-gioiThieu/history/hs30.png', date: '02.09.2017', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
    obj31 = {img: '/src/image/img-gioiThieu/history/hs31.png', date: '02.09.2017', desc: 'VinFast chính thức niêm yết trên Nasdaq Global Select Market'},
];

let historyHtml = '';
for (let i = 0; i < historyList.length; i++) {
    const html = `
        <div class="item">
            <div class="item--img">
                <img src="${historyList[i].img}" alt="">
            </div>
            <div class="infor">
                <p class="date">${historyList[i].date}</p>
                <p class="desc">${historyList[i].desc}</p>
            </div>
        </div>
    `;
    historyHtml += html;
    document.querySelector('.history .list-item').innerHTML = historyHtml;
}

const hList = document.querySelector('.history .list-item');
const hItems = document.querySelectorAll('.history .list-item .item');
const dots = document.querySelectorAll('.history .time-line .item');

let hIndex = 0;
let lengthDot = dots.length;

function loadHistorySlider() {
    let checkLeft = hItems[hIndex].offsetLeft;
    hList.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.history .time-line .item.active');
    lastActiveDot.classList.remove('active');
    dots[hIndex].classList.add('active');
}
console.log(lengthDot);
dots.forEach((item, key) => {
    item.addEventListener('click', () => {
        hIndex = key;
        if (key > lengthDot - 4) hIndex = lengthDot - 4;
        loadHistorySlider();
    })
});
const prizeList = [
    p1 = {img: '/src/image/img-gioiThieu/prize/prize1.png', year: 2022, desc: 'VinFast tiếp tục được vinh danh "Xe được yêu thích nhất phân khúc" cho cả 3 dòng xe gồm Fadil, Lux A2.0, Lux SA2.0, VF e34 tại bình chọn "Xe của năm 2022" bởi cộng đồng OTOFUN và OTOSAIGON'},
    p2 = {img: '/src/image/img-gioiThieu/prize/prize2.png', year: 2022, desc: 'Vinfast được trao kỷ lục "Đoàn caravan xe điện nhiều nhất Việt Nam" do Hội Kỷ lục giao chứng nhận'},
    p3 = {img: '/src/image/img-gioiThieu/prize/prize3.png', year: 2021, desc: 'VinFast Lux A2.0 được bình chọn là Ô tô của năm phân khúc sedan cỡ D-E trong khuôn khổ lễ trao giải Car Awards 2021 do VnExpress-Xe tổ chức.'},
    p4 = {img: '/src/image/img-gioiThieu/prize/prize4.png', year: 2021, desc: 'VinFast là hãng xe được đánh giá cao nhất về chất lượng dịch vụ trong lễ trao giải Car Awards 2021 do VnExpress-Xe tổ chức.'},
    p5 = {img: '/src/image/img-gioiThieu/prize/prize5.png', year: 2021, desc: 'VinFast chiến thắng giải xe được yêu thích nhất phân khúc tại Chương trình “Bình chọn xe của năm 2021” bởi 2 cộng đồng OTOFUN và OTOSAIGON.'},
    p6 = {img: '/src/image/img-gioiThieu/prize/prize6.png', year: 2020, desc: 'VVinFast được ASEAN NCAP vinh danh “Hãng xe mới có cam kết  cao về an toàn” Grand Prix Award 2020.'},
    p7 = {img: '/src/image/img-gioiThieu/prize/prize7.png', year: 2020, desc: 'Các mẫu xe Fadil, Lux A2.0, Lux SA2.0 dẫn đầu doanh số bán xe tại các phân khúc tham gia.'},
    p8 = {img: '/src/image/img-gioiThieu/prize/prize8.png', year: 2019, desc: 'VinFast Lux A2.0 và Vinfast Lux SA2.0 đạt chuẩn an toàn 5 sao ASEAN NCAP'},
    p9 = {img: '/src/image/img-gioiThieu/prize/prize9.png', year: 2019, desc: 'VinFast Fadil đạt chuẩn an toàn 4 sao ASEAN NCAP'},
    p10 = {img: '/src/image/img-gioiThieu/prize/prize10.png', year: 2018, desc: 'VinFast được Auto Best trao giải thưởng "A star is born"'},
]

let prizeHtml = '';
for (let i = 0; i < prizeList.length; i++) {
    const html = `
        <div class="item flex">
            <div class="item--img">
                <img src="${prizeList[i].img}" alt="">
            </div>
            <div class="infor">
                <p class="title">Giải thưởng</p>
                <p class="year">${prizeList[i].year}</p>
                <p class="desc">${prizeList[i].desc}</p>
            </div>
        </div>
    `;
    prizeHtml += html;
    document.querySelector('.prize .prize--list').innerHTML = prizeHtml;
}

const pList = document.querySelector('.prize .prize--list');
const pItem = document.querySelectorAll('.prize .prize--list .item');
const preButton = document.querySelector('.prize--control .btn--pre');
const nextButton = document.querySelector('.prize--control .btn--next');
const pagination = document.querySelector('.prize .pagination');

let slideIndex = 0;
let lengthItems = pItem.length - 1;

nextButton.onclick = function() {
    if (slideIndex + 1 >= lengthItems) {
        slideIndex = lengthItems;
        nextButton.style.opacity = "0.6";
    } else {
        slideIndex += 1;
        preButton.style.opacity = "1";
        nextButton.style.opacity = "1";
    }
    reloadSlider();
}

preButton.onclick = function() {
    if (slideIndex - 1 <= 0) {
        slideIndex = 0;
        preButton.style.opacity = "0.6";
    } else {
        slideIndex -= 1;
        preButton.style.opacity = "1";
        nextButton.style.opacity = "1";
    }
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = pItem[slideIndex].offsetLeft;
    pList.style.left = -checkLeft + 'px';

    let p = '0';
    if (slideIndex < 9) {
        p += slideIndex + 1;
        pagination.innerHTML = `${p} / ${lengthItems + 1}`;
    } else {
        pagination.innerHTML = `${slideIndex + 1} / ${lengthItems + 1}`;;
    }
}
