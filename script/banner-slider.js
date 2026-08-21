const header = document.querySelector("header");
const menuButton = document.querySelector(".menu_trigger");
const categoryButtons = document.querySelectorAll(".category_button");

menuButton.addEventListener("click", function () {
    header.classList.toggle("menu_open");
});

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const menuItem = button.parentElement;
        const category = menuItem.nextElementSibling;
        const categoryDetail = category.querySelector("details");

        category.classList.toggle("open");
        categoryDetail.open = category.classList.contains("open");
    });
});
document.querySelectorAll(".banner.swiper").forEach((banner) => {
    new Swiper(banner, {
        loop: true,
        speed: 700,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: banner.querySelector(".swiper-pagination"),
            clickable: true,
        },
        keyboard: { enabled: true },
    });
});
