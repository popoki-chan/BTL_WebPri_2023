
//discovery
const arrProduct = [
    { ma: "SP01", name: "Xe máy điện Evo200 Lite", hinh: "sp01.jpg", price: "18.000.000", saled: "Đã bán 5.4k", note: "Evo20 LTE", inf_note: "Xe học sinh - Không cần bằng lái" },
    { ma: "SP02", name: "Xe máy điện VinFast Vento S", hinh: "sp02.jpg", price: "50.000.000", saled: "Đã bán 1k", note: "Vento S", inf_note: "Chống trộm vượt trội" },
    { ma: "SP03", name: "Xe máy điện VinFast Klara S (2022)", hinh: "sp03.jpg", price: "35.000.000", saled: "Đã bán 9k", note: "Klara S", inf_note: "Thiết kế Ý - Lướt mê ly" },
    { ma: "SP04", name: "Xe máy điện VinFast Theon S", hinh: "sp04.jpg", price: "63.000.000", saled: "Đã bán 700", note: "Theon S", inf_note: "Vít ga bứt phá 99km/h" }
];

var str = "";

for (let index = 0; index < arrProduct.length; index++) {
    str += `
    <div class="product">
                <img src="/src/image/image-motobikePage/${arrProduct[index].hinh}" alt="">
                 <p class="b-sale">Bán chạy</p>
                <div class="inf">
                    <h3>${arrProduct[index].note}</h3>
                    <p>${arrProduct[index].inf_note}</p>
                </div>
                <p class="name">${arrProduct[index].name}</p>
                <div class="price">
                    <p>${arrProduct[index].price}</p>
                    <div class="buy">
                        <p>${arrProduct[index].saled}</p>
                        <button>MUA NGAY</button>
                    </div>
                </div>
            </div>
    `
}
document.querySelector(".list-product").innerHTML = str;

//endow
const arrNewEndow = [
    { hinh1: "endow1.jpg", tieuDe: "Back to school - Ưu đãi pin VinFast từ tháng đầu tiên cho học sinh, sinh viên", text: "Từ 02/8 - 30/9/2023, Công ty TNHH TM ACS Việt Nam triển khai chương trình “Back to school  Năm học mới” với ưu đãi mua/thuê pin VinFast áp dụng từ tháng đầu tiên dành riêng cho các bạn học sinh, sinh viên." },
    { hinh1: "endow2.jpg", tieuDe: "VinFast x Mcredit - Sắm Xe Điện, Trả Góp Siêu Tiện", text: "Sở hữu những chiếc xe máy điện VinFast thông minh, thân thiện với môi trường từ nay sẽ thật dễ dàng với gói vay trả góp ưu đãi lãi suất siêu tiện chỉ 0.99%/tháng, miễn lãi hoàn toàn trong 4 tháng đầu từ Mcredit dành cho khách hàng mua xe máy điện VinFast trên toàn quốc." },
    { hinh1: "endow4.jpg", tieuDe: "Evo200 Lite chào hè 2023 - Ưu đãi giá chỉ còn 19,4 triệu đồng ", text: "Xe máy điện VinFast công bố triển khai chương trình khuyến mãi “Evo200 Lite chào Hè 2023”, với mức giá chỉ còn 19,4 triệu đồng/xe; phí thuê bao pin đồng hạng chỉ còn 199.000 đồng/tháng. Chương trình áp dụng từ ngày 20/6 đến 20/9/2023 qua website VinFast hoặc trực tiếp tại hệ thống showroom, đại lý ủy quyền của VinFast trên toàn quốc." },
    { hinh1: "endow3.jpg", tieuDe: "VinFast tri ân khách hàng với ưu đãi 1 triệu đồng khi mua xe máy điện", text: "Từ ngày 27/03 đến hết ngày 26/04/2023, khách hàng đã sở hữu ô tô hoặc xe máy điện VinFast sẽ nhận được ưu đãi giảm thêm 1 triệu đồng vào giá xe khi mua xe máy điện VinFast. Sở hữu ngay các mẫu xe điện thế hệ mới với mức giá chỉ từ 21 triệu đồng" },
    { hinh1: "endow5.jpg", tieuDe: "Back to school - Ưu đãi pin VinFast từ tháng đầu tiên cho học sinh, sinh viên", text: "Từ 02/8 - 30/9/2023, Công ty TNHH TM ACS Việt Nam triển khai chương trình “Back to school  Năm học mới” với ưu đãi mua/thuê pin VinFast áp dụng từ tháng đầu tiên dành riêng cho các bạn học sinh, sinh viên." },
    { hinh1: "endow6.jpg", tieuDe: "VinFast x Mcredit - Sắm Xe Điện, Trả Góp Siêu Tiện", text: "Sở hữu những chiếc xe máy điện VinFast thông minh, thân thiện với môi trường từ nay sẽ thật dễ dàng với gói vay trả góp ưu đãi lãi suất siêu tiện chỉ 0.99%/tháng, miễn lãi hoàn toàn trong 4 tháng đầu từ Mcredit dành cho khách hàng mua xe máy điện VinFast trên toàn quốc." },

];

var str1 = "";
for (let i = 0; i < arrNewEndow.length; i++) {
    str1 += `
    <div class="column">
    <div class="endow-pic">
        <img src="/src/image/image-motobikePage/${arrNewEndow[i].hinh1}" alt="">
    </div>
    <div class="content">
        <h4>${arrNewEndow[i].tieuDe}</h4>
        <p>${arrNewEndow[i].text}</p>
    </div>
</div>
    `
}
document.querySelector(".endow-list").innerHTML = str1;

