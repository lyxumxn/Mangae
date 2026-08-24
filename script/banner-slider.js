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

document.querySelectorAll(".card_swiper:not(.store_swiper)").forEach(function (slider) {
    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 12,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
        },
    });
});

const storeSlider = document.querySelector(".store_swiper");
let storeSwiper;

function storeSlide() {
    if (!storeSlider) {
        return;
    }

    if (window.innerWidth >= 1025 && !storeSwiper) {
        storeSwiper = new Swiper(storeSlider, {
            slidesPerView: 3,
            spaceBetween: 18,
        });
    }

    if (window.innerWidth < 1025 && storeSwiper) {
        storeSwiper.destroy(true, true);
        storeSwiper = null;
    }
}

storeSlide();
window.addEventListener("resize", storeSlide);
