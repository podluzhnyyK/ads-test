/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const ads = document.querySelector('#ads');
const adCard = document.querySelector('.ad');
let i = 0;

async function getAds() {
    const response = await fetch('https://6075786f0baf7c0017fa64ce.mockapi.io/products');
    const data = await response.json();
    const result = await data;
    console.log(result);

    // наполнение данными
    for (const item in result) {
        i =+ 1;
        console.log(i);
        const ad = result[item];

        const balloonTemplate = document.querySelector('#card').content.querySelector('.ad');
        const cardElement = balloonTemplate.cloneNode(true);

        cardElement.querySelector('.ad__old-price').textContent = ad.oldPrice;
        cardElement.querySelector('.ad__new-price').textContent = ad.price;
        cardElement.querySelector('.ad__name').textContent = ad.title;
        cardElement.querySelector('.ad__city').textContent = ad.locality;
        cardElement.querySelector('.ad__date').textContent = ad.date;

        ads.append(cardElement);

        if (ad.seen) {
            cardElement.classList.add('viewed');
        }

        if (ads.children.length === 16) {
            const h = ads.offsetHeight;
            ads.style.height = `${h}px`;
        }
    }
}

getAds();

// more
document.querySelector('.more').addEventListener('click', () => {
    ads.classList.add('ads--more');
});

// sleder
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