//Phần best-sale


//news
const arrNews = [
    { hinh1: "news1.jpg", tieuDe: "Xe máy điện VinFast kiến tạo tương lai xanh tại Việt Nam", text: "(Theo VOV) - Xe máy điện với những ưu điểm về tính năng vận hành, thân thiện môi trường ngày càng được tin dùng để thay thế cho các loại phương tiện giao thông truyền thống." },
    { hinh1: "news2.jpg", tieuDe: "Xe máy điện VinFast cùng bạn sống xanh và thông minh tại sự kiện Xanh To School siêu HOT!!!", text: "Để mang đến những trải nghiệm thú vị cho các thế hệ sinh viên trong trường, VinFast đã đồng hành cùng Phenikaa tổ chức sự kiện “Xanh To School - Cùng bạn sống xanh và thông minh” với nhiều hoạt động mới mẻ, hấp dẫn chưa từng có vào ngày 25-27/9/2023!" },
    { hinh1: "news3.jpg", tieuDe: "Vốn 500 triệu nên kinh doanh gì? 5 ý tưởng đầu tư sinh lời 2023", text: "Vốn 500 triệu nên kinh doanh gì không còn là bài toán khó đối với những người đã nắm bắt được tình hình thị trường trong nước. Một trong số những ý tưởng đầu tư triển vọng nhất hiện nay là kinh doanh các sản phẩm thân thiện với môi trường." },
    { hinh1: "news4.jpg", tieuDe: "Xe máy bị nóng máy chạy yếu: Nguyên nhân và cách khắc phục", text: "Xe máy hoạt động trong thời gian dài hoặc chịu ảnh hưởng từ các yếu tố môi trường thường gặp hiện tượng nóng máy. Nguyên nhân trực tiếp dẫn đến tình trạng này là do việc hư hỏng một số bộ phận bao gồm: hệ thống làm mát, bugi, bộ lọc gió,..." },
    { hinh1: "news5.jpg", tieuDe: "Cách tích hợp giấy phép lái xe, đăng ký xe vào VNeID", text: "Cách tích hợp giấy phép lái xe vào VNeID giúp chủ phương tiện thuận tiện hơn khi lưu thông, tránh tình trạng quên hoặc mất giấy tờ xe. Tìm hiểu ngay cách tích hợp nhanh chóng, dễ dàng chỉ với vài thao tác đơn giản." },
    { hinh1: "news6.jpg", tieuDe: "Người mệnh kim nên kinh doanh gì? Ý tưởng kinh doanh phù hợp", text: "Mệnh Kim kinh doanh gì là thắc mắc của nhiều người khi có ý định khởi nghiệp. Theo tử vi ngũ hành, người mệnh Kim nên kinh doanh các thiết bị điện tử, cơ khí, vàng bạc, trang sức, quần áo,...    " },
    { hinh1: "news7.jpg", tieuDe: "Có nên dán chống xước xe máy? Dán xe máy bao nhiêu tiền?", text: "Dán chống xước xe máy là hình thức phổ biến nhằm bảo vệ, giữ gìn vẻ đẹp thẩm mỹ cho phương tiện. Tìm hiểu các loại dán chống xước xe máy và giá thành hiện nay." },
    { hinh1: "news8.jpg", tieuDe: "Lỗi che biển số xe máy bị phạt bao nhiêu tiền?", text: "Việc che biển số xe máy là hành vi vi phạm pháp luật và bị xử phạt rất nặng. Các chủ phương tiện cần tìm hiểu quy định về biển số xe máy mới nhất 2023 và các mức phạt lỗi che biển số để đảm bảo tuân thủ đầy đủ luật lệ giao thông." },
    { hinh1: "news9.jpg", tieuDe: "Quy trình bấm biển số xe máy mới nhất 2023", text: "Biển số xe máy là ký hiệu để chủ sở hữu nhận diện phương tiện cá nhân được cơ quan công an cấp nhằm dễ dàng quản lý phương tiện giao thông. Để thuận tiện khi đi bấm biển số xe máy, chủ phương tiện cần nắm được trình tự đăng ký và một vài lưu ý khi thực hiện." },
    { hinh1: "news10.jpg", tieuDe: "Nhà phân phối là gì? Kinh nghiệm làm nhà phân phối kinh doanh", text: "Nhà phân phối là gì là câu hỏi thắc mắc của nhiều người khi bắt đầu tìm hiểu các hình thức kinh doanh. Theo đó, nhà phân phối là đơn vị trung gian giúp kết nối các sản phẩm/dịch vụ của công ty cung cấp tới đại lý và người tiêu dùng cuối cùng." }
]

var str2 = "";
for (let i = 0; i < arrNews.length; i++) {
    str2 += `
    <div class="column">
    <div class="endow-pic">
        <img src="/src/image/image-motobikePage/${arrNews[i].hinh1}" alt="">
    </div>
    <div class="content">
        <h4>${arrNews[i].tieuDe}</h4>
        <p>${arrNews[i].text}</p>
    </div>
</div>
    `
}

document.querySelector(".news-list").innerHTML = str2;

//button: prev, next
$('.endow-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});

$('.news-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});

ScrollReveal({
    reset: false,
    distance: '50px',
    duration: 2500,
    delay: 400
});
// ScrollReveal().reveal('.discover, .best-sale, .endow, .news, .div', { delay: 50, origin: 'left', inveral: 200 });



const openSideService = document.querySelector('.drop-down');
const list = document.querySelector('.list-service');

openSideService.addEventListener('click', function () {
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});
