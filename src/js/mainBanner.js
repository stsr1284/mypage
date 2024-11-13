
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // 한 번에 보일 슬라이드 수
        spaceBetween: 10, // 슬라이드 간의 간격
        loop: true, // 무한 루프
        navigation: {
            nextEl: '#next',
            prevEl: '#prev',
        },
        // Optional: 자동 슬라이드
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });    
});